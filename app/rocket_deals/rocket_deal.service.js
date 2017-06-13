(function() {
    'use strict';

    angular.module('app.rocketDeals', [])
        .factory('RocketDealService', RocketDealService);

    RocketDealService.$inject = ['$http', 'CONST', '$q', '$rootScope', '$log'];

    /* @ngInject */
    function RocketDealService($http, CONST, $q, $rootScope, $log) {
        var api = CONST.api_domain + '/vendor/rocket_deals';

        var service = {
            lists: [],
            errors: [],
            add: add,
            edit: edit,
            delete: _delete,
            getAll: getAll,
            find: find,
            findInList: findInList,
            isEmpty: isEmpty,
            search: search,
            searchedList: []
        }

        return service;

        //////// SERIVCE METHODS ////////

        function search(str) {
            var url = api;
            var d = $q.defer();
            var q = str.toLowerCase();
            var results = [];

            if (str.trim() == '') {
                d.resolve(service.lists.rocket_deals);
            } else {
                    $http.get(url, { params: {query: str }}).then(function(resp) {
                        service.searchedList = resp.data;
                        d.resolve(resp.data.rocket_deals);
                    }).catch(function(err) {
                        $log.log(err);
                        d.reject(err);
                    });
                // }
            }

            return d.promise;
        }

        function isEmpty() {
            if (!angular.isDefined(service.lists.rocket_deals)) {
                return true;
            }

            return service.lists.total == 0;
        }

        function findInList(id) {
            var d = $q.defer();
            if (angular.isDefined(id)) {
                if (!isEmpty()) {
                    var found = false;
                    angular.forEach(service.lists.rocket_deals, function(value, key) {
                        if (id == service.lists.rocket_deals[key].uid) {
                            found = true;
                            d.resolve(service.lists.rocket_deals[key]);
                        }
                    });
                    if (found == false) {
                        find(id).then(function(rocketDeal) {
                            d.resolve(rocketDeal);
                        }).catch(function(err) {
                            d.reject(err);
                        });
                    }
                } else {
                    find(id).then(function(rocketDeal) {
                        d.resolve(rocketDeal);
                    }).catch(function(err) {
                        d.reject(err);
                    });
                }
            } else {
                d.reject({data: {errors: ['Rocket Deal does not exist.']}});
            }

            return d.promise;
        }

        function getAll() {
            var d = $q.defer();

            var req = {
                method: 'GET',
                url: api,
                params: {
                    status: 'active'
                }
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

        function find(id) {
            var d = $q.defer();
            var url = api + '/' + id;
            $http({
                    method: 'GET',
                    url: url,
                    //params: {id: id}
                })
                .then(function(data) {
                    var rocketDeal = data.data;
                    d.resolve(rocketDeal);
                })
                .catch(function(error) {
                    service.errors = error;
                    d.reject(error);
                });

            return d.promise;
        }

        function add(data) {
            var url = api;
            var d = $q.defer();

            var rocketDeal = {
              rocket_deal: data
            };

            $http.post(url, rocketDeal)
                .then(function(resp) {
                    // $log.log(resp);
                    d.resolve(resp);
                }).catch(function(error) {
                    $log.log(error);
                    service.errors = error;
                    d.reject(error);
                });

            return d.promise;
        }

        function edit(id, data) {
            var url = api + "/" + id;
            var d = $q.defer();

            var rocketDeal = {
              rocket_deal: data
            };

            $http.patch(url, rocketDeal)
                .then(function(resp) {
                    // $log.log(resp);
                    d.resolve(resp);
                }).catch(function(error) {
                    $log.log(error);
                    service.errors = error;
                    d.reject(error);
                });

            return d.promise;
        }

        function _delete(id) {
            var url = api + "/" + id;
            var d = $q.defer();

            $http.delete(url, {})
                .then(function(resp) {
                    // $log.log(resp);
                    d.resolve(resp);
                }).catch(function(error) {
                    $log.log(error);
                    service.errors = error;
                    d.reject(error);
                });

            return d.promise;
        }
    }

})();
