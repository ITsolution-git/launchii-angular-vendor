(function() {
    'use strict';

    angular.module('app.upsells')
        .controller('UpsellController', UpsellController);

    UpsellController.$inject = ['UpsellService', '$timeout', '$window', '$scope', '$log', 'brandPrepService'];

    /* @ngInject */
    function UpsellController(UpsellService, $timeout, $window, $scope, $log, brandPrepService) {
        var vm = this;

        vm.response = {};
        vm.isLoading = false;

        vm.searchTerm = '';
        vm.filterUpsellStatus = '';

        vm.upsells = [];

        vm.search = search;
        vm.startSearch = startSearch;
        vm.clearSearch = clearSearch;
        vm.deleteUpsell = deleteUpsell;

        activate();

        ////////////////

        function activate() {
            startSearch();
        }

        function startSearch() {
            search();
        }

        function clearSearch() {
            vm.searchTerm = '';
            startSearch();
        }

        $scope.$watch('vm.filterUpsellStatus', function(newValue, oldValue) {
            if (newValue == oldValue) {
                return;
            }
            startSearch();
        });

        function search() {
            vm.upsells = [];
            vm.isLoading = true;
            vm.searchTerm = vm.searchTerm.trim();

            UpsellService.search(vm.searchTerm, vm.filterUpsellStatus, 1, 20).then(function(resp) {
                vm.upsells = resp.deals;
                vm.isLoading = false;
            }).catch(function(err) {
                $log.log(err);
                vm.isLoading = false;
            });
        }

        function deleteUpsell(element, upsell) {
            bootbox.confirm({
                title: "Confirm Delete",
                message: "Are you sure you want to delete upsell: <b>" + upsell.name + "</b>?",
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
                        Ladda.create(element).start();
                        doDelete(upsell);
                    }
                }
            });
        }

        function doDelete(upsell) {
            UpsellService.delete(upsell.uid).then(function(resp) {
                vm.response['success'] = "alert-success";
                vm.response['alert'] = "Success!";
                vm.response['msg'] = "Deleted upsell: " + upsell.name;
                search();
                $timeout(function() {
                    vm.response.msg = null;
                }, 3000);

            }).catch(function(err) {
                $log.log(err);
                vm.response['success'] = "alert-danger";
                vm.response['alert'] = "Error!";
                vm.response['msg'] = "Failed to delete upsell: " + upsell.name;
            });
        }
    }
})();
