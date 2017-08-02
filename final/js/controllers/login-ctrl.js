var app = angular.module('myApp');

app.controller('loginCtrl', function($scope, $location, loginService) {

  $scope.successfulLogin = function(userDetails) {
    loginService.checkLogin(userDetails);
    $location.path('/profile');
    console.log(userDetails);
  };


//closure for app.controller
});
