/**
 * Created by sneha_000 on 2/28/2016.
 */
(function(){
    "use strict";
    angular
        .module("MyProjectApp", ["ngRoute"])
        .controller("MainController", function($scope, $location) {
            $scope.isUserLoggedIn = false;
            $scope.$location = $location;
        })

})();