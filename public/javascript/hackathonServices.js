var hackathonServices = angular.module('hackathonServices', ['ngResource']);

hackathonServices.factory('Users', function($http) {
    return {
        getMe: function() {
            return $http.get("/services/users/me");
        },
        upload: function(user) {
            var fd = new FormData();
            for(var i=0; i < user.house.pictures.length; i++){
                fd.append("pic", user.house.pictures[i]);
            }
            
            return $http.post("/services/users/upload",fd, {
                transformRequest: angular.identity,
                headers: {'Content-Type': undefined}
            });
        },
        listHouses : function(){
            return $http.get("/services/users/list");
        },
        saveInformation : function(user){
            return $http.post("/services/users/saveInformation",user);
        }
    }
});

/*hackathonServices.factory('Posts', function($http) {
    return {
        list: function(topic, skip, limit) {
            return $http.get("/services/posts/list", {
                params: {
                    topic: topic,
                    skip: skip,
                    limit: limit
                }
            });
        }
    }
});

hackathonServices.factory('Topics', function($http) {
    return {
        list: function() {
            return $http.get("/services/topics/list");
        }
    }
});

hackathonServices.factory('Auth', function($http) {
    return {
        signIn: function(credentials) {
            return $http.post("/services/user/signin", credentials);
        }
    }
});*/