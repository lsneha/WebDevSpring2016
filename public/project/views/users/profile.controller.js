/**
 * Created by sneha_000 on 2/15/2016.
 */
(function(){
    "use strict";
    angular
        .module("MyProjectApp")
        .controller("ProfileController", ProfileController);

    function ProfileController($scope)
    {
        $scope.isUserLoggedIn = true;
        console.log($scope.isUserLoggedIn);
    }

})();