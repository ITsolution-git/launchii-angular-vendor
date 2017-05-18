(function() {
    'use strict';

    angular.module('app.deals')
        .controller('DealAddController', DealAddController);

    DealAddController.$inject = ['DealService', '$scope', 'HelperService', '$state', 'brandPrepService', 'categoryPrepService', 'prepTemplateNames', 'prepTemplateTypes'];

    /* @ngInject */
    function DealAddController(DealService, $scope, HelperService, $state, brandPrepService, categoryPrepService, prepTemplateNames, prepTemplateTypes) {
        var vm = this;

        vm.mode = "Add";
        vm.form = {};
        vm.form.status = 'draft';
        vm.form.discount_type = 'standard_discount';
        vm.form.highlights = [];
        vm.form.templates = [];
        vm.form.discounts = {};
        vm.response = {};
        vm.isDone = true;
        vm.brands = brandPrepService.brands;
        vm.default = vm.brands[0];
        vm.categories = categoryPrepService.categories;
        vm.defaultCategory = vm.categories[0].uid;

        vm.removeHighlight = removeHighlight;

        //template
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
        vm.discountCounter = 0;
        vm.increDiscountCounter = increDiscountCounter;
        vm.selDiscountIndex = 0;
        vm.setSelDiscountIndex = setSelDiscountIndex;
        vm.selDiscountObj = {};
        vm.setSelDiscountObj = setSelDiscountObj;
        vm.removeDiscount = removeDiscount;
        vm.standardDiscounts = [];
        vm.earlyBirdDiscounts = [];
        vm.hasStandardDiscounts = hasStandardDiscounts;
        vm.hasEarlybirdDiscounts = hasEarlybirdDiscounts;
        vm.openDiscountModal = openDiscountModal;
        vm.removeSelDiscount = removeSelDiscount;
        vm.removedDiscountObjs = [];
        vm.setActive = setActive;
        vm.discounts = [];

        //image
        vm.form.file = [];
        vm.imageCounter = 0;
        vm.getImageCounter = getImageCounter;
        vm.removeAddedImage = removeAddedImage;
        vm.insertNewImageObj = insertNewImageObj;
        vm.latestImgIndex = latestImgIndex;
        vm.blankFn = blankFn;

        vm.updateDateDiff = updateDateDiff;
        vm.prevState = HelperService.getPrevState();
        vm.submitAction = addDeal;
        vm.isDealEmpty = DealService.isEmpty();
        vm.isBrandEmpty = brandPrepService.total == 0;
        vm.isCategoryEmpty = categoryPrepService.total == 0;

        activate();

        ///////////////////

        function activate() {
            // angular.element('.start-date').datepicker({
            //     orientation: "left",
            //     autoclose: true
            // });
            //ComponentsDateTimePickers.init();
            insertNewImageObj();
            $(document).ready(function() {
                ComponentsDateTimePickers.init();
            });
            // vm.$watch('vm.form.price', function(newVal, oldVal) {
            //     $log.log(newVal);
            //     return newVal.toFixed(2);
            // });
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

        function removeAddedImage(image) {
            angular.forEach(vm.form.file, function(img, index) {
                if (img === image) {
                    vm.form.file.splice(index, 1);
                }
            });
        }

        function getImageCounter() {
            return vm.imageCounter++;
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
        function removeSelDiscount(target, discountModel) {
            angular.element(target).parents('.discount-row').remove();
            vm.removeDiscount(discountModel);
        }

        function openDiscountModal(discountModel) {
            $('#discount-modal-edit').modal('show');
            vm.setSelDiscountObj(discountModel);
        }

        function hasStandardDiscounts() {
            var formDiscountCount = 0;
            //$log.log(vm.form.discounts);
            // for (var key in vm.form.discounts) {
            //     //$log.log(vm.form.discounts[key].discount_type);
            //     if (vm.form.discounts[key] != null && vm.form.discounts[key].discount_type == 'standard') {
            //         formDiscountCount++;
            //     }
            // }

            angular.forEach(vm.form.discounts, function(discount, index) {
                if (discount != null && discount.discount_type == 'standard') {
                    formDiscountCount++;
                }
            });

            return formDiscountCount > 0;
        }

        function hasEarlybirdDiscounts() {
            var formDiscountCount = 0;

            for (var key in vm.form.discounts) {
                //$log.log(vm.form.discounts[key].discount_type);
                if (vm.form.discounts[key] != null && vm.form.discounts[key].discount_type == 'early_bird') {
                    formDiscountCount++;
                }
            }

            return formDiscountCount > 0;
            // angular.forEach(vm.form.discounts, function(discount, index) {
            //     if (discount.value != 'null' &&
            //         discount.value != '' &&
            //         discount.weighting != null &&
            //         discount.weighting != 'null' &&
            //         discount.weighting != '' &&
            //         discount.coupon_count != null &&
            //         discount.coupon_count != 'null' &&
            //         discount.coupon_count != '' &&
            //         discount.coupon_limit != null &&
            //         discount.coupon_limit != 'null' &&
            //         discount.coupon_limit != '' &&
            //         discount.discount_type == 'early_bird') {
            //         formDiscountCount++;
            //     }
            // });

            // angular.forEach(vm.removedDiscountObjs, function(discount, index) {
            //     if (discount.value != 'null' && discount.value != '' && discount.discount_type == 'early_bird') {
            //         removedDiscountCount++;
            //     }
            // });

            // var discountCount = vm.earlyBirdDiscounts.length + formDiscountCount;
            // var rows = angular.element('.early-bird').find('.discount-row');

            // // if (discountCount == removedDiscountCount) {
            // if (removedDiscountCount == 0 && (angular.isDefined(vm.earlyBirdDiscounts) && vm.earlyBirdDiscounts.length > 0)) {
            //     return true;
            // }

            // if (angular.isDefined(vm.earlyBirdDiscounts) && vm.earlyBirdDiscounts.length == 0 && formDiscountCount > 0) {
            //     return true;
            // }

            // // if (formDiscountCount == 0 && rows.length == 0) {
            // //     return false;
            // // }

            // if (angular.isDefined(vm.earlyBirdDiscounts) && vm.earlyBirdDiscounts.length == 0 && formDiscountCount == 0) {
            //     return false;
            // }

            // return (angular.isDefined(vm.earlyBirdDiscounts) && vm.earlyBirdDiscounts.length > 0);

        }

        function removeDiscount(discount) {
            // angular.forEach(vm.form.discounts, function(val, attr) {
            //     $log.log(discount == val);
            //     if (discount == val) {
            //         //$log.log('test')
            //         //vm.form.discounts.splice(index, 1);
            //         delete vm.form.discounts[attr];
            //     }
            // });
            for (var attr in vm.form.discounts) {
                $log.log(discount == vm.form.discounts[attr]);
                if (discount == vm.form.discounts[attr]) {
                    vm.form.discounts[attr] = null;
                }
            }
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

        //Template
        function priceFormat() {
            var price = vm.form.price;

            vm.form.price = parseFloat(price).toFixed(2) + '';
        }

        function removeTemplate(template_index) {
            angular.forEach(vm.form.templates, function(val, index) {
                if (index == template_index) {
                    $log.log('test')
                    vm.form.templates.splice(index, 1);
                }
            });
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
        //END Template


        function addDeal() {
            vm.isDone = false;
            //temporary
            //vm.form.brand_id = '3228eb88-6810-4b28-ae52-88a62e4655c3';

            vm.isDone = false;
            vm.form.starts_at = HelperService.combineDateTime(vm.form.date_starts, vm.form.time_starts);
            vm.form.ends_at = HelperService.combineDateTime(vm.form.date_ends, vm.form.time_ends);

            //$log.log(vm.form);
            //return false;
            if (!checkHasActiveStandardDiscount()) {
                bootbox.alert({
                    title: "No active standard discount!",
                    message: "Please add a single active standard discount to add new deal."
                });
                vm.isDone = true;
                return false;
            }

            DealService.add(vm.form).then(function(resp) {
                vm.response['success'] = "alert-success";
                vm.response['alert'] = "Success!";
                // vm.response['msg'] = "Added new deal: " + vm.form.name + ' ' + resp;
                vm.response['msg'] = "Added new deal.";
                vm.isDone = true;

                $scope.$parent.vm.isDone = true;
                $scope.$parent.vm.response = vm.response;
                $scope.$parent.vm.getDeals();
                $state.go(vm.prevState);

            }).catch(function(err) {
                vm.response['success'] = "alert-danger";
                vm.response['alert'] = "Error!";
                vm.response['msg'] = "Failed to add deal.";
                vm.response['error_arr'] = err.data == null ? '' : err.data.errors;
                vm.isDone = true;

                $scope.$parent.vm.isDone = true;
                HelperService.goToAnchor('msg-info');
            });
        }

        function checkHasActiveStandardDiscount() {
            var discounts = vm.form.discounts;
            var hasActive = false;
            for (var key in discounts) {
                if (discounts[key].discount_type == 'standard' && discounts[key].status == 'active') {
                    hasActive = true;
                }
            }

            return hasActive || (vm.form.status != 'published');
        }

        function setActive(selFieldModel, newDiscounts, discountsData, type, mode) {
            DealService.setActive(selFieldModel, newDiscounts, discountsData, type, mode);
        }

        function removeHighlight(highlightId) {

        }
    }
})();