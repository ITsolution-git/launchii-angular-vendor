(function() {
    'use strict';

    angular
        .module('app.deals')
        .directive('discountModal', discountModal);

    discountModal.$inject = ['$compile', '$document', '$q', 'DealService', '$rootScope', 'HelperService', '$filter'];
    /* @ngInject */
    function discountModal($compile, $document, $q, DealService, $rootScope, HelperService, $filter) {

        var directive = {
            restrict: 'E',
            templateUrl: '/app/deals/discount/discount-modal.html',
            replace: true,
            scope: {
                fieldModel: '=',
                formMode: '=',
                discountsData: '='
            },
            transclude: true,
            link: function(scope, element, attrs) {
                ComponentsDateTimePickers.init();
                //console.log(scope.fieldModel);
                //scope.$parent.vm.setSelDiscountIndex(scope.$parent.vm.discountCounter);
                scope.addDiscount = addDiscount;
                scope.checkActiveDiscount = checkActiveDiscount;

                init();

                element.on("hidden.bs.modal", function() {
                  scope.discount_form.$setPristine();
                  scope.$parent.vm.setSelDiscountIndex(scope.$parent.vm.discountCounter);
                });

                /////////////

                function init() {
                    scope.newDiscountObj = {};
                    scope.newDiscountObj.value_type = 'percentage';
                    scope.newDiscountObj.discount_type = 'standard';
                    scope.newDiscountObj.status = 'suspended';
                }

                function checkActiveDiscount() {
                    var d = $q.defer();

                    var selDiscount = scope.newDiscountObj;
                    var status = selDiscount.status;
                    var countStandard = 0;
                    //console.log(selDiscount);
                    var existingCount = HelperService.countModelLength($filter('getActiveStandard')(scope.discountsData));
                    var newCount = HelperService.countModelLength($filter('getActiveStandard')(scope.fieldModel));
                    var activeStandard = existingCount + newCount;
                    //console.log(activeStandard);
                    if (scope.formMode == 'Edit') {
                        //console.log('test');
                        if (selDiscount.discount_type == 'standard' && status == 'active' && activeStandard > 0) {
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
                                        d.resolve(result);
                                    } else {
                                        d.reject(false);
                                    }
                                }
                            });
                        } else {
                            d.reject(null);
                        }
                    } else if (selDiscount.discount_type == 'standard' && status == 'active' && activeStandard > 0) {
                        d.resolve(null);
                    } else if (selDiscount.discount_type == 'standard' && activeStandard == 0) {
                        d.resolve(null);
                    } else {
                        d.reject(null);
                    }

                    return d.promise;
                }

                function countActiveStandard() {
                    var tobj = scope.newDiscountObj;
                    var countStandard = 0;
                    //console.log(scope.discountsData);
                    angular.forEach(scope.fieldModel, function(discount, index) {
                        if (discount != null && discount.discount_type == 'standard' && discount.status == 'active') {
                            //if (t.status == 'active') {
                            countStandard++;
                            //}
                        }

                    });

                    // for (var attr in scope.fieldModel) {
                    //     if (scope.fieldModel[attr] != null && scope.fieldModel[attr].discount_type == 'standard') {
                    //         if (scope.fieldModel[attr].status == 'active') {
                    //             countStandard++;
                    //         }
                    //     }
                    // }

                    angular.forEach(scope.discountsData, function(discount, index) {
                        //if (tobj.uid != t.uid && t.discount_type == 'standard') {
                        if (discount != null && discount.uid != tobj.uid && discount.discount_type == 'standard' && discount.status == 'active') {
                            //if (t.status == 'active') {
                            countStandard++;
                            //}

                        }
                    });

                    // for (var attr in scope.discountsData) {
                    //     if (scope.discountsData[attr] != null && scope.discountsData[attr].uid != t.uid && scope.discountsData[attr].discount_type == 'standard') {
                    //         if (scope.discountsData[attr].status == 'active') {
                    //             countStandard++;
                    //         }

                    //     }
                    // }

                    return countStandard;
                }

                function statusChange() {
                    var selDiscount = scope.newDiscountObj;
                    var status = selDiscount.status;
                    var countStandard = 0;
                    //console.log(selDiscount);
                    var existingCount = HelperService.countModelLength($filter('getActiveStandard')(scope.discountsData));
                    var newCount = HelperService.countModelLength($filter('getActiveStandard')(scope.fieldModel));
                    var activeStandard = existingCount + newCount;
                    //console.log(status);
                    if (status == 'active') {

                        angular.forEach(scope.fieldModel, function(t, index) {
                            if (t.discount_type == 'standard') {
                                countStandard++;
                                if (t.status == 'active') {
                                    t.status = 'suspended';
                                }
                            }

                        });

                        if (scope.formMode == 'Edit' && selDiscount.discount_type == 'standard') {
                            //console.log(scope.discountsData);
                            angular.forEach(scope.discountsData, function(t, index) {
                                if (t.discount_type == 'standard') {
                                    countStandard++;
                                    if (t.status == 'active') {
                                        t.status = 'suspended';
                                    }

                                }
                            });
                        }
                        //console.log(countStandard);
                        if (countStandard == 0 && selDiscount.discount_type == 'standard') {
                            scope.newDiscountObj.status = 'active';
                        }
                    } else if (selDiscount.discount_type == 'standard' && activeStandard == 0) {
                        scope.newDiscountObj.status = 'active';
                    }


                }

                // function addDiscount() {
                //     add();
                //     DealService.setActive(scope.newDiscountObj, scope.fieldModel, scope.discountsData, scope.newDiscountObj.discount_type, scope.formMode);
                // }

                function addDiscount() {
                    checkActiveDiscount().then(function() {
                        statusChange();
                        add();

                    }).catch(function(err) {
                        if (scope.newDiscountObj.discount_type == 'standard') {
                            scope.newDiscountObj.status = 'suspended';
                        }
                        add();
                    });

                }

                function add() {
                    var selDiscount = scope.newDiscountObj;
                    var elem = '';

                    if (selDiscount.discount_type == 'standard') {
                        elem = '#standard-discount-body';
                    } else if (selDiscount.discount_type == 'early_bird') {
                        elem = '#early-discount-body';
                    }

                    //console.log(elem);
                    var index = 'd' + countModelLength();
                    scope.fieldModel[index] = scope.newDiscountObj;
                    init();
                    //console.log(scope.fieldModel);
                    // console.log(scope.newDiscountObj);
                    //var index = scope.fieldModel.length - 1;
                    //console.log(index);
                    var html = '<discount-field form-mode="' + scope.formMode + '" field-model="fieldModel" discounts-data="discountsData" sel-field-model="fieldModel" field-model-index="' + index + '" ></discount-field>';
                    var input = angular.element(html);
                    var compile = $compile(input)(scope);

                    angular.element(elem).append(compile);
                    scope.discount_form.$setPristine();
                    $('#discount-modal').modal('hide');
                }

                function countModelLength() {
                    var count = 0;

                    // angular.forEach(scope.fieldModel, function(v, i) {
                    //     count++;
                    // });
                    for (var key in scope.fieldModel) {
                        count++;
                    }

                    return count;
                }
            }
        };

        return directive;
    }

})();
