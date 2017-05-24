(function() {
    'use strict';

    angular.module('app.categories', [])
        .factory('CategoryService', CategoryService);

    CategoryService.$inject = ['$http', 'CONST', '$q', '$rootScope', '$log'];

    /* @ngInject */
    function CategoryService($http, CONST, $q, $rootScope, $log) {
        var api = CONST.api_domain + '/vendor/categories';

        var service = {
            lists: [],
            errors: [],
            getAll: getAll,
            findInList: findInList,
            isEmpty: isEmpty,
        }

        return service;

        //////// SERIVCE METHODS ////////

        function isEmpty() {
            if (!angular.isDefined(service.lists.categories)) {
                return true;
            }

            return service.lists.total == 0;
        }

        function findInList(id) {
            var d = $q.defer();
            if (angular.isDefined(id)) {
                var found = false;
                if (!isEmpty()) {
                    angular.forEach(service.lists.categories, function(value, key) {
                        if (id == service.lists.categories[key].uid) {
                            found = true;
                            d.resolve(service.lists.categories[key]);
                        }
                    });
                }
                if (found == false) {
                    getAll().then(function(resp) {
                        angular.forEach(service.lists.categories, function(value, key) {
                            if (id == service.lists.categories[key].uid) {
                                found = true;
                                d.resolve(service.lists.categories[key]);
                            }
                        });
                        if (found == false) {
                            d.reject({data: {errors: ['Category does not exist.']}});
                        }
                    }).catch(function(err) {
                        d.reject(err);
                    });
                }
            } else {
                d.reject({data: {errors: ['Category does not exist.']}});
            }

            return d.promise;
        }

        function getAll() {
            var d = $q.defer();

            var req = {
                method: 'GET',
                url: api
            };

            $http(req)
                .then(function(data) {
                    service.lists = data.data;
                    d.resolve(data.data);
                })
                .catch(function(error) {
                    $log.log(error);
                    service.errors = error;
                    d.reject(error);
                });

            return d.promise;
        }
    }

})();
