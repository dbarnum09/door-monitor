'use strict';

/**
 * @ngdoc function
 * @name doorMonitorApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the doorMonitorApp
 */
angular.module('doorMonitorApp')
  .controller('MainCtrl', function ($scope,$http,$log) {
    $scope.chartConfig = {
      options: {
        chart: {
          type: 'areaspline'
        },
        plotOptions: {
          series: {
            stacking: ''
          }
        }
      },
      series: $scope.chartSeries,
      title: {
        text: 'Hello'
      },
      credits: {
        enabled: true
      },
      loading: false,
      size: {}
    };


  //http://10.0.1.151/digital/6
  //  $http.get('http://10.0.1.151/digital/6').success(function(data) {
  //    $log.log('data' + data);
  //
  //  }).error(function(error) {
  //    $log.error('Error: ' + JSON.stringify(error));
  //  });
  });
