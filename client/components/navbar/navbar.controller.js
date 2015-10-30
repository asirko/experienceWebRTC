'use strict';

angular.module('webRtcApp')
  .controller('NavbarCtrl', function ($scope, $location, Auth) {
    $scope.menu = [
      {
        'title': 'Home',
        'link': '/'
      },{
        'title': 'Contact',
        'link': '/contact'
      },{
        'title': 'About us',
        'link': '/aboutUs'
      },{
        'title': 'Chat',
        'link': '/chat'
      }
    ];

    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.logout = function() {
      Auth.logout();
      $location.path('/login');
    };

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });