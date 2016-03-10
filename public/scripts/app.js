var app = angular.module('CakeApp', ['ngRoute','mainCtrl','loginCtrl','loginService']);

app.config(['$routeProvider', function($routeProvider){
  $routeProvider.
    when('/',
    {
      templateUrl: 'views/index.html',
      controller: 'mainCtrl'
    }
    )
    .when('/login',
    {
      templateUrl: 'views/login.html',
      controller: 'loginCtrl'
    }
    )
    .otherwise({
      templateUrl: 'views/Error404.html'
    });
}]);

app.run(['$rootScope', '$log', function ($rootScope, $log) {
  $log.debug("hello from app.js");
}]);
