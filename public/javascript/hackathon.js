var hackathonApp = angular.module('hackathonApp', ['ngRoute', 'angular-loading-bar', 'ngAnimate', 'hackathonControllers', 'hackathonServices']);

hackathonApp.config(['$routeProvider',
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

hackathonLanding.controller('hackathonLandingController', function($scope, $http,$location) {
    $scope.onClickLogin = function(){
        console.log("teste");
        window.location = 'auth/facebook';
    }
});

/*
$.noty.defaults.layout = 'topRight';
$.noty.defaults.theme = "relax";
*/