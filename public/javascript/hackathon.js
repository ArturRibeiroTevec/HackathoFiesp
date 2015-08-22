var hackathonApp = angular.module('hackathonApp', ['ngRoute', 'angular-loading-bar', 'ngAnimate', 'hackathonControllers', 'hackathonServices']);

hackathonApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/', {
            templateUrl: 'partials/home.html',
            controller: 'HomeController'
        }).
        /*when('/phones/:phoneId', {
          templateUrl: 'partials/phone-detail.html',
          controller: 'PhoneDetailCtrl'
        }).*/
        otherwise({
            redirectTo: '/404'
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

 $(document).ready(function(){
    $(".sandwich").click(function(){
        if ($(".page").hasClass("menu-open")) {
            $(".page").removeClass("menu-open");
        } else {
            $(".page").addClass("menu-open");
        }
    });
 })
