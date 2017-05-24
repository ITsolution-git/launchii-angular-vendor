(function() {
    'use strict';

    angular.module('app.brands')
        .controller('BrandController', BrandController);

    BrandController.$inject = ['BrandService', 'brandPrepService', '$log'];

    /* @ngInject */
    function BrandController(BrandService, brandPrepService, $log) {
        var vm = this;

        vm.prepBrands = brandPrepService;
        vm.brands = vm.prepBrands.brands;
        vm.getBrands = getBrands;
        vm.hasDeleted = false;
        vm.response = {};
        vm.deleteBrand = deleteBrand;
        vm.isDone = false;
        vm.search = search;
        vm.searchItem = '';
        vm.isLoading = false;
        vm.isSearch = false;
        vm.clearSearch = clearSearch;
        vm.isBrandEmpty = BrandService.isEmpty();

        //activate();

        ////////////////

        function activate() {
            return getBrands();
        }

        function clearSearch() {
            vm.searchItem = '';
            search();
        }

        function search() {
            vm.isLoading = true;

            if (vm.searchItem.trim().length > 0) {
                vm.isSearch = true;
            } else {
                vm.isSearch = false;
            }

            BrandService.search(vm.searchItem).then(function(resp) {
                vm.brands = resp;
                vm.isLoading = false;
            }).catch(function(err) {
                $log.log(err);
            });
        }

        function getBrands() {
            return BrandService.getAll().then(function(data) {
                vm.prepBrands = data;
                vm.brands = vm.prepBrands.brands;
                vm.isBrandEmpty = BrandService.isEmpty();
                return vm.brands;
            });
        }

        function deleteBrand(element, brand) {
            bootbox.confirm({
                title: "Confirm Delete",
                message: "Are you sure you want to delete brand: <b>" + brand.name + "</b>?",
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
                        Ladda.create(element).start();
                        doDelete(brand);
                    }
                }
            });

        }

        function doDelete(brand) {
            BrandService.delete(brand.uid).then(function(resp) {
                vm.hasDeleted = true;
                vm.response['success'] = "alert-success";
                vm.response['alert'] = "Success!";
                vm.response['msg'] = "Deleted brand: " + brand.name;
                getBrands();
                vm.hasAdded = true;
                vm.isDone = true;
            }).catch(function() {
                vm.response['success'] = "alert-danger";
                vm.response['alert'] = "Error!";
                vm.response['msg'] = "Failed to delete brand: " + brand.name;
                vm.hasAdded = true;
                vm.isDone = true;
            });
        }
    }
})();