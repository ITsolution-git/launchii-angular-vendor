(function() {
    'use strict';

    angular.module('app.deals')
        .controller('DealArchivedController', DealArchivedController);

    DealArchivedController.$inject = ['DealService', '$timeout', '$window', '$scope', '$log', 'prepDealType'];

    /* @ngInject */
    function DealArchivedController(DealService, $timeout, $window, $scope, $log, prepDealType) {
        var vm = this;

        vm.response = {};
        vm.isLoading = false;

        vm.filterDealType = prepDealType;
        vm.filterDealStatus = 'archived';

        vm.deals = [];

        activate();

        ////////////////

        function activate() {
            getByStatus();
        }

        function getByStatus(){
            vm.deals = [];
            vm.isLoading = true;
            DealService.search('', vm.filterDealType, vm.filterDealStatus, 1, 20).then(function(resp) {
                vm.deals = resp.deals;
                vm.isLoading = false;
            }).catch(function(err) {
                $log.log(err);
                vm.response['success'] = "alert-danger";
                vm.response['alert'] = "Error!";
                vm.response['msg'] = err.data != null ? err.data.errors[0] : "Failed to get deal list";
                vm.isLoading = false;
            });
        }
    }
})();
