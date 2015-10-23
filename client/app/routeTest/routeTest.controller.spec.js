'use strict';

describe('Controller: RouteTestCtrl', function () {

  // load the controller's module
  beforeEach(module('webRtcApp'));

  var RouteTestCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RouteTestCtrl = $controller('RouteTestCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
