/**
 * Created by sneha_000 on 2/17/2016.
 */
(function(){
    "use strict";
    angular
        .module("FormBuilderApp")
        .controller("MainController", MainController);

    function MainController($scope, $rootScope, $location)
    {
	    var vm = this;
	    vm.$location = $location;
        $rootScope.$location = $location;
        $scope.$location = $location;
        console.log($location.url());
        console.log($rootScope.isUserLoggedIn);
    }

})();