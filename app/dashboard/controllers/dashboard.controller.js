(function() {
    'use strict';

    angular.module('app')
        .controller('DashboardController', DashboardController);

    DashboardController.$inject = ['$scope', '$rootScope', 'DashboardService', 'HelperService', '$log'];

    /* @ngInject */
    function DashboardController($scope, $rootScope, DashboardService, HelperService, $log) {
        var vm = this;

        vm.errorMessage = null;
        vm.basicReport = null;

        activate();

        //////////////

        function activate() {
            vm.page_title = "Dashboard";

            requestBasicReport();
        }

        function requestBasicReport() {
            var vendorId = $rootScope.currentUser.uid;
            DashboardService.getGAReportingData(vendorId, 'basic').then(function(reports) {
                if (reports.error || !reports.reports) {
                    vm.errorMessage = reports.error ? reports.error : 'Something went wrong.';
                    return;
                }
                vm.basicReport = reports.reports[0];
                $log.log(vm.basicReport);
            }).catch(function(err) {
                $log.log(err);
                vm.errorMessage = 'Something went wrong.'
            });
        }
    }
})();
