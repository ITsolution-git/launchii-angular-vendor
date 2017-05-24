(function() {
    'use strict';

    angular.module('app.deals')
        .controller('DealViewController', DealViewController);

    DealViewController.$inject = [
        'DealService',
        '$stateParams',
        '$scope',
        'prepSelDeal',
        'HelperService',
        'prepSelHighlights',
        'prepSelTemplates',
        'prepStandardD',
        'prepEarlyBirdD',
        'prepDealImages',
        '$window'
    ];

    /* @ngInject */
    function DealViewController(
        DealService,
        $stateParams,
        $scope,
        prepSelDeal,
        HelperService,
        prepSelHighlights,
        prepSelTemplates,
        prepStandardD,
        prepEarlyBirdD,
        prepDealImages,
        $window
    ) {

        var vm = this;

        vm.mode = "View";
        vm.response = {};
        vm.dealId = $stateParams.id;
        vm.deal = prepSelDeal;
        vm.isDone = false;

        //Highlights
        vm.highlights = prepSelHighlights;

        //Templates
        vm.templates = prepSelTemplates;

        //Discounts
        vm.standardDiscounts = prepStandardD;
        vm.earlyBirdDiscounts = prepEarlyBirdD;
        vm.hasStandardDiscounts = hasStandardDiscounts;
        vm.hasEarlybirdDiscounts = hasEarlybirdDiscounts;
        vm.hasImages = hasImages;

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

        //activate();

        ///////////////////

        function activate() {
        }

        function openEditImageModal(elem) {
            $(elem).parents('.image-view-container').find('.image-modal').modal('show');
        }

        function hasStandardDiscounts() {
            return angular.isDefined(vm.standardDiscounts) && vm.standardDiscounts.length > 0;
        }

        function hasEarlybirdDiscounts() {
            return angular.isDefined(vm.earlyBirdDiscounts) && vm.earlyBirdDiscounts.length > 0;
        }

        function hasImages() {
          return angular.isDefined(vm.images) && vm.images.length > 0;
        }

        function requestApproval(){
            vm.isDone = false;

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
