(function() {
    'use strict';

    angular.module('app.rocketDeals')
        .controller('RocketDealFinishedController', RocketDealFinishedController);

    RocketDealFinishedController.$inject = ['RocketDealService', 'DealService', '$state', '$log', '$timeout'];

    /* @ngInject */
    function RocketDealFinishedController(RocketDealService, DealService, $state, $log, $timeout) {
        var vm = this;

        vm.response = {};
        vm.isLoading = false;

        vm.searchTerm = '';
        vm.filterRocketDealStatus = 'finished';

        vm.currPage = 1;
        vm.totalRocketDeals = 0;
        vm.rocketDealsPerPage = '100';
        vm.rocketDeals = [];

        vm.search = search;
        vm.startSearch = startSearch;
        vm.clearSearch = clearSearch;

        vm.navigateToDeal = navigateToDeal;

        activate();

        ////////////////

        function activate() {
            startSearch();
        }

        function startSearch() {
            search();
        }

        function clearSearch() {
            vm.searchItem = '';
            search();
        }

        function search() {
            vm.rocketDeals = [];
            vm.isLoading = true;
            vm.searchTerm = vm.searchTerm.trim();

            RocketDealService.search(vm.searchTerm, vm.filterRocketDealStatus, vm.currPage, vm.rocketDealsPerPage).then(function(resp) {
                vm.rocketDeals = resp.rocket_deals;
                vm.totalRocketDeals = resp.total;
                vm.isLoading = false;
            }).catch(function(err) {
                $log.log(err);
                vm.isLoading = false;
            });
        }

        function navigateToDeal(rocketDeal) {
            DealService.getById(rocketDeal.deal_id).then(function(deal) {
                if (deal.deal_type == 'upsell') {
                    $state.go('dashboard.upsell.view', {id: rocketDeal.deal_id});
                } else {
                    $state.go('dashboard.deal.view', {id: rocketDeal.deal_id});
                }
            }).catch(function(err) {
                $log.log(err);
            });
        }
    }
})();
