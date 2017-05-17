(function() {
    'use strict';

    angular.module('app.deals', [
            'app.deals.highlightadd',
            'app.deals.highlightedit',
            'app.deals.highlightfield',
            'app.deals.templateadd',
            'app.deals.templateedit',
            'app.deals.templatefield',
            'app.deals.templatemodal',
            'app.deals.templatemodaledit',
            'app.deals.image'
        ])
        .factory('DealService', DealService);

    DealService.$inject = ['$http', 'CONST', '$q', 'HelperService', 'BrandService', '$rootScope', '$filter', '$log'];

    /* @ngInject */
    function DealService($http, CONST, $q, HelperService, BrandService, $rootScope, $filter, $log) {
        var api = CONST.api_domain + '/vendor/deals';

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
            addHighlights: addHighlights,
            addTemplates: addTemplates,
            search: search,
            searchedList: [],
            highlights: [],
            templates: [],
            getHighlights: getHighlights,
            getTemplates: getTemplates,
            removeHighlights: removeHighlights,
            updateHighlights: updateHighlights,
            //removeTemplates: removeTemplates,
            //updateTemplates: updateTemplates,
            templateNames: [],
            templateTypes: [],
            getTemplateNames: getTemplateNames,
            getTemplateTypes: getTemplateTypes,
            getStandardDiscounts: getStandardDiscounts,
            getEarlyBirdDiscounts: getEarlyBirdDiscounts,
            dealImagesList: [],
            getDealImages: getDealImages,
            setActive: setActive
        }

        return service;

        //////// SERIVCE METHODS ////////

        function getDealImages(dealId) {
            var d = $q.defer();

            // if (service.dealImagesList.length > 0) {
            //     d.resolve(service.dealImagesList);
            // } else {
            //     var url = api + '/' + dealId + '/images';
            //     $http.get(url).then(function(resp) {
            //         service.dealImagesList = resp.data.images;
            //         d.resolve(resp.data.images);
            //     }).catch(function(err) {
            //         $log.log(err);
            //         d.reject(err);
            //     });
            // }

            var url = api + '/' + dealId + '/images';
            $http.get(url).then(function(resp) {
                service.dealImagesList = resp.data.images;
                d.resolve(resp.data.images);
            }).catch(function(err) {
                $log.log(err);
                d.reject(err);
            });

            return d.promise;
        }

        function getEarlyBirdDiscounts(dealId) {
            var d = $q.defer();
            var url = api + '/' + dealId + '/discounts/early_bird';

            $http.get(url).then(function(resp) {
                var discounts = resp.data.discounts;
                angular.forEach(discounts, function(discount, index) {
                    if (discount.is_active) {
                        discounts[index]['status'] = 'active';
                    } else if (discount.is_suspended) {
                        discounts[index]['status'] = 'suspended';
                    }

                    if (discount.is_percentage) {
                        discounts[index]['value_type'] = 'percentage';
                    } else if (discount.is_unit) {
                        discounts[index]['value_type'] = 'unit';
                    }
                });
                d.resolve(discounts);
            }).catch(function(err) {
                $log.log(err);
                d.reject(err);
            });

            return d.promise;
        }

        function getStandardDiscounts(dealId) {
            var d = $q.defer();
            var url = api + '/' + dealId + '/discounts/standard';

            $http.get(url).then(function(resp) {
                //$log.log(resp);
                var discounts = resp.data.discounts;
                angular.forEach(discounts, function(discount, index) {
                    if (discount.is_active) {
                        discounts[index]['status'] = 'active';
                    } else if (discount.is_suspended) {
                        discounts[index]['status'] = 'suspended';
                    }

                    if (discount.is_percentage) {
                        discounts[index]['value_type'] = 'percentage';
                    } else if (discount.is_unit) {
                        discounts[index]['value_type'] = 'unit';
                    }
                });
                d.resolve(discounts);
            }).catch(function(err) {
                $log.log(err);
                d.reject(err);
            });

            return d.promise;
        }

        function getTemplateTypes() {
            var d = $q.defer();

            if (service.templateTypes.length > 0) {
                d.resolve(service.templateTypes);
            } else {
                var url = CONST.api_domain + '/templates/types';
                $http.get(url).then(function(resp) {
                    service.templateTypes = resp.data.template_types;
                    d.resolve(resp.data.template_types);
                }).catch(function(err) {
                    $log.log(err);
                    d.reject(err);
                });
            }

            return d.promise;
        }

        function getTemplateNames() {
            var d = $q.defer();

            if (service.templateNames.length > 0) {
                d.resolve(service.templateNames);
            } else {
                var url = CONST.api_domain + '/templates/names';
                $http.get(url).then(function(resp) {
                    service.templateNames = resp.data.template_names;
                    d.resolve(resp.data.template_names);
                }).catch(function(err) {
                    $log.log(err);
                    d.reject(err);
                });
            }

            return d.promise;
        }

        function removeHighlights(dealId, highlights) {
            var url = api + '/' + dealId + '/highlights';
            var d = $q.defer();
            var tasks = [];

            angular.forEach(highlights, function(val, index) {
                tasks.push(function(cb) {
                    $http.delete(url + '/' + val.uid).then(function(resp) {
                        //d.resolve(resp);
                        cb(null, resp);
                    }).catch(function(err) {
                        $log.log(error);
                        // service.errors = error;
                        // d.reject(error);
                        cb(err);
                    });
                });
            });

            async.parallel(tasks, function(error, results) {
                if (error) {
                    $log.log(error);
                    d.reject(error);
                } else {
                    d.resolve(results);
                }

            });

            return d.promise;
        }

        function updateHighlights(dealId, highlights) {
            var url = api + '/' + dealId + '/highlights';
            var d = $q.defer();
            var tasks = [];

            angular.forEach(highlights, function(val, index) {
                tasks.push(function(cb) {
                    var data = {
                        title: val.title
                    };

                    $http.patch(url + '/' + val.uid, data).then(function(resp) {
                        //d.resolve(resp);
                        cb(null, resp);
                    }).catch(function(err) {
                        $log.log(error);
                        // service.errors = error;
                        // d.reject(error);
                        cb(err);
                    });
                });
            });

            async.parallel(tasks, function(error, results) {
                if (error) {
                    $log.log(error);
                    d.reject(error);
                } else {
                    d.resolve(results);
                }

            });

            return d.promise;
        }

        function getTemplates(dealId) {
            var url = api + '/' + dealId + '/templates';
            var d = $q.defer();

            $http.get(url).then(function(resp) {
                service.templates = resp.data.templates;

                angular.forEach(service.templates, function(template, index) {
                    if (template.is_archived) {
                        service.templates[index]['status'] = 'archived';
                    } else if (template.is_draft) {
                        service.templates[index]['status'] = 'draft';
                    } else if (template.is_published) {
                        service.templates[index]['status'] = 'published';
                    } else {
                        service.templates[index]['status'] = 'draft';
                    }
                });



                d.resolve(service.templates);
            }).catch(function(err) {
                $log.log(err);
                service.errors.push(err);
                d.reject(err);
            });

            return d.promise;
        }

        function getHighlights(dealId) {
            var url = api + '/' + dealId + '/highlights';
            var d = $q.defer();

            $http.get(url).then(function(resp) {
                service.highlights = resp.data.highlights;
                d.resolve(service.highlights);
            }).catch(function(err) {
                $log.log(err);
                service.errors.push(err);
                d.reject(err);
            });

            return d.promise;
        }

        function search(str) {
            var url = api + '/search';
            var d = $q.defer();
            var q = str.toLowerCase();
            var results = [];

            if (str.trim() == '') {
                d.resolve(service.lists.deals);
            } else {
                angular.forEach(service.lists.deals, function(brand, index) {
                    if (brand.name.toLowerCase().indexOf(q) > -1) {
                        results.push(brand);
                    }
                });

                if (results.length > 0) {
                    d.resolve(results);
                } else {
                    $http.get(url, { query: str }).then(function(resp) {
                        service.searchedList = resp.data;
                        d.resolve(resp.data.deals);
                    }).catch(function(err) {
                        $log.log(err);
                        d.reject(err);
                    });
                }
            }

            return d.promise;
        }

        function addHighlights(dealId, highlights) {
            var d = $q.defer();

            var url = api + '/' + dealId + '/highlights/collection';

            var highlightsArr = [];
            angular.forEach(highlights, function(val, key) {
                var obj = {
                    title: val
                };

                highlightsArr.push(obj);

                // function handleCb(cb) {
                //     $http.post(url, highlights).then(function(resp) {
                //         //d.resolve(resp);
                //         cb(null, resp);
                //     }).catch(function(err) {
                //         // $log.log(error);
                //         // service.errors = error;
                //         // d.reject(error);
                //         cb(err);
                //     });
                // }

            });
            var data = {
                highlight: {
                    highlights: highlightsArr
                }
            };

            $http.post(url, data)
                .then(function(resp) {
                    // var dealId = resp.uid;
                    // addHighlights(dealId, data.highlights).then(function(resp) {
                    //     d.resolve(resp);
                    // }).catch(function(err) {
                    //     d.reject(err);
                    // });
                    // d.resolve(resp);
                    d.resolve('');
                }).catch(function(error) {
                    $log.log(error);
                    service.errors = error;
                    //d.reject(error);
                    d.resolve('Failed to add highlight. ')
                });

            // async.parallel(tasks, function(error, results) {
            //     if (error) {
            //         d.reject(error);
            //     } else {
            //         d.resolve(results);
            //     }

            // });

            return d.promise;
        }

        function isEmpty() {
            if (!angular.isDefined(service.lists.deals)) {
                return true;
            }

            return service.lists.total == 0;
        }

        function findInList(id) {
            var d = $q.defer();

            if (angular.isDefined(id)) {
                if (!isEmpty()) {
                    var deal = null;

                    angular.forEach(service.lists.deals, function(value, key) {
                        if (id == service.lists.deals[key].uid) {
                            deal = service.lists.deals[key];
                        }
                    });

                    deal["price"] = parseFloat(deal.price);
                    deal["amazon_rating"] = parseFloat(deal.amazon_rating);

                    var dateStart = HelperService.convertToDateTime(deal.starts_at);
                    var dateEnd = HelperService.convertToDateTime(deal.ends_at);
                    deal['date_start'] = dateStart;
                    deal['date_end'] = dateEnd;

                    BrandService.findInList(deal.brand_id).then(function(brand) {
                        deal['brand'] = brand;
                        d.resolve(deal);
                    });

                    d.resolve(deal);
                } else {
                    find(id).then(function(deal) {
                        d.resolve(deal);
                    }).catch(function(err) {
                        d.reject(err);
                    });
                }
            } else {
                d.resolve('Deal does not exist.');
            }

            return d.promise;
        }

        function getAll() {
            var d = $q.defer();

            $http.get(api)
                .then(function(data) {
                    service.lists = data.data;
                    d.resolve(data.data);
                })
                .catch(function(error) {
                    $log.log(error.data);
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
                    ComponentsDateTimePickers.init();
                    var deal = data.data;
                    deal["price"] = parseFloat(deal.price);
                    deal["amazon_rating"] = parseFloat(deal.amazon_rating);

                    var dateStart = HelperService.convertToDateTime(deal.starts_at);
                    var dateEnd = HelperService.convertToDateTime(deal.ends_at);
                    deal['date_start'] = dateStart;
                    deal['date_end'] = dateEnd;
                    //$log.log(dateStart);
                    //$log.log(dateStart.date);
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
                    } else if (deal.is_deleted) {
                        deal['status'] = 'deleted';
                    } else if (deal.is_pending) {
                        deal['status'] = 'pending';
                    } else {
                        deal['status'] = 'draft';
                    }

                    //DISABLED
                    BrandService.findInList(deal.brand_id).then(function(brand) {
                        deal['brand'] = brand;
                        d.resolve(deal);
                    });
                    //d.resolve(deal);
                })
                .catch(function(error) {
                    $log.log(error);
                    service.errors = error;
                    d.reject(error);
                });

            return d.promise;
        }

        function addTemplates(deal_id, templates) {
            var d = $q.defer();

            var url = api + '/' + deal_id + '/templates';

            var tasks = [];

            angular.forEach(templates, function(template, index) {
                if (angular.isDefined(template.name) && template.name.trim() != '') {
                    tasks.push(function(cb) {
                        template['templatable_id'] = deal_id;

                        $http.post(url, template).then(function(resp) {
                            //d.resolve(resp);
                            // cb(null, resp);
                            cb(null, '');
                        }).catch(function(err) {
                            $log.log(err);
                            // service.errors = error;
                            // d.reject(error);
                            //cb(err);
                            cb(null, 'Failed to add template. ');
                        });

                    });
                }

            });

            async.parallel(tasks, function(error, results) {
                if (error) {
                    $log.log(error);
                    service.errors = error;
                    d.reject('template');
                } else {
                    d.resolve(results);
                }

            });

            return d.promise;
        }

        function addDiscounts(deal_id, discounts) {
            var d = $q.defer();

            var url = api + '/' + deal_id + '/discounts';

            var tasks = [];
            // $log.log(discounts);
            angular.forEach(discounts, function(discount, index) {
                if (angular.isDefined(discount.value) && discount.value.trim() != '') {
                    tasks.push(function(cb) {
                        $log.log(discount);
                        $http.post(url, discount)
                            .then(function(resp) {
                                cb(null, resp);
                            }).catch(function(err) {
                                $log.log(err);
                                var errors = HelperService.setErrorStr(err);
                                cb(null, err.data.errors);
                            });

                    });
                }

            });

            // for (var attr in discounts) {
            //     var discount = discounts[attr];
            //     $log.log(discount);
            //     if (discount != null) {
            //         tasks.push(function(cb) {
            //             $log.log(discount);
            //             $http.post(url, discount)
            //                 .then(function(resp) {
            //                     cb(null, resp);
            //                 }).catch(function(err) {
            //                     $log.log(err);
            //                     var errors = HelperService.setErrorStr(err);
            //                     cb(null, 'Failed to add discount. Reason: ' + errors + '. ');
            //                 });

            //         });
            //     }
            // }
            // var _obj = ["waaaa", "weee"];
            // angular.forEach(_obj, function(discount, index) {
            //     $log.log(discount);
            // });
            // angular.forEach(discounts, function(discount, index) {
            //     $log.log(discount);
            // });
            //$log.log(tasks);
            async.parallel(tasks, function(error, results) {
                if (error) {
                    $log.log(error);
                    service.errors = error;
                    d.reject('discount');
                } else {
                    $log.log(results);
                    d.resolve(results);
                }

            });

            return d.promise;
        }

        function addFileImage(dealId, file) {
            var d = $q.defer();
            var url = api + '/' + dealId + '/images';

            var filebase64 = 'data:' + file.file.filetype + ';base64,' + file.file.base64;

            var data = {

                image: {
                    file: filebase64,
                    description: file.description
                }

            };
            //$log.log(data);
            $http.post(url, data).then(function(resp) {
                d.resolve(resp);
            }).catch(function(err) {
                d.reject(err);
            });

            return d.promise;
        }

        function add(data) {
            var url = api;
            var d = $q.defer();

            $http.post(url, data)
                .then(function(resp) {
                    //$log.log(resp);
                    //return false;
                    var dealId = resp.data.deal.uid;

                    var tasks = [];

                    if (data.file.length > 0) {
                        angular.forEach(data.file, function(img, index) {

                            if (angular.isObject(img.file)) {
                                tasks.push(function(cb) {
                                    addFileImage(dealId, img).then(function(resp) {
                                        cb(null, resp);
                                    }).catch(function(err) {
                                        $log.log(err);
                                        cb(err);
                                    });
                                });
                            }

                        });

                    }

                    if (data.highlights.length > 0) {
                        //$log.log(data.highlights);
                        tasks.push(function(cb) {
                            addHighlights(dealId, data.highlights).then(function(resp) {
                                cb(null, resp);
                            }).catch(function(err) {
                                $log.log(err);
                                cb(err);
                            });
                        });
                    }

                    if (angular.isDefined(data.templates[0]) && angular.isDefined(data.templates[0].name) && data.templates[0].name.trim() != '' && data.templates[0].name.trim() != 'null') {
                        tasks.push(function(cb) {
                            addTemplates(dealId, data.templates).then(function(resp) {
                                cb(null, resp);
                            }).catch(function(err) {
                                $log.log(err);
                                cb(err);
                            });
                        });
                    }
                    $log.log(angular.isDefined(data.discounts['d0']));
                    //if (angular.isDefined(data.discounts[0]) && angular.isDefined(data.discounts[0].value) && data.discounts[0].value.trim() != '' && data.discounts[0].value.trim() != 'null') {
                    if (HelperService.countModelLength(data.discounts) > 0) {
                        tasks.push(function(cb) {
                            addDiscounts(dealId, data.discounts).then(function(resp) {
                                cb(null, resp);
                            }).catch(function(err) {
                                $log.log(err);
                                cb(err);
                            });
                        });
                    }

                    if (tasks.length > 0) {
                        async.parallel(tasks, function(error, results) {
                            if (error) {
                                $log.log(error);
                                service.errors = error;
                                d.reject(error);
                            } else {
                                d.resolve(results);
                            }

                        });
                    } else {
                        d.resolve(resp);
                    }


                }).catch(function(error) {
                    $log.log(error);
                    service.errors = error;
                    d.reject(error);
                });

            return d.promise;
        }

        function setOnePublish(templates) {
            var hasPublish = false;
            angular.forEach(templates, function(template, index) {
                if (template.status == 'published' && !hasPublish) {
                    hasPublish = true;
                } else if (template.status == 'published' && hasPublish) {
                    templates[index].status = 'draft';
                }
            });

            return templates;
        }

        function edit(id, data) {
            var url = api + "/" + id;
            var d = $q.defer();

            var tasks = [];
            var tasksSeries = [];

            //IMAGE ADD
            if (angular.isDefined(data.form.file)) {

                angular.forEach(data.form.file, function(img, index) {
                    if (angular.isObject(img.file) && angular.isDefined(img.file.filetype)) {

                        tasks.push(function(cb) {
                            addFileImage(id, img)
                                .then(function(resp) {
                                    cb(null, resp);
                                }).catch(function(err) {
                                    $log.log(err);
                                    cb(err);
                                });
                        });
                    }

                });
            }

            //IMAGE DELETE
            if (angular.isDefined(data.removedImages)) {
                angular.forEach(data.removedImages, function(image, index) {
                    tasks.push(function(cb) {
                        $http.delete(api + '/' + id + '/images/' + image.uid)
                            .then(function(resp) {
                                cb(null, resp);
                            }).catch(function(err) {
                                cb(err);
                            });
                    });
                });

            }

            //IMAGE EDIT
            if (angular.isDefined(data.images)) {

                angular.forEach(data.images, function(img, index) {
                    if (angular.isObject(img.file) && angular.isDefined(img.file.filetype)) {
                        var filebase64 = 'data:' + img.file.filetype + ';base64,' + img.file.base64;

                        var data = {

                            image: {
                                file: filebase64,
                                description: img.description
                            }

                        }

                        tasks.push(function(cb) {
                            $http.patch(api + '/' + id + '/images/' + img.uid, data)
                                .then(function(resp) {
                                    cb(null, resp);
                                }).catch(function(err) {
                                    $log.log(err);
                                    cb(err);
                                });
                        });
                    }

                });
            }

            //TEMPLATE ADD
            if (angular.isDefined(data.form.templates) && data.form.templates.length > 0) {
                //var url_ah = api + '/' + id + '/templates';

                angular.forEach(data.form.templates, function(template, index) {
                    //$log.log(angular.isDefined(template.name));
                    //$log.log(template.name);
                    if (angular.isDefined(template.name) && template.name.trim() != '') {
                        tasks.push(function(cb) {
                            template['templatable_id'] = id;
                            $http.post(api + '/' + id + '/templates', template)
                                .then(function(resp) {
                                    cb(null, resp);
                                }).catch(function(err) {
                                    $log.log(err);
                                    cb(err);
                                });
                        });
                    }

                });
            }

            //HIGHLIGHT UPDATE
            if (angular.isDefined(data.highlights) && data.highlights.length > 0) {
                angular.forEach(data.highlights, function(val, index) {
                    //var url_h = url + '/highlights/' + val.uid;
                    var data_h = {
                        highlight: {
                            title: val.title
                        }
                    };

                    tasks.push(function(cb) {
                        $http.patch(url + '/highlights/' + val.uid, data_h).then(function(resp) {
                            cb(null, resp);
                        }).catch(function(err) {
                            $log.log(err);
                            cb(err);
                        });
                    });
                });
            }
            //HIGHLIGHT DELETE
            if (angular.isDefined(data.removedHighlights) && data.removedHighlights.length > 0) {
                angular.forEach(data.removedHighlights, function(val, index) {
                    //var url_h = url + '/highlights/' + val.uid;

                    tasks.push(function(cb) {
                        $http.delete(url + '/highlights/' + val.uid).then(function(resp) {
                            cb(null, resp);
                        }).catch(function(err) {
                            $log.log(err);
                            cb(err);
                        });
                    });
                });
            }
            //TEMPLATE UPDATE
            if (angular.isDefined(data.templates) && data.templates.length > 0) {
                angular.forEach(data.templates, function(template, index) {
                    //var url_h = url + '/templates/' + template.uid;

                    tasks.push(function(cb) {
                        template['templatable_id'] = id;
                        $http.patch(url + '/templates/' + template.uid, template).then(function(resp) {
                            cb(null, resp);
                        }).catch(function(err) {
                            $log.log(err);
                            cb(err);
                        });
                    });
                });
            }
            //TEMPLATE DELETE
            if (angular.isDefined(data.removedTemplates) && data.removedTemplates.length > 0) {
                angular.forEach(data.removedTemplates, function(val, index) {
                    //var url_h = url + '/templates/' + val.uid;

                    tasks.push(function(cb) {
                        $http.delete(url + '/templates/' + val.uid).then(function(resp) {
                            cb(null, resp);
                        }).catch(function(err) {
                            $log.log(err);
                            cb(err);
                        });
                    });
                });
            }
            //HIHGLIGHT
            if (angular.isDefined(data.form.highlights) && data.form.highlights.length > 0) {
                var highlightsArr = [];
                angular.forEach(data.form.highlights, function(val, index) {
                    var obj = {
                        title: val
                    };

                    highlightsArr.push(obj);
                });

                var data_h = {
                    highlight: {
                        highlights: highlightsArr
                    }
                };

                //var url_ah = api + '/' + id + '/highlights/collection';
                $log.log(data_h);
                tasks.push(function(cb) {
                    $http.post(api + '/' + id + '/highlights/collection', data_h)
                        .then(function(resp) {
                            cb(null, resp);
                        }).catch(function(err) {
                            $log.log(err);
                            cb(err);
                        });
                });

            }

            tasks.push(function(cb) {
                $http.patch(url, data.form)
                    .then(function(resp) {
                        cb(null, resp);
                    }).catch(function(err) {
                        $log.log(err);
                        cb(err);
                    });
            });

            tasksSeries.push(function(cb) {
                async.parallel(tasks, function(err, results) {
                    if (err) {
                        // $log.log(err);
                        // service.errors = err;
                        // d.reject(err);
                        cb(err);
                    } else {
                        //d.resolve(results);
                        cb(null, results);
                    }

                });
            });
            // async.parallel(tasks, function(err, results) {
            //     if (err) {
            //         $log.log(err);
            //         service.errors = err;
            //         d.reject(err);
            //     } else {
            //         d.resolve(results);
            //     }

            // });

            //DISCOUNT DELETE
            if (angular.isDefined(data.removedDiscounts) && data.removedDiscounts.length > 0) {
                angular.forEach(data.removedDiscounts, function(val, index) {
                    //var url_h = url + '/discounts/' + val.uid;

                    tasksSeries.push(function(cb) {
                        $http.delete(url + '/discounts/' + val.uid).then(function(resp) {
                            cb(null, resp);
                        }).catch(function(err) {
                            $log.log(err);
                            cb(err.data.errors);
                        });
                    });
                });
            }

            //DISCOUNT UPDATE
            if (angular.isDefined(data.discounts) && data.discounts.length > 0) {
                angular.forEach(data.discounts, function(discount, index) {
                    //var url_h = url + '/discounts/' + discount.uid;

                    tasksSeries.push(function(cb) {
                        $log.log(discount);
                        $http.patch(url + '/discounts/' + discount.uid, discount).then(function(resp) {
                            cb(null, resp);
                        }).catch(function(err) {
                            $log.log(err);
                            cb(err.data.errors);
                        });
                    });
                });
            }
            //$log.log(data.form);
            //DISCOUNT ADD
            if (angular.isDefined(data.form.discounts) && HelperService.countModelLength(data.form.discounts) > 0) {
                //var url_ah = url + '/discounts';

                angular.forEach(data.form.discounts, function(discount, index) {
                    if (angular.isDefined(discount.value) && discount.value.trim() != '' && discount.value.trim() !== 'null') {
                        //discount.codes_expire_at = HelperService.combineDateTime(discount.codes_expire_at, '00:00:00');
                        //$log.log(discount);
                        tasksSeries.push(function(cb) {

                            $http.post(url + '/discounts', discount)
                                .then(function(resp) {
                                    cb(null, resp);
                                }).catch(function(err) {
                                    $log.log(err);
                                    cb(err.data.errors);
                                });
                        });
                    }

                });
            }

            //DISCOUNT only
            async.series(tasksSeries, function(err, results) {
                if (err) {
                    $log.log(err);
                    service.errors = err;
                    d.reject(err);
                } else {
                    d.resolve(results);
                }
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

        function setActive(selFieldModel, newDiscounts, discountsData, type, mode) {
            var existingCount = HelperService.countModelLength($filter('getActiveStandard')(discountsData));
            var newCount = HelperService.countModelLength($filter('getActiveStandard')(newDiscounts));

            if (type == 'standard' && mode == 'Edit') {
                if (selFieldModel.status == 'active') { //Set to suspended
                    bootbox.alert('There must be one active standard discount.');
                } else { //set to active

                    bootbox.confirm({
                        title: "Confirm Active Standard",
                        message: "You have set this standard discount as \"Active\". You have an active standard discount running at the moment.<br ><br >Press \"Yes\" to proceed and the current active standard discount will be suspended.<br ><br >Press \"No\" and the new standard discount will be set to \"Suspended\".",
                        buttons: {
                            confirm: {
                                label: 'Yes',
                                className: 'btn-success'
                            },
                            cancel: {
                                label: 'No',
                                className: 'btn-danger'
                            }
                        },
                        callback: function(result) {
                            if (result) {
                                //$log.log('test');
                                reverseStatus(type, discountsData, newDiscounts);
                                $rootScope.$digest();
                            }
                        }
                    });

                }
            } else {
                if (type == 'standard' && mode == 'Add') {
                    // if (existingCount + newCount == 1) {
                    //     angular.forEach($filter('whereAttr')(newDiscounts, 'discount_type', type), function(discount, index) {
                    //         if (discount == selFieldModel) {
                    //             discount.status = 'active';
                    //         }
                    //     });
                    // }
                    // else {
                    reverseStatus(type, discountsData, newDiscounts);
                    // }

                } else {
                    //Existing discounts
                    angular.forEach($filter('whereAttr')(discountsData, 'discount_type', type), function(discount, index) {
                        if (discount == selFieldModel) {
                            discount.status = $filter('reverseStatus')(discount);
                        }
                    });
                    //New discounts
                    angular.forEach($filter('whereAttr')(newDiscounts, 'discount_type', type), function(discount, index) {
                        if (discount == selFieldModel) {
                            discount.status = $filter('reverseStatus')(discount);
                        }
                    });
                }

            }
        }

        function reverseStatus(type, discountsData, newDiscounts) {
            //Existing discounts
            angular.forEach($filter('whereAttr')(discountsData, 'discount_type', type), function(discount, index) {
                discount.status = $filter('reverseStatus')(discount);
            });
            //New discounts
            angular.forEach($filter('whereAttr')(newDiscounts, 'discount_type', type), function(discount, index) {
                discount.status = $filter('reverseStatus')(discount);
            });
        }
    }

})();