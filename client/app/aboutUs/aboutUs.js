'use strict';

angular.module('webRtcApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('aboutUs', {
        url: '/aboutUs',
        templateUrl: 'app/aboutUs/aboutUs.html',
        controller: 'AboutUsCtrl'
      });
  });