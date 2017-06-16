(function() {
    'use strict';

    angular.module('app.rocketDeals')
        .controller('RocketDealApprovedController', RocketDealApprovedController);

    RocketDealApprovedController.$inject = ['RocketDealService', '$log', '$timeout'];

    /* @ngInject */
    function RocketDealApprovedController(RocketDealService, $log, $timeout) {
        var vm = this;

        vm.response = {};
        vm.isLoading = false;

        vm.searchTerm = '';
        vm.filterRocketDealStatus = 'approved';

        vm.currPage = 1;
        vm.totalRocketDeals = 0;
        vm.rocketDealsPerPage = '100';
        vm.rocketDeals = [];

        vm.search = search;
        vm.startSearch = startSearch;
        vm.clearSearch = clearSearch;
        vm.publishRocketDeal = publishRocketDeal;

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

        function publishRocketDeal(element, rocketDeal){
            var ladda_elem = Ladda.create(element).start();
            doPublish(rocketDeal, ladda_elem);
        }

        function doPublish(rocketDeal, ladda_elem) {
            RocketDealService.publish(rocketDeal.uid).then(function(resp) {
                vm.response['success'] = "alert-success";
                vm.response['alert'] = "Success!";
                vm.response['msg'] = "Publishd rocket deal: " + rocketDeal.name;
                search();
                $timeout(function() {
                    vm.response.msg = null;
                }, 3000);
                ladda_elem.remove();

            }).catch(function(err) {
                $log.log(err);
                vm.response['success'] = "alert-danger";
                vm.response['alert'] = "Error!";
                vm.response['msg'] = "Failed to publish rocket deal: " + rocketDeal.name;
                ladda_elem.remove();
            });
        }
    }
})();
