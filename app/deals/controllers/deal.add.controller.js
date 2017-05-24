(function() {
    'use strict';

    angular.module('app.deals')
        .controller('DealAddController', DealAddController);

    DealAddController.$inject = [
                        'DealService',
                        'UserService',
                        '$scope',
                        'HelperService',
                        '$state',
                        'brandPrepService',
                        'categoryPrepService',
                        'prepTemplateNames',
                        'prepTemplateTypes',
                        'prepUpsellDeals',
                        '$log'];

    /* @ngInject */
    function DealAddController(
                    DealService,
                    UserService,
                    $scope,
                    HelperService,
                    $state,
                    brandPrepService,
                    categoryPrepService,
                    prepTemplateNames,
                    prepTemplateTypes,
                    prepUpsellDeals,
                    $log) {
        var vm = this;

        vm.mode = "Add";
        vm.form = {};
        vm.form.status = 'draft';
        vm.form.deal_type = 'standard';
        vm.form.discount_type = 'standard_discount';
        vm.form.highlights = [];
        vm.form.templates = [];
        vm.form.discounts = {};
        vm.response = {};
        vm.isDone = true;
        vm.brands = brandPrepService.brands;
        vm.default = vm.brands[0];
        vm.categories = categoryPrepService.categories;
        vm.defaultCategory = vm.categories[0];

        vm.removeHighlight = removeHighlight;

        vm.priceFormat = priceFormat;

        //template
        vm.finalTemplates = vm.form.templates;
        vm.templateNames = prepTemplateNames;
        vm.templateTypes = prepTemplateTypes;
        vm.removeTemplate = removeTemplate;
        vm.hasTemplates = hasTemplates;
        vm.getTemplateNameKey = getTemplateNameKey;
        vm.getTemplateTypeKey = getTemplateTypeKey;

        vm.workingTemplateIndex = -1;
        vm.workingTemplate = {};
        vm.onAddTemplate = onAddTemplate;
        vm.onEditTemplate = onEditTemplate;
        vm.onTemplateCommitted = onTemplateCommitted;
        vm.commitTemplateDisabled = true;

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

        vm.upsellDeals = prepUpsellDeals;
        vm.form.upsell_associations = [];

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
        vm.isBrandEmpty = brandPrepService.total == 0;
        vm.isCategoryEmpty = categoryPrepService.total == 0;

        vm.capFirstLetter = HelperService.capFirstLetter;

        activate();

        ///////////////////

        function activate() {

            // for Add/Edit template button disabled status
            $scope.$watch('vm.workingTemplate.name', function(newValue, oldValue) {
              if (angular.isDefined(newValue)) {
                  if (newValue.trim() == '') {
                      vm.commitTemplateDisabled = true;
                  } else {
                      vm.commitTemplateDisabled = false;
                  }
              } else {
                  vm.commitTemplateDisabled = true;
              }
            });

            insertNewImageObj();
            $(document).ready(function() {
                ComponentsDateTimePickers.init();
            });
            // vm.$watch('vm.form.price', function(newVal, oldVal) {
            //     $log.log(newVal);
            //     return newVal.toFixed(2);
            // });
        }

        function hasTemplates() {
            return vm.finalTemplates.length > 0;
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

        function countValidImages() {
          var count = 0;
          angular.forEach(vm.form.file, function(img, index) {
            if (img.file !== undefined && img.file != null &&
                img.file !== "" && angular.isObject(img.file)) {
              count ++;
            }
          });
          return count;
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
          vm.finalTemplates.splice(template_index, 1);
        }

        function onAddTemplate() {
          vm.workingTemplateIndex = -1;
          delete vm.workingTemplate.name;
          vm.workingTemplate.template_type = vm.templateNames[0].value;
          vm.workingTemplate.template_location = vm.templateTypes[0].value;
          vm.workingTemplate.status = 'draft';
          $('#template-modal').modal('show');
        }

        function onEditTemplate(template_index) {
          if (template_index < 0 || template_index >= vm.finalTemplates.length) {
            return;
          }
          vm.workingTemplateIndex = template_index;
          vm.workingTemplate.name = vm.finalTemplates[template_index].name;
          vm.workingTemplate.template_type = vm.finalTemplates[template_index].template_type;
          vm.workingTemplate.template_location = vm.finalTemplates[template_index].template_location;
          vm.workingTemplate.status = vm.finalTemplates[template_index].status;
          $('#template-modal').modal('show');
        }

        function onTemplateCommitted() {
          if (!angular.isDefined(vm.workingTemplate.name) || vm.workingTemplate.name.trim() == '') {
            return;
          }
          var templateInArray = null;
          if (vm.workingTemplateIndex == -1) {
            templateInArray = {};
            vm.finalTemplates.push(templateInArray);
          } else {
            templateInArray = vm.finalTemplates[vm.workingTemplateIndex];
          }

          // confirm only one published status
          if (vm.workingTemplate.status == 'published') {
            angular.forEach(vm.finalTemplates, function(template, index) {
                if (template.status == 'published' && template.template_location == vm.workingTemplate.template_location) {
                    template.status = 'draft';
                }
            });
          }

          templateInArray.name = vm.workingTemplate.name;
          templateInArray.template_type = vm.workingTemplate.template_type;
          templateInArray.template_location = vm.workingTemplate.template_location;
          templateInArray.status = vm.workingTemplate.status;
        }

        function getTemplateNameKey(template_type) {
          var key = '';
          angular.forEach(vm.templateNames, function(name, index) {
            if (name.value == template_type) {
              key = name.key;
            }
          });
          return key;
        }

        function getTemplateTypeKey(template_location) {
          var key = '';
          angular.forEach(vm.templateTypes, function(type, index) {
            if (type.value == template_location) {
              key = type.key;
            }
          });
          return key;
        }

        //END Template


        function addDeal() {
            vm.isDone = false;

            vm.form.starts_at = HelperService.combineDateTime(vm.form.date_starts, vm.form.time_starts);
            vm.form.ends_at = HelperService.combineDateTime(vm.form.date_ends, vm.form.time_ends);

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
                vm.response['msg'] = "Added new deal.";
                vm.isDone = true;

                $scope.$parent.vm.search();
                $state.go(vm.prevState);

            }).catch(function(err) {
                vm.response['success'] = "alert-danger";
                vm.response['alert'] = "Error!";
                vm.response['msg'] = "Failed to add deal.";
                vm.response['error_arr'] = err.data == null ? '' : err.data.errors;
                vm.isDone = true;

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
