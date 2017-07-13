'use strict';

angular
    .module('chartApp')
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'main/main.html',
            controller : "chartCtrl",
            controllerAs: 'vm',
            bindings: {
              dane: '='
            }
        });
    }]);
