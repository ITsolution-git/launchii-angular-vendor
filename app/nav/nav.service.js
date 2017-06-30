(function() {
    'use strict';

    angular.module('app')
        .factory('NavService', NavService);

    NavService.$inject = ['$http', 'CONST', '$q'];

    /* @ngInject */
    function NavService($http, CONST, $q) {

        var service = {
        }

        return service;

        ////////////////
    }

})();
