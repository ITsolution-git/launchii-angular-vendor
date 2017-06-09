(function() {
    'use strict';

    angular.module('app.rocketDeals')
        .controller('RocketDealController', RocketDealController);

    RocketDealController.$inject = ['RocketDealService', 'rocketDealPrepService', '$log', '$timeout'];

    /* @ngInject */
    function RocketDealController(RocketDealService, rocketDealPrepService, $log, $timeout) {
        var vm = this;

        vm.prepRocketDeals = rocketDealPrepService;
        vm.rocketDeals = vm.prepRocketDeals.rocket_deals;
        vm.getRocketDeals = getRocketDeals;
        vm.hasDeleted = false;
        vm.response = {};
        vm.deleteRocketDeal = deleteRocketDeal;
        vm.response = {};
        vm.isDone = false;
        vm.search = search;
        vm.searchItem = '';
        vm.isLoading = false;
        vm.isRetrieving = false;
        vm.isSearch = false;
        vm.clearSearch = clearSearch;
        vm.isRocketDealEmpty = isRocketDealEmpty;

        //activate();

        ////////////////

        function activate() {
            return getRocketDeals();
        }

        function isRocketDealEmpty() {
            return vm.prepRocketDeals.total == 0;
        }

        function clearSearch() {
            vm.searchItem = '';
            search();
        }

        function search() {
            vm.isLoading = true;

            if (vm.searchItem.trim().length > 0) {
                vm.isSearch = true;
            } else {
                vm.isSearch = false;
            }

            RocketDealService.search(vm.searchItem).then(function(resp) {
                vm.rocketDeals = resp;
                vm.isLoading = false;
            }).catch(function(err) {
                $log.log(err);
            });
        }

        function getRocketDeals() {
            vm.isRetrieving = true;
            return RocketDealService.getAll().then(function(data) {
                vm.prepRocketDeals = data;
                vm.rocketDeals = vm.prepRocketDeals.rocket_deals;
                vm.isRetrieving = false;
                $timeout(function() {
                    vm.response.msg = false;
                }, 3000);
                return vm.rocketDeals;
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
                        if (!doDelete(rocketDeal)) {
                            ladda.stop();
                        }
                    }
                }
            });

        }

        function doDelete(rocketDeal) {
            RocketDealService.delete(rocketDeal.uid).then(function(resp) {
                vm.hasDeleted = true;
                vm.response['success'] = "alert-success";
                vm.response['alert'] = "Success!";
                vm.response['msg'] = "Deleted Rocket Deal: " + rocketDeal.name;
                getRocketDeals();
                vm.hasAdded = true;
                vm.isDone = true;
                return true;
            }).catch(function(err) {
                vm.response['success'] = "alert-danger";
                vm.response['alert'] = "Error!";
                vm.response['msg'] = "Can not delete Rocket Deal: " + rocketDeal.name;
                vm.response['error_arr'] = [];
                vm.response['error_arr'].push(err.data == null ? '' : err.data.errors);
                vm.hasAdded = true;
                vm.isDone = true;
                return false;
            });
        }
    }
})();
