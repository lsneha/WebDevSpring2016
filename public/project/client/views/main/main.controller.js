(function() {
    "use strict";
    angular
        .module("ProjectApp")
        .controller("MainController", MainController);

    function MainController($scope, $location, UserService)
    {
        function init() {
            $scope.$location = $location;

            var user1 = {"firstName": "Alice", "lastName": "Wonderland", "username": "alice",  "password": "alice", "movies" : ["movie1", "movie2"], roles: ["user"], "email" : "alice@g.com"};

            UserService
                .register(user1)
                .then(
                    function(response) {
                        console.log("alice created");
                    },
                    function(err) {
                        console.log("couldnt create alice");
                    }
                );

            var user2 = {"firstName": "Bob", "lastName": "Marley", "username": "bob",  "password": "bob", "movies" : ["movie1", "movie2"], roles: ["user", "admin"], "email" : "bob@g.com"};

            UserService
                .register(user2)
                .then(
                    function(response) {
                        console.log("bob created");
                    },
                    function(err) {
                        console.log("couldnt create bob");
                    }
                );
        }


        init();
    }

})();