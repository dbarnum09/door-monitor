'use strict';

/**
 * @ngdoc function
 * @name doorMonitorApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the doorMonitorApp
 */
angular.module('doorMonitorApp')
  .controller('MainCtrl', function ($scope,$http,$log,$interval) {

    $scope.chartConfig = {
      options: {
        chart: {
          type: 'gauge',
          plotBorderWidth: 1,
          plotBackgroundColor: {
            linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
            stops: [
              [0, '#FFF4C6'],
              [0.3, '#FFFFFF'],
              [1, '#FFF4C6']
            ]
          },
          plotBackgroundImage: null,
          height: 200
        },
        pane: [{
          startAngle: -45,
          endAngle: 45,
          background: null,
          center: ['25%', '145%'],
          size: 300
        }, {
          startAngle: -45,
          endAngle: 45,
          background: null,
          center: ['75%', '145%'],
          size: 300
        }],
        plotOptions: {
          gauge: {
            dataLabels: {
              enabled: false
            },
            dial: {
              radius: '100%'
            }
          }
        }
      },
      series: [{
        data: [-20],
        yAxis: 0
      },
        {
        data: [-20],
        yAxis: 1
      }
      ],
      title: {
        text: 'VU meter'
      },

      yAxis: [{
        min: -20,
        max: 6,
        minorTickPosition: 'outside',
        tickPosition: 'outside',
        labels: {
          rotation: 'auto',
          distance: 20
        },
        plotBands: [{
          from: 0,
          to: 6,
          color: '#C02316',
          innerRadius: '100%',
          outerRadius: '105%'
        }],
        pane: 0,
        title: {
          text: 'VU<br/><span style="font-size:8px">Channel A</span>',
          y: -40
        }
      }, {
        min: -20,
        max: 6,
        minorTickPosition: 'outside',
        tickPosition: 'outside',
        labels: {
          rotation: 'auto',
          distance: 20
        },
        plotBands: [{
          from: 0,
          to: 6,
          color: '#C02316',
          innerRadius: '100%',
          outerRadius: '105%'
        }],
        pane: 1,
        title: {
          text: 'VU<br/><span style="font-size:8px">Channel B</span>',
          y: -40
        }
      }]
    };
    var stop = $interval(function(){
    var left = $scope.chartConfig.series[0].data[0],
      right = $scope.chartConfig.series[1].data[0],
      leftVal,
      rightVal,
      inc = (Math.random() - 0.5) * 3;

    leftVal =  left + inc;
    rightVal = leftVal + inc / 3;
    if (leftVal < -20 || leftVal > 6) {
      leftVal = left - inc;
    }
    if (rightVal < -20 || rightVal > 6) {
      rightVal = leftVal;
    }
        $scope.chartConfig.series[0].data[0] = leftVal;
        $scope.chartConfig.series[1].data[0] = rightVal;
      }
      ,500);


    //http://10.0.1.151/digital/6
  //  $http.get('http://10.0.1.151/digital/6').success(function(data) {
  //    $log.log('data' + data);
  //
  //  }).error(function(error) {
  //    $log.error('Error: ' + JSON.stringify(error));
  //  });
  });
