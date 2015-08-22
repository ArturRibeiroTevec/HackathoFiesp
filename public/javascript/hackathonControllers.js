var hackathonControllers = angular.module('hackathonControllers', []);

var cities = [
    {
        city : 'Morumbi',
        desc : '',
        lat : -23.6001688,
        long : -46.717078
    },
    {
        city : 'Paulista',
        desc : '',
        lat : -23.5552228,
        long : -46.6620675
    },
    {
        city : 'Butanta',
        desc : '',
        lat : -23.560568, 
        long : -46.727423
    },
    {
        city : 'Tucuruvi',
        desc : '',
        lat : -23.473823, 
        long : -46.611082
    },
    {
        city : 'Santana',
        desc : '',
        lat : -23.497009, 
        long : -46.628798
    }
];



hackathonControllers.controller("HomeController", function($scope, $rootScope, Users) {
    Users.getMe().success(function(data) {
        $rootScope.user = data;
        console.log($rootScope.user)
    }).error(function(data, status) {
       alert("ERROR! "+ data);
    });

    var mapOptions = {
        zoom: 11,
        center: new google.maps.LatLng(-23.55,-46.68),
        mapTypeId: google.maps.MapTypeId.TERRAIN
    }

    $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

    $scope.markers = [];
    
    var infoWindow = new google.maps.InfoWindow();
    
    var createMarker = function (info){
        
        var marker = new google.maps.Marker({
            map: $scope.map,
            position: new google.maps.LatLng(info.lat, info.long),
            title: info.city
        });
        marker.content = '<div class="infoWindowContent">' + info.desc + '</div>';
        
        google.maps.event.addListener(marker, 'click', function(){
            $scope.$apply(function () {
                $scope.marker = marker;
            });
            /*infoWindow.setContent('<h2>' + marker.title + '</h2>' + marker.content);
            infoWindow.open($scope.map, marker);*/
        });
        
        $scope.markers.push(marker);
        
    }  
    
    for (i = 0; i < cities.length; i++){
        createMarker(cities[i]);
    }

    $scope.openInfoWindow = function(e, selectedMarker){
        e.preventDefault();
        google.maps.event.trigger(selectedMarker, 'click');
    }


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
});*/