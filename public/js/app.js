'use strict'

var app = angular.module('basicEcomm', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: './views/home.html',
        controller: 'mainCtrl'
    })
    .when('/admin', {
        templateUrl: './views/admin.html',
        controller: 'adminCtrl'
    })
    .otherwise ({
        redirectTo: '/'
    })
});
