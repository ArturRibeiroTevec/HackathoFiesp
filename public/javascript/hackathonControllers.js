var hackathonControllers = angular.module('hackathonControllers', []);


hackathonControllers.controller("HomeController", function($scope, $rootScope) {
    
});
   

/*hackathonControllers.controller("TopicsListController", function($scope, $rootScope, $routeParams, Posts) {
	var limit = 15;
	$scope.posts = [];

	$rootScope.topics.forEach(function(topic){
		if($routeParams.topic == topic.uri || $routeParams.topic == topic._id) $scope.topic = topic;
	});

	Posts.list($routeParams.topic,$scope.posts.length,limit).success(function(data) {
        $scope.posts.push(data);
        console.log(data);
    }).error(function(data, status) {});
>>>>>>> 389155101749d7769f0128898cf43b1464c065e6
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
});/*