var hackathonServices = angular.module('hackathonServices', ['ngResource']);

hackathonServices.factory('User', function($http) {
    return {
        getMe: function() {
            return $http.get("/services/users/me");
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