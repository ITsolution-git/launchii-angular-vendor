(function() {
    'use strict';

    angular.module('app.rocketDeals')
        .controller('RocketDealEditController', RocketDealEditController);

    RocketDealEditController.$inject = [
            'RocketDealService', 
            'UserService', 
            'DealService', 
            'prepSelRocketDeal',
            '$scope', 
            'HelperService', 
            '$state', 
            '$stateParams', 
            '$log', 
            '$filter'];

    /* @ngInject */
    function RocketDealEditController(
            RocketDealService, 
            UserService, 
            DealService, 
            prepSelRocketDeal,
            $scope, 
            HelperService, 
            $state, 
            $stateParams, 
            $log, 
            $filter) {

        var vm = this;

        vm.mode = "Edit";
        vm.form = {};
        vm.rocketDealId = $stateParams.id;
        vm.selectedRocketDeal = prepSelRocketDeal;
        vm.form = vm.selectedRocketDeal;        

        vm.time_ends = '';
        vm.time_starts = '';
        vm.date_ends = '';
        vm.date_starts = '';

        vm.response = {};
        vm.isDone = true;
        vm.deals = [];

        // Vendors
        vm.vendors = [];

        vm.prevState = HelperService.getPrevState();
        vm.submitAction = editRocketDeal;
        vm.updateDateDiff = updateDateDiff;
        vm.isDealEmpty = false;

        ///////////////////

        activate();

        function activate() {            
            // for brand list per vendor
            $scope.$watch('vm.form.vendor_id', function(newValue, oldValue) {
                DealService.vendorDeals(vm.form.vendor_id).then(function(resp) {
                    vm.deals = resp.deals;
                    vm.default = vm.deals[0];
                    vm.isDealEmpty = !(vm.deals.length > 0);
                });
            });
            getVendors();

            var dateStart = HelperService.convertToDateTime(deal.starts_at);
            var dateEnd = HelperService.convertToDateTime(deal.ends_at);

            vm.date_starts = dateStart.date;
            vm.time_starts = dateStart.time;

            vm.date_ends = dateEnd.date;
            vm.time_ends = dateEnd.time;

            // vm.time_ends = vm.time_starts = $filter('date')(new Date(), "hh:mm:ss a");

            $(document).ready(function() {
                ComponentsDateTimePickers.init();
            });            
        }

        function getVendors(){
            UserService.search('', 'vendor', 1, 500).then(function(resp) {
                vm.vendors = resp.users;
            });
        }

        function editRocketDeal() {
            vm.isDone = false;

            vm.form.start_at = HelperService.combineDateTime(vm.date_starts, vm.time_starts);
            vm.form.end_at = HelperService.combineDateTime(vm.date_ends, vm.time_ends);

            vm.form.discount_attributes = {
                value: '10',
                codes_text: 'TESTCODE',
                codes_expire_at: vm.form.end_at
            };

            RocketDealService.add(vm.form).then(function() {
                vm.response['success'] = "alert-success";
                vm.response['alert'] = "Success!";
                vm.response['msg'] = "Added Rocket Deal: " + vm.form.name;
                vm.isDone = true;

                $scope.$parent.vm.isDone = true;
                $scope.$parent.vm.response = vm.response;
                $scope.$parent.vm.getRocketDeals();
                $state.go(vm.prevState);

            }).catch(function(err) {
                vm.response['success'] = "alert-danger";
                vm.response['alert'] = "Error!";
                vm.response['msg'] = "Failed to add new Rocket Deal.";
                vm.response['error_arr'] = err.data == null ? '' : err.data.errors;
                vm.isDone = true;

                $scope.$parent.vm.isDone = true;
                HelperService.goToAnchor('msg-info');
            });
        }

        function updateDateDiff() {            
            vm.date_ends = '';

            var dateNow = new Date();
            var dateComp = new Date(vm.form.date_starts);

            var timeDiff = Math.abs(dateComp.getTime() - dateNow.getTime());
            var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

            $('#ending_date').datepicker({
                autoclose: true
            });

            $('#ending_date').datepicker('setStartDate', '+' + diffDays + 'd');

        }        
    }
})();
