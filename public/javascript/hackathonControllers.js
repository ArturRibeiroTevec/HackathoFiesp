var hackathonControllers = angular.module('hackathonControllers', []);

hackathonControllers.controller("HomeController", function($scope, $rootScope) {
   
});

/*
hackathonControllers.controller("SideMenuController", function($scope, $rootScope,$routeParams, Topics) {

    $rootScope.topics = [];

    Topics.list().success(function(data) {
        $rootScope.topics = data;
    }).error(function(data, status) {});

    $scope.iconFor = function(topic) {
        var icon = "";
        switch (topic.uri) {
            case "java":
                icon = "coffee";
                break;
            case "stuffs":
                icon = "flask";
                break;
            case "reflexions":
                icon = "comment-o";
                break;
            case "arduino":
                icon = "gamepad";
                break;
            default:
                icon = "code";
                break;
        }
        return icon;
    }

    $scope.isActive = function(topic){
    	return $routeParams.topic == topic.uri || $routeParams.topic == topic._id;
    }
});*/