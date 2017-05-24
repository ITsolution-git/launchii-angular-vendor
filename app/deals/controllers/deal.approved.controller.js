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

        vm.filterDealStatus = 'approved';
        vm.searchTerm = '';

        vm.currPage = 1;
        vm.totalDeals = 0;
        vm.dealsPerPage = "10";
        vm.deals = [];

        vm.search = search;
        vm.startSearch = startSearch;
        vm.clearSearch = clearSearch;
        vm.publishDeal = publishDeal;

        if ($window.__env.apiUrl.toLowerCase().indexOf('stageapi') > -1) {
          vm.customerHost = 'http://staging.launchii.com';
        } else {
          vm.customerHost = 'http://www.launchii.com';
        }

        activate();

        ////////////////

        function activate() {
            getByStatus();
        }

        function startSearch() {
            vm.currPage = 1;
            search();
        }

        function clearSearch() {
            vm.searchTerm = '';
            startSearch();
        }

        function getByStatus(){
            vm.deals = [];
            vm.isLoading = true;
            DealService.getByStatus(vm.filterDealStatus).then(function(resp) {
                vm.deals = resp;
                vm.isLoading = false;
            }).catch(function(err) {
                $log.log(err);
                vm.isLoading = false;
            });            
        }

        function search() {
            vm.deals = [];
            vm.isLoading = true;
            vm.searchTerm = vm.searchTerm.trim();
            DealService.search(vm.searchTerm).then(function(resp) {
                vm.deals = resp;
                vm.isLoading = false;
            }).catch(function(err) {
                $log.log(err);
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
