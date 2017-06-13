(function() {
    'use strict';

    angular.module('app')
        .controller('DashboardController', DashboardController);

    DashboardController.$inject = ['$scope', '$state', '$rootScope', 'DashboardService', 'HelperService', '$log'];

    /* @ngInject */
    function DashboardController($scope, $state, $rootScope, DashboardService, HelperService, $log) {
        var vm = this;

        vm.errorMessage = null;
        vm.basicReport = null;
        vm.basicChartData = null;
        vm.trafficReport = null;
        vm.trafficChartData = null;
        vm.eventsReport = null;
        vm.dealViewsCountryReport = null;
        vm.firstLoadingFinished = false;

        vm.dateRangeString = '';

        activate();

        //////////////

        function activate() {
            vm.page_title = "Dashboard";

            requestGADateRange();

            requestBasicReport();
            requestTrafficReport();
            requestEventsReport();
            requestDealViewsCountryReport();
        }

        $scope.$on('$viewContentLoaded', function() {
            if ($state.current.name == 'dashboard') {
                if (vm.basicChartData)
                    buildBasicChart();
                if (vm.trafficChartData)
                    buildTrafficChart();
            }
        });

        function requestGADateRange() {
            DashboardService.getGADateRange().then(function(resp) {
                if (angular.isDefined(resp.result)) {
                    vm.dateRangeString = resp.result;
                } else {
                    vm.dateRangeString = '';
                }
            }).catch(function(err) {
                $log.log(err);
                vm.dateRangeString = '';
            });
        }

        function requestBasicReport() {
            var vendorId = $rootScope.currentUser.uid;
            DashboardService.getGAReportingData(vendorId, 'basic').then(function(reports) {

                if (reports.error) {
                    vm.errorMessage = reports.error ? reports.error : 'Something went wrong.';
                    return;
                }

                if (!reports.reports || !reports.reports[0].data.rows) {
                    vm.basicReport = null;
                    vm.firstLoadingFinished = true;
                    return;
                }

                vm.basicReport = reports.reports[0];
                vm.firstLoadingFinished = true;

                // Build the chart data
                vm.basicChartData = [];
                for (var i = 0; i < vm.basicReport.data.rows.length; i ++) {
                    var chartItem = {
                        dimension: HelperService.changeGADateFormat(vm.basicReport.data.rows[i].dimensions[0]),
                        sessionsValue: vm.basicReport.data.rows[i].metrics[0].values[1],
                        completions2Value: vm.basicReport.data.rows[i].metrics[0].values[4]
                    }
                    vm.basicChartData.push(chartItem);
                }

                buildBasicChart();

            }).catch(function(err) {
                $log.log(err);
                vm.errorMessage = 'Something went wrong.'
            });
        }

        function buildBasicChart() {
            // configure chart
            var chart = new AmCharts.AmSerialChart();
            chart.dataProvider = vm.basicChartData;
            chart.categoryField = "dimension";
            var legend = new AmCharts.AmLegend();
            legend.useGraphSettings = true;
            chart.addLegend(legend);

            // configure category
            var categoryAxis = chart.categoryAxis;
            categoryAxis.labelRotation = 90;

            // configure session graph
            var graph1 = new AmCharts.AmGraph();
            graph1.valueField = "sessionsValue";
            graph1.type = "line";
            graph1.bullet = "round";
            graph1.lineColor = "blue";
            graph1.balloonText = "[[category]]: <b>[[value]]</b>";
            graph1.title = "Sessions";
            chart.addGraph(graph1);

            // configure shop now graph
            var graph2 = new AmCharts.AmGraph();
            graph2.valueField = "completions2Value";
            graph2.type = "line";
            graph2.bullet = "diamond";
            graph2.lineColor = "red";
            graph2.balloonText = "[[category]]: <b>[[value]]</b>";
            graph2.title = "Shop - Now Clicks";
            chart.addGraph(graph2);

            chart.write("basic-report-chart");
        }

        function requestTrafficReport() {
            var vendorId = $rootScope.currentUser.uid;
            DashboardService.getGAReportingData(vendorId, 'traffic').then(function(reports) {

                if (reports.error) {
                    vm.errorMessage = reports.error ? reports.error : 'Something went wrong.';
                    return;
                }

                if (!reports.reports || !reports.reports[0].data.rows) {
                    vm.trafficReport = null;
                    vm.firstLoadingFinished = true;
                    return;
                }

                vm.trafficReport = reports.reports[0];
                vm.firstLoadingFinished = true;

                // Build the chart data
                vm.trafficChartData = [];
                for (var i = 0; i < vm.trafficReport.data.rows.length; i ++) {
                    var chartItem = {
                        dimension: vm.trafficReport.data.rows[i].dimensions[0],
                        value: vm.trafficReport.data.rows[i].metrics[0].values[0]
                    }
                    vm.trafficChartData.push(chartItem);
                }

                buildTrafficChart();

            }).catch(function(err) {
                $log.log(err);
                vm.errorMessage = 'Something went wrong.'
            });
        }

        function buildTrafficChart() {
            // configure chart
            var chart = new AmCharts.AmPieChart();
            chart.dataProvider = vm.trafficChartData;
            chart.titleField = "dimension";
            chart.valueField = "value";
            chart.depth3D = 20;
            chart.angle = 30;

            chart.write("traffic-report-chart");
        }

        function requestEventsReport() {
            var vendorId = $rootScope.currentUser.uid;
            DashboardService.getGAReportingData(vendorId, 'events').then(function(reports) {

                if (reports.error) {
                    vm.errorMessage = reports.error ? reports.error : 'Something went wrong.';
                    return;
                }

                if (!reports.reports || !reports.reports[0].data.rows) {
                    vm.eventsReport = null;
                    vm.firstLoadingFinished = true;
                    return;
                }

                vm.eventsReport = reports.reports[0];
                vm.firstLoadingFinished = true;

            }).catch(function(err) {
                $log.log(err);
                vm.errorMessage = 'Something went wrong.'
            });
        }

        function requestDealViewsCountryReport() {
            var vendorId = $rootScope.currentUser.uid;
            DashboardService.getGAReportingData(vendorId, 'deal-views-country').then(function(reports) {

                if (reports.error) {
                    vm.errorMessage = reports.error ? reports.error : 'Something went wrong.';
                    return;
                }

                if (!reports.reports || !reports.reports[0].data.rows) {
                    vm.dealViewsCountryReport = null;
                    vm.firstLoadingFinished = true;
                    return;
                }

                vm.dealViewsCountryReport = reports.reports[0];
                vm.firstLoadingFinished = true;

            }).catch(function(err) {
                $log.log(err);
                vm.errorMessage = 'Something went wrong.'
            });
        }
    }
})();
