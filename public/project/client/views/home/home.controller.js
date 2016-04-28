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
            $scope.userMovies = UserService.getMoviesForUser(username);
        }

        init();
    }

})();