var hackathonApp = angular.module('hackathonApp', ['ngRoute', 'angular-loading-bar', 'ngAnimate', 'hackathonControllers', 'hackathonServices']);

hackathonApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/chooseMap', {
            templateUrl: 'partials/chooseMap.html',
            controller: 'ChooseMapController'
        }).
        when('/fillLocation', {
            templateUrl: 'partials/fillLocation.html',
            controller: 'FillLocationController'
        }).
        when('/fillCharacteristics', {
            templateUrl: 'partials/fillCharacteristics.html',
            controller: 'fillCharacteristicsController'
        }).
        when('/loading', {
            templateUrl: 'partials/loading.html',
            controller: 'LoadingController'
        }).
        when('/cards', {
            templateUrl: 'partials/cards.html',
            controller: 'CardsController'
        }).
        when('/cardsPreference', {
            templateUrl: 'partials/cardsPreference.html',
            controller: 'CardsController'
        }).
         when('/myHouse', {
            templateUrl: 'partials/myHouse.html',
            controller: 'MyHouse'
        }).
        /*when('/phones/:phoneId', {
          templateUrl: 'partials/phone-detail.html',
          controller: 'PhoneDetailCtrl'
        }).*/
        otherwise({
            redirectTo: '/loading'
        });
    }
]);

hackathonApp.directive('tevecUploadArquivo', function () {
    return {
        scope: true,        //create a new scope
        link: function (scope, el, attrs) {
            el.bind('change', function (event) {
                var arquivos = event.target.files;
                //iterate files since 'multiple' may be specified on the element
                for (var i = 0; i < arquivos.length; i++) {
                    //emit event upward
                    scope.$emit("arquivoSelecionado", { arquivo: arquivos[i] });
                }
            });
        }
    };
});

var hackathonLanding = angular.module('hackathonLanding', ['angular-loading-bar', 'ngAnimate', 'hackathonServices']);

hackathonLanding.controller('hackathonLandingController', function($scope, $http) {
    $scope.onClickLogin = function(){
        console.log("teste");
        window.location = 'auth/facebook';
    }
});

//$.noty.defaults.layout = 'topRight';
//$.noty.defaults.theme = "relax";


 $(document).ready(function(){
    $(".sandwich").click(function(){
        if ($(".page").hasClass("menu-open")) {
            $(".page").removeClass("menu-open");
        } else {
            $(".page").addClass("menu-open");
        }
    });
 });
