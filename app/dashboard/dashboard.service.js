(function() {
    'use strict';

    angular.module('app')
        .factory('DashboardService', DashboardService);

    DashboardService.$inject = [
        '$http',
        'CONST',
        '$q',
        '$rootScope',
        '$filter',
        '$log'
    ];

    /* @ngInject */
    function DashboardService(
        $http,
        CONST,
        $q,
        $rootScope,
        $filter,
        $log) {

        var service = {
            getGAReportingData: getGAReportingData,
            getGADateRange: getGADateRange
        }

        return service;

        function getGAReportingData(vendorid, type) {
            var d = $q.defer();

            var url = '/ga-reporting-data?vendor=' + vendorid + '&type=' + type;

            $http.get(url).then(function(resp) {
                d.resolve(resp.data);
            }).catch(function(err) {
                $log.log(err);
                d.reject(err);
            });

            return d.promise;
        }

        function getGADateRange() {
            var d = $q.defer();

            var url = '/ga-date-range';

            $http.get(url).then(function(resp) {
                d.resolve(resp.data);
            }).catch(function(err) {
                $log.log(err);
                d.reject(err);
            });

            return d.promise;
        }

    }

})();
