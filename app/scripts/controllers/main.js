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
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];


  //http://10.0.1.151/digital/6
    $http.get('http://10.0.1.151/digital/6').success(function(data) {
      $log.log('data' + data);

    }).error(function(error) {
      $log.error('Error: ' + JSON.stringify(error));
    });
  });
