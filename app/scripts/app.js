'use strict';

/**
 * @ngdoc overview
 * @name doorMonitorApp
 * @description
 * # doorMonitorApp
 *
 * Main module of the application.
 */
angular
  .module('doorMonitorApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
