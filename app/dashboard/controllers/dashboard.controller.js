(function() {
    'use strict';

    angular.module('app')
        .controller('DashboardController', DashboardController);

    DashboardController.$inject = ['$scope', '$rootScope', 'DashboardService', 'HelperService', '$log'];

    /* @ngInject */
    function DashboardController($scope, $rootScope, DashboardService, HelperService, $log) {
        var vm = this;

        vm.errorMessage = null;
        vm.basicReport = null;
        vm.basicChartData = null;

        activate();

        //////////////

        function activate() {
            vm.page_title = "Dashboard";

            requestBasicReport();
        }

        function requestBasicReport() {
            var vendorId = $rootScope.currentUser.uid;
            DashboardService.getGAReportingData(vendorId, 'basic').then(function(reports) {

                if (reports.error || !reports.reports) {
                    vm.errorMessage = reports.error ? reports.error : 'Something went wrong.';
                    return;
                }
                vm.basicReport = reports.reports[0];

                // Build the chart data
                vm.basicChartData = [];
                for (var i = 0; i < vm.basicReport.data.rows.length; i ++) {
                    var chartItem = {
                        dimension: vm.basicReport.data.rows[i].dimensions[0],
                        sessionsValue: vm.basicReport.data.rows[i].metrics[0].values[1],
                        completions2Value: vm.basicReport.data.rows[i].metrics[0].values[4]
                    }
                    vm.basicChartData.push(chartItem);
                }

                // configure chart
                var chart = new AmCharts.AmSerialChart();
                chart.dataProvider = vm.basicChartData;
                chart.categoryField = "dimension";

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
                chart.addGraph(graph1);
                
                // configure shop now graph
                var graph2 = new AmCharts.AmGraph();
                graph2.valueField = "completions2Value";
                graph2.type = "line";
                graph2.bullet = "diamond";
                graph2.lineColor = "red";
                graph2.balloonText = "[[category]]: <b>[[value]]</b>";
                chart.addGraph(graph2);

                chart.write("basic-report-chart");

            }).catch(function(err) {
                $log.log(err);
                vm.errorMessage = 'Something went wrong.'
            });
        }
    }
})();
