(function(){
    "use strict";
    angular
        .module("FormBuilderApp", ["ngRoute"])
        .controller("MainController", function($rootScope, $scope, $location) {
            $rootScope.isUserLoggedIn = false;
            $scope.$location = $location;
        })

})();