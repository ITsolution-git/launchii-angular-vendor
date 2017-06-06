(function() {
    'use strict';

    angular.module('app.deals')
        .controller('DealApprovedController', DealApprovedController);

    DealApprovedController.$inject = ['DealService', '$timeout', '$window', '$scope', '$log', 'prepDealType'];

    /* @ngInject */
    function DealApprovedController(DealService, $timeout, $window, $scope, $log, prepDealType) {
        var vm = this;

        vm.response = {};
        vm.isLoading = false;

        vm.filterDealType = prepDealType;
        vm.filterDealStatus = 'approved';

        vm.deals = [];

        vm.publishDeal = publishDeal;

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

        function publishDeal(element, deal){
            var ladda_elem = Ladda.create(element).start();
            doPublish(deal, ladda_elem);
        }

        function doPublish(deal, ladda_elem) {
            DealService.publish(deal.uid).then(function(resp) {
                vm.response['success'] = "alert-success";
                vm.response['alert'] = "Success!";
                vm.response['msg'] = "Publishd deal: " + deal.name;
                getByStatus();
                $timeout(function() {
                    vm.response.msg = null;
                }, 3000);
                ladda_elem.remove();

            }).catch(function(err) {
                $log.log(err);
                vm.response['success'] = "alert-danger";
                vm.response['alert'] = "Error!";
                vm.response['msg'] = "Failed to publish deal: " + deal.name;
                ladda_elem.remove();
            });
        }
    }
})();
