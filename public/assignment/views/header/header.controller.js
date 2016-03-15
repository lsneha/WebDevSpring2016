/**
 * Created by sneha_000 on 2/15/2016.
 */
(function(){
    "use strict";
    angular
        .module("FormBuilderApp")
        .controller("HeaderController", HeaderController);

    function HeaderController($scope, $location) {
        $scope.$location = $location;
        $scope.isUserLoggedIn = false;
        console.log($rootScope.isUserLoggedIn);
    }
})();