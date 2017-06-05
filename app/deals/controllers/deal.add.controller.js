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
                        'prepDealType',
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
                    prepDealType,
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
        vm.form.deal_type = prepDealType;
        vm.form.variants = [];
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
        vm.hasStandardDiscounts = hasStandardDiscounts;
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

        //Video
        vm.form.videos = [];
        vm.videoCounter = 0;
        // vm.getVideoCounter = getVideoCounter;
        vm.removeAddedVideo = removeAddedVideo;
        vm.insertNewVideoObj = insertNewVideoObj;
        vm.latestVideoIndex = latestVideoIndex;

        vm.updateDateDiff = updateDateDiff;
        vm.prevState = HelperService.getPrevState();
        vm.submitAction = addDeal;
        vm.isBrandEmpty = brandPrepService.total == 0;
        vm.isCategoryEmpty = categoryPrepService.total == 0;

        // variants
        vm.finalVariants = vm.form.variants;
        vm.removeVariant = removeVariant;
        vm.hasVariants = hasVariants;

        vm.workingVariantIndex = -1;
        vm.workingVariant = {};
        vm.onAddVariant = onAddVariant;
        vm.onEditVariant = onEditVariant;
        vm.onVariantCommitted = onVariantCommitted;
        vm.commitVariantDisabled = true;

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

            // for Add/Edit variant button disabled status
            $scope.$watch('vm.workingVariant.name', function(newValue, oldValue) {
                updateVariantFormButton();
            });

            $scope.$watch('vm.workingVariant.color', function(newValue, oldValue) {
                updateVariantFormButton();
            });

            insertNewImageObj();
            insertNewVideoObj();
            $(document).ready(function() {
                ComponentsDateTimePickers.init();
            });
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

        // Video
        function latestVideoIndex() {
            return vm.form.videos.length - 1;
        }

        function insertNewVideoObj() {
            var obj = {
                title: "",
                description: "",
                embedded_content: "",
                source_type: "embed",
                attachment: "",
                image_attributes: {
                    description: '',
                    file: ''
                }
            };
            vm.form.videos.push(obj);
        }

        function removeAddedVideo(selvideo) {
            angular.forEach(vm.form.videos, function(video, index) {
                if (selvideo === video) {
                    vm.form.videos.splice(index, 1);
                }
            });
        }

        // function getVideoCounter() {
        //     return vm.imageCounter++;
        // }

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

        ////////////////////////////////////////////////////////////////////
        //                          For Variants                          //
        ////////////////////////////////////////////////////////////////////
        function removeVariant(variant_index) {
          vm.finalVariants.splice(variant_index, 1);
        }

        function hasVariants() {
            return vm.finalVariants.length > 0;
        }

        function onAddVariant() {
            vm.workingVariantIndex = -1;
            delete vm.workingVariant.name;
            vm.workingVariant.color = '#808080';
            $('#variant-modal').modal('show');
        }

        function onEditVariant(variant_index) {
            if (variant_index < 0 || variant_index >= vm.finalVariants.length) {
                return;
            }
            vm.workingVariantIndex = variant_index;
            vm.workingVariant.name = vm.finalVariants[variant_index].name;
            vm.workingVariant.color = vm.finalVariants[variant_index].color;
            $('#variant-modal').modal('show');
        }

        function onVariantCommitted() {
            if (!angular.isDefined(vm.workingVariant.name) ||
                vm.workingVariant.name.trim() == '' ||
                HelperService.checkValidHexColor(vm.workingVariant.color) == false) {
                return;
            }

            // Check for duplication
            var isDuplicated = false;
            angular.forEach(vm.finalVariants, function(variant, index) {
                if (index != vm.workingVariantIndex) {
                    if (variant.name == vm.workingVariant.name ||
                        variant.color == vm.workingVariant.color) {
                            isDuplicated = true;
                        }
                }
            });

            if (isDuplicated) {
                bootbox.alert({
                    title: "Variant duplicated!",
                    message: "There is a variant with same name or color already."
                });
                return;
            }

            var variantInArray = null;
            if (vm.workingVariantIndex == -1) {
                variantInArray = {};
                vm.finalVariants.push(variantInArray);
            } else {
                variantInArray = vm.finalVariants[vm.workingVariantIndex];
            }

            variantInArray.name = vm.workingVariant.name;
            variantInArray.color = vm.workingVariant.color;
        }

        function updateVariantFormButton() {
            var nameValid = false;
            if (angular.isDefined(vm.workingVariant.name)) {
                if (vm.workingVariant.name.trim() == '') {
                    nameValid = false;
                } else {
                    nameValid = true;
                }
            } else {
                nameValid = false;
            }

            var colorValid = HelperService.checkValidHexColor(vm.workingVariant.color);

            if (nameValid && colorValid) {
                vm.commitVariantDisabled = false;
            } else {
                vm.commitVariantDisabled = true;
            }
        }
    }
})();
