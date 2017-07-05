(function() {
    'use strict';

    angular.module('app.brands')
        .controller('BrandEditController', BrandEditController);

    BrandEditController.$inject = ['BrandService', '$stateParams', '$scope', 'prepSelBrand', 'HelperService', '$state', '$log'];

    /* @ngInject */
    function BrandEditController(BrandService, $stateParams, $scope, prepSelBrand, HelperService, $state, $log) {
        var vm = this;

        vm.mode = "Edit";
        vm.response = {};
        vm.brandId = $stateParams.id;
        vm.selectedBrand = prepSelBrand;
        vm.form = vm.selectedBrand;
        vm.isDone = true;

        //Logo
        //vm.form.logo.description = vm.form.logo_image
        vm.clearImage = clearImage;
        vm.previewImage = previewImage;

        vm.prevState = HelperService.getPrevState();
        vm.submitAction = editPost;

        activate();

        ///////////////////

        function activate() {
            $log.log(vm.form);
            //console.log('hey');
            // BrandService.find(vm.brandId).then(function(data) {
            //     vm.selectedBrand = data;
            //     vm.form = vm.selectedBrand;
            // });

            // vm.$watch('form.logo', function() {
            //     $log.log(vm.form.logo);
            // });
        }

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

        function editPost() {
            vm.isDone = false;

            BrandService.edit(vm.brandId, vm.form).then(function() {
                vm.response['success'] = "alert-success";
                vm.response['alert'] = "Success!";
                vm.response['msg'] = "Updated brand: " + vm.form.name;
                vm.isDone = true;

                $scope.$parent.vm.response = vm.response;
                $scope.$parent.vm.search();
                $state.go(vm.prevState);

            }).catch(function(err) {
                $log.log(err);
                vm.response['success'] = "alert-danger";
                vm.response['alert'] = "Error!";
                vm.response['msg'] = "Failed to update Brand.";
                vm.isDone = true;

                HelperService.goToAnchor('msg-info');
            });
        }
    }
})();
