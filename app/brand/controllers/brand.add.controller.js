(function() {
    'use strict';

    angular.module('app.brands')
        .controller('BrandAddController', BrandAddController);

    BrandAddController.$inject = ['BrandService', '$scope', 'HelperService', '$state', '$log'];

    /* @ngInject */
    function BrandAddController(BrandService, $scope, HelperService, $state, $log) {
        var vm = this;

        vm.mode = "Add";
        vm.form = {};
        vm.form.facebook = "https://facebook.com/";
        vm.form.twitter = "https://twitter.com/";
        vm.form.instagram = "https://instagram.com/";
        vm.response = {};
        vm.isDone = true;

        //Logo
        vm.clearImage = clearImage;
        vm.previewImage = previewImage;

        vm.prevState = HelperService.getPrevState();
        vm.submitAction = addBrand;

        ///////////////////

        function previewImage(logo, elem, img) {
            var filebase64 = 'data:' + logo.filetype + ';base64,' + logo.base64;

            angular.element(elem).html('<label>' + img + ' Preview:</label><div><img src="' + filebase64 + '" style="width: 250px; height: auto;border: 1px solid #f0f0f0;" /></div>');
        }

        function clearImage(imgModel, container) {
            imgModel.file = null;
            imgModel.file = "";
            imgModel.description = "";
            angular.element(container).html('');
        }

        function addBrand() {
            vm.isDone = false;
            BrandService.add(vm.form).then(function() {
                vm.response['success'] = "alert-success";
                vm.response['alert'] = "Success!";
                vm.response['msg'] = "Added brand: " + vm.form.name;
                vm.isDone = true;

                $scope.$parent.vm.response = vm.response;
                $scope.$parent.vm.search();
                $state.go(vm.prevState);

            }).catch(function(err) {
                vm.response['success'] = "alert-danger";
                vm.response['alert'] = "Error!";
                if (err.length == 0)
                    vm.response['msg'] = "Failed to add new Brand.";
                else
                    vm.response['msg'] = err[0];

                vm.response['error_arr'] = err.data == null ? '' : err.data.errors;
                vm.isDone = true;

                HelperService.goToAnchor('msg-info');
            });
        }
    }
})();
