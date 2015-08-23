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

hackathonControllers.controller("LoadingController", function($scope, $rootScope,$location, $timeout, Users) {

    $(".sandwich").hide();

    Users.getMe().success(function(data) {
        $rootScope.user = data;
        
        $timeout(function(){
            switch($rootScope.user.status){
                case "NEW_USER":
                    $location.path("chooseMap");
                    break;
                case "FINISHED":
                    $location.path("cards");
                    break;
            }
        },2000);
        
    }).error(function(data, status) {
       alert("ERROR! "+ data);
    });
});

hackathonControllers.controller("ChooseMapController", function($scope, $rootScope, $location) {
   
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
                $rootScope.user.interest = marker.title;
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

    $scope.nextStep = function(){
        $location.path("fillLocation");
    }
});

hackathonControllers.controller("FillLocationController", function($scope, $rootScope) {
   $("#map").remove();
   $rootScope.user.house = {
        pictures : []
    }
   $rootScope.user.house.city = "Sao Paulo";
   $rootScope.user.house.state = "SP";

});

hackathonControllers.controller("fillCharacteristicsController", function($scope, $rootScope, Users) {
    $("#map").remove();

    $scope.$on('arquivoSelecionado', function (e, args) {
        $rootScope.user.house.pictures.push(args.arquivo);
        $scope.$digest();
    });

   $scope.saveInformation = function(){
        Users.upload($rootScope.user).success(function(files) {
            $rootScope.user.house.pictures = files;
            Users.saveInformation($rootScope.user).success(function(data) {
                console.log(data);
            }).error(function(data, status) {
                alert("ERROR! "+ data);
            });;
        }).error(function(data, status) {
           alert("ERROR! "+ data);
        });
   }
});

hackathonControllers.controller("CardsController", function($scope, $rootScope, Users) {
    $(".sandwich").show();
    Users.listHouses().success(function(users) {
        $scope.users = users;
    }).error(function(data, status) {
        alert("ERROR! "+ data);
    });
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