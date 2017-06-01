(function() {
    'use strict';

    angular.module('app.deals')
        .controller('DealEditController', DealEditController);

    DealEditController.$inject = [
        'DealService',
        'UserService',
        '$stateParams',
        '$scope',
        'prepSelDeal',
        'HelperService',
        '$state',
        'brandPrepService',
        'categoryPrepService',
        'prepSelTemplates',
        'prepTemplateNames',
        'prepTemplateTypes',
        'prepUpsellDeals',
        'prepStandardD',
        'prepActiveStandardD',
        'prepDealImages',
        'prepDealVideos',
        '$filter',
        '$log'
    ];

    /* @ngInject */
    function DealEditController(DealService,
        UserService,
        $stateParams,
        $scope,
        prepSelDeal,
        HelperService,
        $state,
        brandPrepService,
        categoryPrepService,
        prepSelTemplates,
        prepTemplateNames,
        prepTemplateTypes,
        prepUpsellDeals,
        prepStandardD,
        prepActiveStandardD,
        prepDealImages,
        prepDealVideos,
        $filter,
        $log
    ) {

        var vm = this;

        vm.mode = "Edit";
        vm.response = {};
        vm.dealId = $stateParams.id;
        vm.selectedDeal = prepSelDeal;
        vm.form = vm.selectedDeal;
        vm.form.templates = [];
        vm.form.discounts = {};
        vm.isDone = true;
        vm.brands = brandPrepService.brands;
        vm.default = vm.selectedDeal.brand_id;
        vm.categories = categoryPrepService.categories;
        vm.defaultCategory = vm.selectedDeal.category_id;

        vm.priceFormat = priceFormat;

        //template
        vm.templates = prepSelTemplates;
        vm.finalTemplates = [];
        vm.removedTemplateObjs = [];
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
        vm.discounts = prepActiveStandardD;
        vm.removedDiscountObjs = [];
        vm.discountCounter = 0;
        vm.increDiscountCounter = increDiscountCounter;
        vm.selDiscountIndex = 0;
        vm.setSelDiscountIndex = setSelDiscountIndex;
        vm.selDiscountObj = {};
        vm.setSelDiscountObj = setSelDiscountObj;
        vm.removeDiscount = removeDiscount;
        vm.standardDiscounts = prepStandardD;
        vm.hasStandardDiscounts = hasStandardDiscounts;
        vm.openDiscountModal = openDiscountModal;
        vm.removeSelDiscount = removeSelDiscount;
        vm.setActive = setActive;

        vm.upsellDeals = prepUpsellDeals;
        
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

        //videos
        vm.form.videos = [];
        if (typeof prepDealVideos == 'object'  && prepDealVideos.length >= 1){

            vm.videos = prepDealVideos.map(function(video){
                var obj = angular.copy(video);
                obj.source_type = video.is_embedded ? 'embed' : 'local';
                obj.attachment = '';
                obj.image_attributes = {
                    description: '',
                    file: ''
                };
                obj.modified = false;
                return obj;
            });
        }
        vm.removeVideo = removeVideo;
        vm.removedVideoObj = [];
        vm.videoCounter = 0;
        vm.insertNewVideoObj = insertNewVideoObj;
        vm.latestVideoIndex = latestVideoIndex;
        vm.blankFn = blankFn;
        vm.openEditVideoModal = openEditVideoModal;
        vm.removeAddedVideo = removeAddedVideo;

        vm.updateDateDiff = updateDateDiff;
        vm.prevState = HelperService.getPrevState();
        vm.submitAction = editDeal;

        vm.capFirstLetter = HelperService.capFirstLetter;

        activate();

        ///////////////////

        function activate() {

            // mark already existing templates
            angular.forEach(vm.templates, function(template, index) {
              template['isOld'] = true;
              vm.finalTemplates.push(template);
            });

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
            insertNewVideoObj();

            priceFormat();

            //temporary workaround
            $(document).ready(function() {
                ComponentsDateTimePickers.init();
                $('[data-toggle="tooltip"]').tooltip();
            });
        }

        function hasTemplates() {
            return vm.finalTemplates.length > 0;
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

        function countValidImages() {
          var count = 0;
          angular.forEach(vm.form.file, function(img, index) {
            if (img.file !== undefined && img.file != null &&
                img.file !== "" && angular.isObject(img.file)) {
              count ++;
            }
          });
          angular.forEach(vm.images, function(img, index) {
            count ++;
          });
          angular.forEach(vm.removedImageObj, function(img, index) {
            count --;
          });
          return count;
        }

        //Videos
        function removeAddedVideo(selvideo) {
            angular.forEach(vm.form.videos, function(video, index) {
                if (selvideo === video) {
                    vm.form.videos.splice(index, 1);
                }
            });
        }

        function openEditVideoModal(elem, video) {
            video.modified = true;
            $(elem).parents('.video-view-container').find('.video-modal').modal('show');
        }

        function blankFn() {
            return false;
        }

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


        function removeVideo(elem, video) {
            vm.removedVideoObj.push(video);
            $(elem).parents('.video-view-container').remove();
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

        function removeTemplate(template_index) {
          if (template_index < 0 || template_index >= vm.finalTemplates.length) {
            return;
          }
          var removedArray = vm.finalTemplates.splice(template_index, 1);
          var removedTemplate = removedArray[0];
          if (angular.isDefined(removedTemplate.isOld) && removedTemplate.isOld === true) {
            vm.removedTemplateObjs.push(removedTemplate);
          }
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

        function editDeal() {
            vm.isDone = false;

            // image validation for published status
            if (vm.form.status === 'published' &&
                countValidImages() <= 0) {
              bootbox.alert({
                  title: "No uploaded images!",
                  message: "Please upload images to publish the deal."
              });
              vm.isDone = true;
              return false;
            }

            // process templates
            vm.form.templates = [];
            vm.templates = [];
            angular.forEach(vm.finalTemplates, function(template, index) {
              if (angular.isDefined(template.isOld) && template.isOld == true) {
                vm.templates.push(template);
              } else {
                vm.form.templates.push(template);
              }
            });

            vm.form.starts_at = HelperService.combineDateTime(vm.form.date_starts, vm.form.time_starts);
            vm.form.ends_at = HelperService.combineDateTime(vm.form.date_ends, vm.form.time_ends);

            var data = {
                form: vm.form,
                templates: vm.templates,
                removedTemplates: vm.removedTemplateObjs,
                discounts: vm.discounts,
                removedDiscounts: vm.removedDiscountObjs,
                images: vm.images,
                removedImages: vm.removedImageObj,
                videos: vm.videos,
                removedVideos: vm.removedVideoObj
            };

            //$log.log(data);
            //return false;

            DealService.edit(vm.dealId, data).then(function() {
                vm.response['success'] = "alert-success";
                vm.response['alert'] = "Success!";
                vm.response['msg'] = "Updated deal: " + vm.form.name;
                vm.isDone = true;

                $scope.$parent.vm.search();
                $state.go(vm.prevState);

            }).catch(function(err) {
                $log.log(err);
                vm.response['success'] = "alert-danger";
                vm.response['alert'] = "Error!";
                vm.response['msg'] = "Failed to update deal.";
                vm.response['error_arr'] = err.data == null ? '' : err.data.errors;
                vm.isDone = true;

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
