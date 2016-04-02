(function() {
    "use strict";
    angular
        .module("FormBuilderApp")
        .controller("HeaderController", HeaderController);

    function HeaderController($scope, $location, $rootScope) {
        $scope.$location = $location;
        $rootScope.isUserLoggedIn = false;

        function logout() {
            $rootScope.currentUser = null;
            $location.url("/home");
        }
    }

})();