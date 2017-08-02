var app = angular.module('myApp');

app.controller('profileCtrl', function($scope, $location, loginService) {

$scope.userDetails = loginService.getProfile();
console.log($scope.userDetails);

//closure for app.controller
});
