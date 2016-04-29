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
            UserService.addMovie($rootScope.currentUser.username, title);
        }

        init();
    }

})();