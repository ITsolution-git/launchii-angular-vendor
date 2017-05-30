(function() {
    'use strict';

    angular.module('app.upsells', [])
        .factory('UpsellService', UpsellService);

    UpsellService.$inject = [
        '$http',
        'CONST',
        '$q',
        'HelperService',
        'BrandService',
        'CategoryService',
        '$rootScope',
        '$filter',
        '$log'
    ];

    /* @ngInject */
    function UpsellService(
        $http,
        CONST,
        $q,
        HelperService,
        BrandService,
        CategoryService,
        $rootScope,
        $filter,
        $log) {

        var api = CONST.api_domain + '/vendor/deals';

        var service = {
            delete: _delete,
            search: search,
            getById: getById
        }

        return service;

        //////// SERIVCE METHODS ////////

        function search(query, status, page, limit) {
            var d = $q.defer();
            var q = query.toLowerCase().trim();

            var url = api + '?query=' + encodeURI(q) + '&deal_type=upsell&status=' + status + '&page=' + page + '&limit=' + limit;

            $http.get(url).then(function(resp) {

                var tasks = [];

                var result = resp.data;
                angular.forEach(result.deals, function(deal, index) {

                    result.deals[index]["price"] = parseFloat(deal.price);
                    result.deals[index]["amazon_rating"] = parseFloat(deal.amazon_rating);

                    var dateStart = HelperService.convertToDateTime(deal.starts_at);
                    var dateEnd = HelperService.convertToDateTime(deal.ends_at);
                    result.deals[index]['date_start'] = dateStart;
                    result.deals[index]['date_end'] = dateEnd;

                    result.deals[index]['date_starts'] = dateStart.date;
                    result.deals[index]['time_starts'] = dateStart.time;

                    result.deals[index]['date_ends'] = dateEnd.date;
                    result.deals[index]['time_ends'] = dateEnd.time;

                    if (deal.is_draft) {
                        result.deals[index]['status'] = 'draft';
                    } else if (deal.is_published) {
                        result.deals[index]['status'] = 'published';
                    } else if (deal.is_hidden) {
                        result.deals[index]['status'] = 'hidden';
                    } else if (deal.is_archived) {
                        result.deals[index]['status'] = 'archived';
                    } else if (deal.is_pending) {
                        result.deals[index]['status'] = 'pending';
                    } else if (deal.is_approved) {
                        result.deals[index]['status'] = 'approved';
                    } else if (deal.is_rejected) {
                        result.deals[index]['status'] = 'rejected';
                    } else {
                        result.deals[index]['status'] = 'draft';
                    }

                    result.deals[index]['deal_type'] = 'upsell';

                    tasks.push(function(cb) {

                        BrandService.findInList(deal.brand_id).then(function(brand) {
                            result.deals[index]['brand'] = brand;
                            cb(null, brand);
                        }).catch(function(err) {
                            result.deals[index]['brand'] = null;
                            cb(null, null);
                        });

                    });

                });

                async.parallel(tasks, function(error, results) {
                    if (error) {
                        $log.log(error);
                        d.reject(error);
                    } else {
                        d.resolve(result);
                    }

                });

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
                    ComponentsDateTimePickers.init();
                    var deal = data.data;
                    deal["price"] = parseFloat(deal.price);
                    deal["amazon_rating"] = parseFloat(deal.amazon_rating);

                    var dateStart = HelperService.convertToDateTime(deal.starts_at);
                    var dateEnd = HelperService.convertToDateTime(deal.ends_at);
                    deal['date_start'] = dateStart;
                    deal['date_end'] = dateEnd;

                    deal['date_starts'] = dateStart.date;
                    deal['time_starts'] = dateStart.time;

                    deal['date_ends'] = dateEnd.date;
                    deal['time_ends'] = dateEnd.time;

                    if (deal.is_draft) {
                        deal['status'] = 'draft';
                    } else if (deal.is_published) {
                        deal['status'] = 'published';
                    } else if (deal.is_hidden) {
                        deal['status'] = 'hidden';
                    } else if (deal.is_archived) {
                        deal['status'] = 'archived';
                    } else if (deal.is_pending) {
                        deal['status'] = 'pending';
                    } else if (deal.is_approved) {
                        deal['status'] = 'approved';
                    } else if (deal.is_rejected) {
                        deal['status'] = 'rejected';
                    } else {
                        deal['status'] = 'draft';
                    }

                    deal['deal_type'] = 'upsell';

                    BrandService.findInList(deal.brand_id).then(function(brand) {
                        deal['brand'] = brand;
                    }).catch(function(err) {
                        $log.log(err);
                        deal['brand'] = null;
                    }).then(function() {
                        CategoryService.findInList(deal.category_id).then(function(category) {
                            deal['category'] = category;
                        }).catch(function(err) {
                            $log.log(err);
                            deal['category'] = null;
                        }).then(function() {
                            deal.upsell_associations = [];
                            d.resolve(deal);
                        });
                    });
                })
                .catch(function(error) {
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

    }

})();
