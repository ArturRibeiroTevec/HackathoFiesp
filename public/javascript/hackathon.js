var hackathonApp = angular.module('hackathonApp', ['ngRoute', 'angular-loading-bar', 'ngAnimate', 'hackathonControllers', 'hackathonServices']);

hexalotusApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        /*when('/topics/:topic', {
                templateUrl: 'partials/postListPartial.html',
                controller: 'TopicsListController'
            }).
            when('/phones/:phoneId', {
              templateUrl: 'partials/phone-detail.html',
              controller: 'PhoneDetailCtrl'
            }).*/
        otherwise({
            redirectTo: '/'
        });
    }
]);

var hackathonLanding = angular.module('hackathonLanding', ['angular-loading-bar', 'ngAnimate', 'hackathonServices']);

hexalotusAppLogin.controller('hackathonLandingController', function($scope, $http) {
    //
});

$.noty.defaults.layout = 'topRight';
$.noty.defaults.theme = "relax";