(function() {
    'use strict';

    angular.module('app.rocketDeals', [])
        .factory('RocketDealService', RocketDealService);

    RocketDealService.$inject = ['$http', 'CONST', '$q', '$rootScope', '$log'];

    /* @ngInject */
    function RocketDealService($http, CONST, $q, $rootScope, $log) {
        var api = CONST.api_domain + '/vendor/rocket_deals';

        var service = {
            add: add,
            edit: edit,
            delete: _delete,
            getById: getById,
            search: search,
            requestApproval: requestApproval,
            publish: publish
        }

        return service;

        //////// SERIVCE METHODS ////////

        function search(query, status, page, limit) {
            var d = $q.defer();
            var q = query.toLowerCase().trim();

            var url = api + '?query=' + encodeURI(q) + '&status=' + status + '&page=' + page + '&limit=' + limit;

            $http.get(url).then(function(resp) {

                var result = resp.data;
                var rocket_deals = [];

                angular.forEach(result.rocket_deals, function(rocketDeal, index) {
                    if (rocketDeal.is_finished == false) {
                        rocket_deals.push(result.rocket_deals[index]);
                    }
                });

                result.rocket_deals = rocket_deals;
                d.resolve(result);

            }).catch(function(err) {
                $log.log(err);
                d.reject(err);
            });

            return d.promise;
        }

        function getById(id) {
            var d = $q.defer();
            var url = api + '/' + id;
            $http({
                    method: 'GET',
                    url: url,
                })
                .then(function(data) {
                    var rocketDeal = data.data;
                    d.resolve(rocketDeal);
                })
                .catch(function(error) {
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
                    d.resolve(resp);
                }).catch(function(error) {
                    $log.log(error);
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
                    d.resolve(resp);
                }).catch(function(error) {
                    $log.log(error);
                    d.reject(error);
                });

            return d.promise;
        }

        function _delete(id) {
            var url = api + "/" + id;
            var d = $q.defer();

            $http.delete(url, {})
                .then(function(resp) {
                    d.resolve(resp);
                }).catch(function(error) {
                    $log.log(error);
                    d.reject(error);
                });

            return d.promise;
        }

        function requestApproval(id) {
            var url = api + "/" + id + "/" + "request_approval";
            var d = $q.defer();

            $http.patch(url, {})
                .then(function(resp) {
                    d.resolve(resp);
                }).catch(function(error) {
                    $log.log(error);
                    d.reject(error);
                });

            return d.promise;
        }

        function publish(id) {
            var url = api + "/" + id + "/" + "publish";
            var d = $q.defer();

            $http.patch(url, {})
                .then(function(resp) {
                    d.resolve(resp);
                }).catch(function(error) {
                    $log.log(error);
                    d.reject(error);
                });

            return d.promise;
        }
    }

})();
