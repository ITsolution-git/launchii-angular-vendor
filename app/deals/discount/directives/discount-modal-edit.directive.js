(function() {
    'use strict';

    angular
        .module('app.deals')
        .directive('discountModalEdit', discountModalEdit);

    discountModalEdit.$inject = ['$compile', '$document'];
    /* @ngInject */
    function discountModalEdit($compile, $document) {

        var directive = {
            restrict: 'E',
            templateUrl: '/app/deals/discount/discount-modal-edit.html',
            replace: true,
            scope: {
                fieldModel: '=',
                formMode: '=',
                discountsData: '='
            },
            transclude: true,
            link: function(scope, element, attrs) {
                ComponentsDateTimePickers.init();

                scope.closeModal = closeModal;

                scope.$parent.vm.setSelDiscountIndex(scope.$parent.vm.discountCounter);
                scope.statusChange = statusChange;
                scope.checkActiveDiscount = checkActiveDiscount;
                //scope.statusChange = statusChange;

                //////////////////////////

                function checkActiveDiscount() {
                    var tobj = scope.$parent.vm.selDiscountObj;
                    //$log.log(selDiscount);
                    var activeStandard = countActiveStandard();

                    if (tobj.status == 'active' && activeStandard > 0) {
                        bootbox.confirm({
                            title: "Confirm Active Standard",
                            message: "You have an active standard discount running at the moment. Do you want to create a new active standard discount?",
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
                                // if (result) {
                                //     t.status = 'suspended';
                                // } else {
                                //     $log.log(scope.$parent.vm.form.discounts[scope.$parent.vm.selDiscountIndex].status);
                                //     scope.$parent.vm.form.discounts[scope.$parent.vm.selDiscountIndex].status = 'suspended';
                                // }
                            }
                        });
                    }


                }

                function countActiveStandard() {
                    var tobj = scope.$parent.vm.selDiscountObj;
                    var countStandard = 0;

                    angular.forEach(scope.$parent.vm.form.discounts, function(t, index) {
                        if (t.discount_type == 'standard' && angular.isDefined(t.value) && t.value.trim() != "" && t.value.trim() != "null") {
                            // if (t.status == 'active') {
                                countStandard++;
                            // }
                        }

                    });

                    angular.forEach(scope.$parent.vm.discounts, function(t, index) {
                        if (tobj.uid != t.uid && t.discount_type == 'standard') {
                            // if (t.status == 'active') {
                                countStandard++;
                            // }

                        }
                    });
                    return countStandard;
                }

                function statusChange() {
                    var tobj = scope.$parent.vm.selDiscountObj;
                    var countStandard = 0;
                    var activeStandard = countActiveStandard();

                    if (tobj.discount_type == 'standard' && tobj.status == 'active') {
                        angular.forEach(scope.$parent.vm.form.discounts, function(t, index) {
                            $log.log(scope.$parent.vm.discountCounter);
                            if (t !== tobj && t.discount_type == 'standard') {
                                countStandard++;
                                //$log.log(t);
                                if (t.status == 'active') {

                                    t.status = 'suspended';
                                }
                            }

                        });

                        angular.forEach(scope.$parent.vm.discounts, function(t, index) {
                            if (tobj.uid != t.uid && t.discount_type == 'standard') {
                                countStandard++;
                                if (t.status == 'active') {
                                    t.status = 'suspended';
                                }

                            }
                        });

                        if (countStandard == 0 && tobj.discount_type == 'standard') {

                            scope.$parent.vm.selDiscountObj.status = 'active';
                        }
                    } else if (tobj.discount_type == 'standard' && activeStandard == 0) {

                        scope.$parent.vm.selDiscountObj.status = 'active';
                    }

                }

                // $("#discount-modal-edit").on("hidden.bs.modal", function() {
                //     statusChange();
                // });

                function closeModal() {
                    $('#discount-modal-edit').modal('hide');
                }
            }
        };

        return directive;
    }

})();