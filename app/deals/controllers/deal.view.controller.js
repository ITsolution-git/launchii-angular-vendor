(function() {
    'use strict';

    angular.module('app.deals')
        .controller('DealViewController', DealViewController);

    DealViewController.$inject = [
        'DealService',
        '$state',
        '$stateParams',
        '$scope',
        'prepSelDeal',
        'HelperService',
        'prepActiveStandardD',
        'prepDealImages',
        'prepDealVideos',
        '$window'
    ];

    /* @ngInject */
    function DealViewController(
        DealService,
        $state,
        $stateParams,
        $scope,
        prepSelDeal,
        HelperService,
        prepActiveStandardD,
        prepDealImages,
        prepDealVideos,
        $window
    ) {

        var vm = this;

        vm.mode = "View";
        vm.response = {};
        vm.dealId = $stateParams.id;
        vm.deal = prepSelDeal;
        vm.isDone = false;
        vm.editType = 'standard';

        //Discounts
        vm.activeDiscounts = prepActiveStandardD;
        vm.activeDiscount = (angular.isDefined(vm.activeDiscounts) && vm.activeDiscounts.length > 0) ? vm.activeDiscounts[0] : null;

        vm.hasImages = hasImages;
        vm.hasVideos = hasVideos;

        vm.requestApproval = requestApproval;
        vm.publish = publish;

        //Images
        vm.images = prepDealImages;
        vm.openEditImageModal = openEditImageModal;
        vm.prevState = HelperService.getPrevState();

        if ($window.__env.apiUrl.toLowerCase().indexOf('stageapi') > -1) {
          vm.customerHost = 'http://staging.launchii.com';
        } else {
          vm.customerHost = 'http://www.launchii.com';
        }

        //Videos
        vm.videos = prepDealVideos;
        vm.openEditVideoModal = openEditVideoModal;

        activate();

        ///////////////////

        function activate() {
            vm.editType = ($state.current.name == "dashboard.upsell.view") ? 'upsell' : 'standard';
        }

        $scope.$on('$viewContentLoaded', function() {
            var menuId = "#deal-list-menu";
            if (vm.deal.deal_type == 'upsell') {
                menuId = "#upsell-list-menu";
            }

            var element = $(menuId);
            if (!element.parent().hasClass("open")) {
                element.click();
            }
        });

        function openEditImageModal(elem) {
            $(elem).parents('.image-view-container').find('.image-modal').modal('show');
        }

        function openEditVideoModal(elem) {
            $(elem).parents('.video-view-container').find('.video-modal').modal('show');
        }

        function hasImages() {
          return angular.isDefined(vm.images) && vm.images.length > 0;
        }

        function hasVideos() {
          return angular.isDefined(vm.videos) && vm.videos.length > 0;
        }

        function requestApproval(){
            vm.isDone = false;

            // image validation for published status
            if (!hasImages()) {
                bootbox.alert({
                    title: "No uploaded images!",
                    message: "Please upload images to publish the deal."
                });
                vm.isDone = true;
                return false;
            }

            if (vm.activeDiscount == null) {
                bootbox.alert({
                    title: "No active discount!",
                    message: "Please create an active discount to publish the deal."
                });
                vm.isDone = true;
                return false;
            }

            DealService.requestApproval(vm.dealId).then(function(resp) {
                vm.response['success'] = "alert-success";
                vm.response['alert'] = "Success!";
                vm.response['msg'] = "The deal is requested approval.";
                vm.isDone = true;

            }).catch(function(err) {
                vm.response['success'] = "alert-danger";
                vm.response['alert'] = "Error!";
                vm.response['msg'] = "Failed to requset deal approval.";
                vm.response['error_arr'] = err.data == null ? '' : err.data.errors;
                vm.isDone = true;
            });
        }

        function publish(){
            vm.isDone = false;

            DealService.publish(vm.dealId).then(function(resp) {
                vm.response['success'] = "alert-success";
                vm.response['alert'] = "Success!";
                vm.response['msg'] = "The deal is published.";
                vm.isDone = true;

            }).catch(function(err) {
                vm.response['success'] = "alert-danger";
                vm.response['alert'] = "Error!";
                vm.response['msg'] = "Failed to publish deal.";
                vm.response['error_arr'] = err.data == null ? '' : err.data.errors;
                vm.isDone = true;
            });
        }
    }
})();
