(function() {
    'use strict';

    angular.module('app.users', [])
        .factory('UserService', UserService);

    UserService.$inject = ['$http', 'CONST', '$q', '$rootScope', '$log'];

    /* @ngInject */
    function UserService($http, CONST, $q, $rootScope, $log) {
        var api = CONST.api_domain + '/admin/users';

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
            editMe: editMe,
            search: search,
            searchedList: []
        }

        return service;

        //////// SERIVCE METHODS ////////

        function search(str) {
            var url = api + '/search';
            var d = $q.defer();
            var q = str.toLowerCase();
            var results = [];

            if (str.trim() == '') {
                d.resolve(service.lists.users);
            } else {
                angular.forEach(service.lists.users, function(user, index) {
                    if (user.name.toLowerCase().indexOf(q) > -1) {
                        results.push(user);
                    }
                });

                if (results.length > 0) {
                    d.resolve(results);
                } else {
                    $http.get(url, { query: str }).then(function(resp) {
                        service.searchedList = resp.data;
                        d.resolve(resp.data.users);
                    }).catch(function(err) {
                        $log.log(err);
                        d.reject(err);
                    });
                }
            }

            return d.promise;
        }

        function isEmpty() {
            if (!angular.isDefined(service.lists.users)) {
                return true;
            }

            return service.lists.total == 0;
        }

        function findInList(id) {
            var d = $q.defer();

            if (angular.isDefined(id)) {
                if (!isEmpty()) {
                    angular.forEach(service.lists.users, function(user, key) {

                        if (id == user.uid) {

                            if (user.is_admin) {
                                user['role'] = 'admin';
                            } else if (user.is_vendor) {
                                user['role'] = 'vendor';
                            } else if (user.is_customer) {
                                user['role'] = 'customer';
                            } else {
                                user['role'] = '';
                            }

                            user['status'] = (user.is_active) ? 'active' : 'inactive';

                            d.resolve(user);
                        }
                    });
                } else {
                    find(id).then(function(user) {
                        d.resolve(user);
                    }).catch(function(err) {
                        d.reject(err);
                    });
                }
            } else {
                d.reject('User does not exist.');
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
                    var list = data.data;

                    service.lists = list;
                    d.resolve(list);
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
                    d.resolve(data.data);
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

            // var data = {
            //     user: data
            // }

            $http.post(url, data)
                .then(function(resp) {
                    d.resolve(resp);
                }).catch(function(error) {
                    $log.log(error);
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

        function editMe(id, data){
            var url = CONST.api_domain + '/users/me';
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
    }

})();