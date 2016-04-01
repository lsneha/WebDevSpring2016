/**
 * Created by sneha_000 on 2/28/2016.
 */
(function(){
    "use strict";
    angular
        .module("FormBuilderApp", ["ngRoute"])
        .controller("MainController", function($rootScope, $scope, $location) {
            $rootScope.isUserLoggedIn = false;
            $scope.$location = $location;
        })

})();