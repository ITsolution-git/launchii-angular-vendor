(function() {
    'use strict';

    angular.module('app.rocketDeals')
        .controller('RocketDealController', RocketDealController);

    RocketDealController.$inject = ['RocketDealService', '$log', '$timeout'];

    /* @ngInject */
    function RocketDealController(RocketDealService, $log, $timeout) {
        var vm = this;

        vm.response = {};
        vm.isLoading = false;

        vm.searchTerm = '';
        vm.filterRocketDealStatus = '';

        vm.currPage = 1;
        vm.totalRocketDeals = 0;
        vm.rocketDealsPerPage = '100';
        vm.rocketDeals = [];

        vm.search = search;
        vm.startSearch = startSearch;
        vm.clearSearch = clearSearch;
        vm.deleteRocketDeal = deleteRocketDeal;
        vm.requestApproval = requestApproval;

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

            var ignore_status = (vm.filterRocketDealStatus == 'finished') ? '' : 'finished'; 
            RocketDealService.search(vm.searchTerm, vm.filterRocketDealStatus, vm.currPage, vm.rocketDealsPerPage, ignore_status).then(function(resp) {
                vm.rocketDeals = resp.rocket_deals;
                vm.totalRocketDeals = resp.total;
                vm.isLoading = false;
            }).catch(function(err) {
                $log.log(err);
                vm.isLoading = false;
            });
        }

        function deleteRocketDeal(element, rocketDeal) {
            bootbox.confirm({
                title: "Confirm Delete",
                message: "Are you sure you want to delete Rocket Deal: <b>" + rocketDeal.name + "</b>?",
                buttons: {
                    confirm: {
                        label: 'Yes',
                        className: 'btn-success'
                    },
                    cancel: {
                        label: 'No',
                        className: 'btn-danger'
                    }
                },
                callback: function(result) {
                    if (result) {
                        var ladda = Ladda.create(element);
                        ladda.start();
                        doDelete(rocketDeal, ladda);
                    }
                }
            });

        }

        function doDelete(rocketDeal, ladda) {
            RocketDealService.delete(rocketDeal.uid).then(function(resp) {
                vm.response['success'] = "alert-success";
                vm.response['alert'] = "Success!";
                vm.response['msg'] = "Deleted Rocket Deal: " + rocketDeal.name;
                search();
                $timeout(function() {
                    vm.response.msg = null;
                }, 3000);
                ladda.remove();
            }).catch(function(err) {
                vm.response['success'] = "alert-danger";
                vm.response['alert'] = "Error!";
                vm.response['msg'] = "Can not delete Rocket Deal: " + rocketDeal.name;
                ladda.remove();
            });
        }

        function requestApproval(element, rocketDeal){
            var ladda = Ladda.create(element);
            ladda.start();

            RocketDealService.requestApproval(rocketDeal.uid).then(function(resp) {
                vm.response['success'] = "alert-success";
                vm.response['alert'] = "Success!";
                vm.response['msg'] = "Requested approval of rocket deal " + rocketDeal.name;
                $timeout(function() {
                    vm.response.msg = null;
                }, 3000);
                ladda.remove();
            }).catch(function(err) {
                vm.response['success'] = "alert-danger";
                vm.response['alert'] = "Error!";
                vm.response['msg'] = "Failed to requset approval of rocket deal " + rocketDeal.name;
                ladda.remove();
            });
        }
    }
})();
