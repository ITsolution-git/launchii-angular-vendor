(function() {
    'use strict';

    angular.module('app.brands', [])
        .factory('BrandService', BrandService);

    BrandService.$inject = ['$http', 'CONST', '$q', '$rootScope', '$log'];

    /* @ngInject */
    function BrandService($http, CONST, $q, $rootScope, $log) {
        var api = CONST.api_domain + '/vendor/brands';

        var service = {
            add: add,
            edit: edit,
            delete: _delete,
            getById: getById,
            search: search,
            getAll: getAll
        }

        return service;

        //////// SERIVCE METHODS ////////

        function search(query, status, ignore_status, page, limit) {
            var d = $q.defer();
            var q = query.toLowerCase().trim();

            var url = api + '?query=' + encodeURI(q) + '&status=' + status + '&ignore_status=' + ignore_status + '&page=' + page + '&limit=' + limit;

            $http.get(url).then(function(resp) {

                var result = resp.data;
                d.resolve(result);

            }).catch(function(err) {
                $log.log(err);
                d.reject(err);
            });

            return d.promise;
        }

        function getAll() {
            return search('', '', 'archived', 1, 500);
        }

        function getById(id) {
            var d = $q.defer();
            var url = api + '/' + id;
            $http({
                    method: 'GET',
                    url: url,
                })
                .then(function(data) {
                    var brand = data.data;
                    brand["facebook"] = brand.facebook_url;
                    brand["twitter"] = brand.twitter_url;
                    brand["instagram"] = brand.instagram_url;
                    d.resolve(brand);
                })
                .catch(function(error) {
                    d.reject(error);
                });

            return d.promise;
        }

        function setLogoImage(img) {
            var filebase64 = 'data:' + img.filetype + ';base64,' + img.base64;

            var data = {
                file: filebase64,
                description: img.description
            };

            return data;
        }

        function setCoverImage(img) {
            var filebase64 = 'data:' + img.filetype + ';base64,' + img.base64;

            var data = {
                file: filebase64,
                description: img.description
            };

            return data;
        }

        function add(data) {
            var url = api;
            var d = $q.defer();

            data.logo_image_attributes = setLogoImage(data.logo);
            data.cover_image_attributes = setCoverImage(data.cover);

            $log.log(data);
            // return false;

            $http.post(url, {brand: data})
                .then(function(resp) {
                    //$log.log(resp);
                    d.resolve(resp);
                }).catch(function(error) {
                    // $log.log(error);
                    service.errors = error;
                    d.reject(error.data.errors);
                });

            return d.promise;
        }

        function edit(id, data) {
            var url = api + "/" + id;
            var d = $q.defer();

            $http.patch(url, data)
                .then(function(resp) {
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
