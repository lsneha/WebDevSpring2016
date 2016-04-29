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
           $scope.movies = getMoviesForUser();
           console.log($scope.movies);
       }

        function getMoviesForUser() {
            console.log("inside get movies for user"+$rootScope.currentUser.username);
            return UserService.getMoviesForUser($rootScope.currentUser.username);
        }

        init();
    }

})();