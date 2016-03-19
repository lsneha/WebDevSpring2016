/**
 * Created by sneha_000 on 2/15/2016.
 */
(function(){
    "use strict";
    angular
        .module("FormBuilderApp")
        .controller("HeaderController", HeaderController);

    function HeaderController($scope, $location, UserService) {
        $scope.$location = $location;
        $scope.isUserLoggedIn = false;

        function logout() {
            UserService.setCurrentUser(null);
            $location.url("/home");
        }
    }

})();