(function() {
    'use strict';

    angular.module('app.deals')
        .controller('DealEditController', DealEditController);

    DealEditController.$inject = [
        'DealService',
        '$stateParams',
        '$scope',
        'prepSelDeal',
        'HelperService',
        '$state',
        'brandPrepService',
        'categoryPrepService', 
        'prepSelHighlights',
        'prepSelTemplates',
        'prepTemplateNames',
        'prepTemplateTypes',
        'prepStandardD',
        'prepEarlyBirdD',
        'prepDealImages',
        '$filter',
        '$log'
    ];

    /* @ngInject */
    function DealEditController(DealService,
        $stateParams,
        $scope,
        prepSelDeal,
        HelperService,
        $state,
        brandPrepService,
        categoryPrepService,
        prepSelHighlights,
        prepSelTemplates,
        prepTemplateNames,
        prepTemplateTypes,
        prepStandardD,
        prepEarlyBirdD,
        prepDealImages,
        $filter,
        $log
    ) {

        var vm = this;

        vm.mode = "Edit";
        vm.response = {};
        vm.dealId = $stateParams.id;
        vm.selectedDeal = prepSelDeal;
        vm.form = vm.selectedDeal;
        vm.form.highlights = [];
        vm.form.templates = [];
        vm.form.discounts = {};
        //vm.form.highlights = vm.selectedDeal.highlights;
        vm.highlights = prepSelHighlights;
        vm.isDone = true;
        vm.brands = brandPrepService.brands;
        vm.default = vm.selectedDeal.brand;
        vm.categories = categoryPrepService.categories;
        vm.defaultCategory = vm.selectedDeal.category;
        vm.removeHighlight = removeHighlight;
        vm.removedHighlightObjs = [];

        //template
        vm.templates = prepSelTemplates;
        vm.removedTemplateObjs = [];
        vm.templateCounter = 0;
        vm.increTemplateCounter = increTemplateCounter;
        vm.selTemplateIndex = 0;
        vm.setSelTemplateIndex = setSelTemplateIndex;
        vm.selTemplateObj = {};
        vm.setSelTemplateObj = setSelTemplateObj;
        vm.templateNames = prepTemplateNames;
        vm.templateTypes = prepTemplateTypes;
        vm.removeTemplate = removeTemplate;
        vm.priceFormat = priceFormat;

        //discount
        vm.discounts = prepStandardD.concat(prepEarlyBirdD);
        vm.removedDiscountObjs = [];
        vm.discountCounter = 0;
        vm.increDiscountCounter = increDiscountCounter;
        vm.selDiscountIndex = 0;
        vm.setSelDiscountIndex = setSelDiscountIndex;
        vm.selDiscountObj = {};
        vm.setSelDiscountObj = setSelDiscountObj;
        vm.removeDiscount = removeDiscount;
        vm.standardDiscounts = prepStandardD;
        vm.earlyBirdDiscounts = prepEarlyBirdD;
        vm.hasStandardDiscounts = hasStandardDiscounts;
        vm.hasEarlybirdDiscounts = hasEarlybirdDiscounts;
        vm.openDiscountModal = openDiscountModal;
        vm.removeSelDiscount = removeSelDiscount;
        vm.setActive = setActive;

        //images
        vm.form.file = [];
        vm.images = prepDealImages;
        vm.removeImage = removeImage;
        vm.removedImageObj = [];
        vm.imageCounter = 0;
        vm.getImageCounter = getImageCounter;
        vm.insertNewImageObj = insertNewImageObj;
        vm.latestImgIndex = latestImgIndex;
        vm.blankFn = blankFn;
        vm.openEditImageModal = openEditImageModal;
        vm.removeAddedImage = removeAddedImage;

        vm.updateDateDiff = updateDateDiff;
        vm.prevState = HelperService.getPrevState();
        vm.submitAction = editDeal;

        activate();

        ///////////////////

        function activate() {
            //$log.log(vm.discounts);
            insertNewImageObj();
            // angular.element('.start-date').datepicker({
            //     orientation: "left",
            //     autoclose: true
            // });
            //$log.log(vm.discounts);
            priceFormat();
            // DealService.find(vm.dealId).then(function(data) {
            //     vm.selectedDeal = data;
            //     vm.form = vm.selectedDeal;
            // });
            //temporary workaround
            $(document).ready(function() {
                ComponentsDateTimePickers.init();
                $('[data-toggle="tooltip"]').tooltip();
            });
        }

        function removeSelDiscount(target, discountModel) {
            if (discountModel.discount_type == 'standard' && discountModel.status == 'active') {
                bootbox.alert("You can't remove an active standard discount!");
            } else {
                angular.element(target).parents('.discount-row').remove();
                vm.removeDiscount(discountModel);
            }

        }

        function openDiscountModal(discountModel) {
            $('#discount-modal-edit').modal('show');
            vm.setSelDiscountObj(discountModel);
        }

        function hasStandardDiscounts() {
            var formDiscountCount = 0;
            var removedDiscountCount = 0;

            angular.forEach(vm.form.discounts, function(discount, index) {
                // if (discount.value != 'null' && discount.value != '' && discount.discount_type == 'standard') {
                //     formDiscountCount++;
                // }
                if (discount != 'null' && discount.discount_type == 'standard') {
                    formDiscountCount++;
                }
            });

            angular.forEach(vm.removedDiscountObjs, function(discount, index) {
                if (discount != 'null' && discount.discount_type == 'standard') {
                    removedDiscountCount++;
                }
            });

            var discountCount = vm.standardDiscounts.length + formDiscountCount;

            if (discountCount == removedDiscountCount) {
                return false;
            }

            return angular.isDefined(vm.standardDiscounts) && vm.standardDiscounts.length > 0;
        }

        function hasEarlybirdDiscounts() {
            var formDiscountCount = 0;
            var removedDiscountCount = 0;

            angular.forEach(vm.form.discounts, function(discount, index) {
                if (discount != null && discount.discount_type == 'early_bird') {
                    formDiscountCount++;
                }
            });

            angular.forEach(vm.removedDiscountObjs, function(discount, index) {
                if (discount.value != 'null' && discount.value != '' && discount.discount_type == 'early_bird') {
                    removedDiscountCount++;
                }
            });

            var discountCount = vm.earlyBirdDiscounts.length + formDiscountCount;
            var rows = angular.element('.early-bird').find('.discount-row');

            // if (discountCount == removedDiscountCount) {
            if (removedDiscountCount == 0 && (angular.isDefined(vm.earlyBirdDiscounts) && vm.earlyBirdDiscounts.length > 0)) {
                return true;
            }

            if (angular.isDefined(vm.earlyBirdDiscounts) && vm.earlyBirdDiscounts.length == 0 && formDiscountCount > 0) {
                return true;
            }

            // if (formDiscountCount == 0 && rows.length == 0) {
            //     return false;
            // }

            if (angular.isDefined(vm.earlyBirdDiscounts) && vm.earlyBirdDiscounts.length == 0 && formDiscountCount == 0) {
                return false;
            }

            return (angular.isDefined(vm.earlyBirdDiscounts) && vm.earlyBirdDiscounts.length > 0);

        }

        function removeAddedImage(image) {
            angular.forEach(vm.form.file, function(img, index) {
                if (img === image) {
                    vm.form.file.splice(index, 1);
                }
            });
        }

        function openEditImageModal(elem) {
            $(elem).parents('.image-view-container').find('.image-modal').modal('show');
        }

        function blankFn() {
            return false;
        }

        function latestImgIndex() {
            return vm.form.file.length - 1;
        }

        function insertNewImageObj() {
            var obj = {
                file: "",
                description: ""
            };
            vm.form.file.push(obj);
        }

        function getFormImage() {
            //var index = getImageCounter();

            vm.form.file[vm.imageCounter] = {
                file: "",
                description: ""
            };

            return vm.form.file[vm.imageCounter++];
        }

        function getImageCounter() {
            return vm.imageCounter++;
        }

        function removeImage(elem, image) {
            vm.removedImageObj.push(image);
            $(elem).parents('.image-view-container').remove();
        }

        function updateDateDiff() {
            vm.form.date_ends = '';

            var dateNow = new Date();
            var dateComp = new Date(vm.form.date_starts);

            var timeDiff = Math.abs(dateComp.getTime() - dateNow.getTime());
            var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

            $('#ending_date').datepicker({
                autoclose: true
            });

            $('#ending_date').datepicker('setStartDate', '+' + diffDays + 'd');

        }

        //Discount
        function removeDiscount(discount) {
            //$log.log(vm.form.discounts);
            angular.forEach(vm.form.discounts, function(val, attr) {
                if (val == discount) {
                    //$log.log(attr);
                    //delete vm.form.discounts[attr];
                    vm.form.discounts[attr] = null;
                }
            });

            angular.forEach(vm.standardDiscounts, function(val, index) {
                if (val.uid == discount.uid) {
                    vm.standardDiscounts.splice(index, 1);
                }
            });

            angular.forEach(vm.earlyBirdDiscounts, function(val, index) {
                if (val.uid == discount.uid) {
                    vm.earlyBirdDiscounts.splice(index, 1);
                }
            });

            $log.log(vm.form.discounts);
            vm.removedDiscountObjs.push(discount);
        }

        function setSelDiscountObj(dobj) {
            vm.selDiscountObj = dobj;
        }

        function setSelDiscountIndex(index) {
            vm.selDiscountIndex = index;
        }

        function increDiscountCounter() {
            vm.discountCounter++;
        }
        //End Discount

        function priceFormat() {
            var price = vm.form.price;

            vm.form.price = parseFloat(price).toFixed(2) + '';
        }

        function setSelTemplateObj(tobj) {
            vm.selTemplateObj = tobj;
        }

        function setSelTemplateIndex(index) {
            vm.selTemplateIndex = index;
        }

        function increTemplateCounter() {
            vm.templateCounter++;
        }

        function removeTemplate(template) {
            angular.forEach(vm.templates, function(val, index) {
                if (val.uid == template.uid) {
                    vm.templates.splice(index, 1);
                }
            });
            vm.removedTemplateObjs.push(template);
        }

        function removeHighlight(highlight) {
            angular.forEach(vm.highlights, function(val, index) {
                if (val.uid == highlight.uid) {
                    vm.highlights.splice(index, 1);
                }
            });
            vm.removedHighlightObjs.push(highlight);
        }

        function deleteHighligts() {

        }

        function editDeal() {
            vm.isDone = false;
            //temporary
            //vm.form.brand_id = '3228eb88-6810-4b28-ae52-88a62e4655c3';

            vm.form.starts_at = HelperService.combineDateTime(vm.form.date_starts, vm.form.time_starts);
            vm.form.ends_at = HelperService.combineDateTime(vm.form.date_ends, vm.form.time_ends);
            // $log.log(vm.form);
            // $log.log(vm.highlights);
            // $log.log(vm.removedHighlightObjs);
            // return false;
            vm.form.templates.splice(vm.form.templates.length - 1, 1);
            //vm.form.highlights.splice(vm.form.highlights.length - 1, 1);
            //$log.log(vm.form);
            var data = {
                form: vm.form,
                highlights: vm.highlights,
                removedHighlights: vm.removedHighlightObjs,
                templates: vm.templates,
                removedTemplates: vm.removedTemplateObjs,
                discounts: vm.discounts,
                removedDiscounts: vm.removedDiscountObjs,
                images: vm.images,
                removedImages: vm.removedImageObj
            };

            //$log.log(data);
            //return false;

            DealService.edit(vm.dealId, data).then(function() {
                vm.response['success'] = "alert-success";
                vm.response['alert'] = "Success!";
                vm.response['msg'] = "Updated deal: " + vm.form.name;
                vm.isDone = true;

                $scope.$parent.vm.isDone = true;
                $scope.$parent.vm.response = vm.response;
                $scope.$parent.vm.getDeals();
                $state.go(vm.prevState);

            }).catch(function(err) {
                $log.log(err);
                vm.response['success'] = "alert-danger";
                vm.response['alert'] = "Error!";
                vm.response['msg'] = "Failed to update deal.";
                vm.response['error_arr'] = err;
                vm.isDone = true;

                $scope.$parent.vm.isDone = true;
                HelperService.goToAnchor('msg-info');

            });
        }

        function countActiveStandard(selFieldModel) {
            var dobj = selFieldModel;
            var countStandard = 0;
            // $log.log('---------');
            // $log.log(scope.fieldModel);
            angular.forEach(vm.form.discounts, function(discount, index) {
                if (discount != null && discount.discount_type == 'standard') {
                    if (discount.status == 'active') {
                        countStandard++;
                    }
                }
            });
            //$log.log(scope.discountsData);
            angular.forEach(vm.discounts, function(discount, index) {
                if (discount != null && discount.discount_type == 'standard' && dobj != discount) {
                    if (discount.status == 'active') {
                        countStandard++;
                    }
                }
            });

            // $log.log(countStandard);
            // $log.log('---------');

            return countStandard;
        }

        function setActive(selFieldModel, newDiscounts, discountsData, type, mode) {
            DealService.setActive(selFieldModel, newDiscounts, discountsData, type, mode);
        }

        function _setActive(selFieldModel, discountsData, type, mode) {
            if (type == 'standard') {
                var existingCount = HelperService.countModelLength($filter('getActiveStandard')(vm.discounts));
                var newCount = HelperService.countModelLength($filter('getActiveStandard')(vm.form.discounts));

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
                                reverseStatus(type);
                                $scope.$digest();
                            }
                        }
                    });

                }
            } else {
                //Existing discounts
                angular.forEach($filter('whereAttr')(vm.discounts, 'discount_type', type), function(discount, index) {
                    if (discount == selFieldModel) {
                        discount.status = $filter('reverseStatus')(discount);
                    }
                });
                //New discounts
                angular.forEach($filter('whereAttr')(vm.form.discounts, 'discount_type', type), function(discount, index) {
                    if (discount == selFieldModel) {
                        discount.status = $filter('reverseStatus')(discount);
                    }
                });
            }
        }

        function reverseStatus(type) {
            //Existing discounts
            angular.forEach($filter('whereAttr')(vm.discounts, 'discount_type', type), function(discount, index) {
                discount.status = $filter('reverseStatus')(discount);
            });
            //New discounts
            angular.forEach($filter('whereAttr')(vm.form.discounts, 'discount_type', type), function(discount, index) {
                discount.status = $filter('reverseStatus')(discount);
            });
        }

        function statusChange(selFieldModel) {
            if (selFieldModel.status == 'active') {
                selFieldModel.status = 'suspended';
            } else {
                selFieldModel.status = 'active';
            }

            var selDiscount = selFieldModel;
            var status = selDiscount.status;
            var countStandard = 0;
            //$log.log(selDiscount);
            var activeStandard = countActiveStandard(selFieldModel);
            //$log.log(activeStandard);
            if (status == 'active') {

                angular.forEach(vm.form.discounts, function(discount, index) {
                    if (discount != null && discount != selDiscount && discount.discount_type == 'standard') {
                        countStandard++;
                        if (discount.status == 'active') {
                            discount.status = 'suspended';
                        }
                    } else if (discount != null && discount.discount_type == 'early_bird') {
                        if (discount.status == 'active') {
                            discount.status = 'suspended';
                        } else {
                            discount.status = 'active'
                        }
                    }
                });

                if (vm.mode == 'Edit' && selDiscount.discount_type == 'standard') {

                    angular.forEach(vm.discounts, function(discount, index) {
                        countStandard++;
                        if (discount != null && discount.discount_type == 'standard') {
                            if (discount.status == 'active') {
                                discount.status = 'suspended';
                            }

                        } else if (discount != null && discount.discount_type == 'early_bird') {
                            if (discount.status == 'active') {
                                discount.status = 'suspended';
                            } else {
                                discount.status = 'active'
                            }
                        }
                    });
                }
                if (countStandard == 0 && selDiscount.discount_type == 'standard') {
                    selFieldModel.status = 'active';
                }
            } else if (selDiscount.discount_type == 'standard' && activeStandard == 0) {
                bootbox.alert('There must be one active standard discount.');
                selFieldModel.status = 'active';
            }


        }
    }
})();