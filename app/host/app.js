/**
 * Created by atruslow on 10/16/14.
 */

var app = angular.module('app', [
    'ngRoute'
]);


app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
        .when('/', {templateUrl: "app/scripts/main/main.html"})
        .when('/login', {templateUrl: "app/scripts/login/login.html", controller: 'loginController'})
        .when('/dashboard', {templateUrl: "app/scripts/dashboard/dashboard.html", controller: 'dashboardController'})
        .otherwise({
            redirectTo: "/"
        });
}]);
