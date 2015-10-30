'use strict';

angular.module('webRtcApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('chat', {
        url: '/chat',
        templateUrl: 'app/chat/chat.html',
        controller: 'ChatCtrl'
      });
  });