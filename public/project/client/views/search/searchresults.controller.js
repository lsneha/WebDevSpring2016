(function() {
    "use strict";
    angular
        .module("ProjectApp")
        .controller("SRController", SRController);

    function SRController($rootScope, UserService, $scope)
    {
        function init() {
            console.log("SR controller initialized...");
        }

        $scope.addMovie = addMovie;

        function addMovie(title) {
            console.log("Inside add movie: "+title);
            UserService
                .addMovie($rootScope.currentUser.username, title)
                .then(function(user){
                    $scope.movies = user;
                    console.log("SR ctrl movies for user after adding: "+user);
                    console.log("SR ctrl movies for user after adding: "+user.movies);
                });
        }

        init();
    }

})();