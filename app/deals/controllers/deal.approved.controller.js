(function() {
    'use strict';

    angular.module('app.deals')
        .controller('DealApprovedController', DealApprovedController);

    DealApprovedController.$inject = ['DealService', '$timeout', '$window', '$scope', '$log'];

    /* @ngInject */
    function DealApprovedController(DealService, $timeout, $window, $scope, $log) {
        var vm = this;

        vm.response = {};
        vm.isLoading = false;

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
            DealService.search('', 'approved', 1, 20).then(function(resp) {
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
            Ladda.create(element).start();
            doPublish(deal);
        }

        function doPublish(deal) {
            DealService.publish(deal.uid).then(function(resp) {
                vm.response['success'] = "alert-success";
                vm.response['alert'] = "Success!";
                vm.response['msg'] = "Publishd deal: " + deal.name;
                getByStatus();
                $timeout(function() {
                    vm.response.msg = null;
                }, 3000);

            }).catch(function(err) {
                $log.log(err);
                vm.response['success'] = "alert-danger";
                vm.response['alert'] = "Error!";
                vm.response['msg'] = "Failed to publish deal: " + deal.name;
            });
        }
    }
})();
