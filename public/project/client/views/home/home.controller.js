(function() {
    "use strict";
    angular
        .module("ProjectApp")
        .controller("HomeController", HomeController);

    function HomeController($rootScope, UserService, $scope)
    {
       function init() {
           console.log("Home controller initialized...");
           $scope.getMoviesForUser = getMoviesForUser;
           //$scope.movies = getMoviesForUser();
           //console.log($scope.movies);
       }

        function getMoviesForUser() {
            console.log("inside get movies for user"+$rootScope.currentUser.username);
            UserService
                .getMoviesForUser($rootScope.currentUser.username)
                .then(function(user){
                    $scope.user = user;
                    console.log("Controller response");
                    console.log(user.movies);
                    $scope.movieList = user.movies;
                    $rootScope.currentUser = user;
                });
            //console.log($scope.user);
        }

        init();
    }

})();