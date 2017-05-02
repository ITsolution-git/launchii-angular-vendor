(function() {
    'use strict';

    angular.module('app')
        .controller('DashboardController', DashboardController);

    DashboardController.$inject = ['$scope', '$rootScope', 'DashboardService', 'HelperService', 'prepGAToken'];

    /* @ngInject */
    function DashboardController($scope, $rootScope, DashboardService, HelperService, prepGAToken) {
        var vm = this;

        vm.GAToken = prepGAToken;

        $scope.queries = [{
            query: {
                ids: 'ga:149212858',  // put your viewID here
                metrics: 'ga:sessions',
                dimensions: 'ga:city'
            }
        }];

        activate();

        //////////////

        function activate() {
            vm.page_title = "Dashboard";

            $scope.$on('$gaReportSuccess', function (event, response, element) {
                console.log('reportsuccess');
                console.log(event);
                console.log(response);
                console.log(element);
            });

            $scope.$on('$gaReportError', function (event, response, element) {
                console.log('reporterror');
                console.log(event);
                console.log(response);
                console.log(element);
            });
        }
    }
})();
