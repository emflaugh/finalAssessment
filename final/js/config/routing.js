var app = angular.module('myApp');

app.config(function($routeProvider) {
  $routeProvider
  .when('/login', {
    controller: 'loginCtrl',
    templateUrl: 'partials/login.html'
  })
  .when('/profile', {
    controller: 'profileCtrl',
    templateUrl: 'partials/profile.html'
  })
  .otherwise({ redirectTo:'/login'})


//closure for app.config
});
