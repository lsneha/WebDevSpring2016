/**
 * Created by sneha_000 on 2/17/2016.
 */
(function(){
    "use strict";
    angular
        .module("FormBuilderApp")
        .controller("MainController", MainController);

    function MainController($scope, $location)
    {
	    var vm = this;
	    vm.$location = $location;
        $scope.$location = $location;
    }

})();