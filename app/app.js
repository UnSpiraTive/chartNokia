'use strict';

angular
    .module("chartApp", ["chart.js", "ngRoute"])
    .config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');
        $routeProvider.otherwise({redirectTo: '/'});
    }]);
