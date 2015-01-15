'use strict';

/**
 * @ngdoc function
 * @name doorMonitorApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the doorMonitorApp
 */
angular.module('doorMonitorApp')
  .controller('MainCtrl', function ($scope, $http, $log, $interval) {
    var LOCKED = 0;
    var UNLOCKED =1;
    $scope.chartConfig = {
      options: {
        exporting: {
          enabled: false
        },
        chart: {
          type: 'gauge',
          plotBorderWidth: 1,
          plotBackgroundColor: {
            linearGradient: {x1: 0, y1: 0, x2: 0, y2: 1},
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
          center: ['50%', '145%'],
          size: 300
        },

        ],
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
        data: [0],
        yAxis: 0
      },

      ],
      title: {
        text: 'Yeah I am a Freak'
      },
      xAxis: [{
        labels: {
          enabled: false
        }
      }
      ],
      yAxis: [{
        min: -1,
        max: 1,
        minorTickPosition: 'outside',
        labels: {
          rotation: 'auto',
          distance: 20
        },
        plotBands: [{
          from: 0,
          to: 1,
          color: '#C02316',
          innerRadius: '100%',
          outerRadius: '105%'
        }
        ],
        pane: 0,
        title: {
          text: '<br/><span style="font-size:8px">Back Door</span>',
          y: -40
        }
      },
        {
          min: -1,
          max: 1,
          minorTickPosition: 'outside',
          tickPosition: 'outside',
          labels: {
            rotation: 'auto',
            distance: 20
          },
          plotBands: [{
            from: 0,
            to: 1,
            color: '#C02316',
            innerRadius: '100%',
            outerRadius: '105%'
          }, {
            from: -1,
            to: 0,
            color: '#008B00',
            innerRadius: '100%',
            outerRadius: '105%'
          }]
        }]
    };
    var stop = $interval(function () {
        $http.get('http://10.0.1.151/digital/6').success(function (data) {
          $log.log('data: ' + data.return_value);

          if (data.return_value === LOCKED) {
            $scope.chartConfig.series[0].data[0] = -0.5;
          }else if (data.return_value === UNLOCKED) {
            $scope.chartConfig.series[0].data[0] = 0.5;
          }

        }).error(function (error) {
          $scope.chartConfig.series[0].data[0] = 10;
          $scope.chartConfig.title.text = "Device Status Unknown";
        });
        //var left = $scope.chartConfig.series[0].data[0],
        //  leftVal,
        //  rightVal,
        //  inc = (Math.random() - 0.5);
        //
        //leftVal = left + inc;
        //rightVal = leftVal + inc / 3;
        //if (leftVal < 0 || leftVal > 0.5) {
        //  leftVal = left - inc;
        //}
        //$scope.chartConfig.series[0].data[0] = leftVal;
      }
      , 10000);


    //http://10.0.1.151/digital/6
    //  $http.get('http://10.0.1.151/digital/6').success(function(data) {
    //    $log.log('data' + data);
    //
    //  }).error(function(error) {
    //    $log.error('Error: ' + JSON.stringify(error));
    //  });
  });
