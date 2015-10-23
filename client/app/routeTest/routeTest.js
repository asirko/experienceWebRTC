'use strict';

angular.module('webRtcApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('routeTest', {
        url: '/routeTest',
        templateUrl: 'app/routeTest/routeTest.html',
        controller: 'RouteTestCtrl'
      });
  });