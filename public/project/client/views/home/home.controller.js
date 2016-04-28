(function() {
    "use strict";
    angular
        .module("ProjectApp")
        .controller("HomeController", HomeController);

    function HomeController($rootScope, UserService, $scope)
    {
       function init() {
           console.log("Home controller initialized...");
       }

        $scope.userMovies = null;
        $scope.getMoviesForUser = getMoviesForUser;

        function getMoviesForUser(username) {
            console.log("inside get movies for user"+$rootScope.currentUser.username);
            $scope.userMovies = UserService.getMoviesForUser($rootScope.currentUser.username).userMovies;
            console.log($scope.userMovies);
        }

        init();
    }

})();