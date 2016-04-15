(function(){
    "use strict";
    angular
        .module("FormBuilderApp")
        .controller("HeaderController", HeaderController);

    function HeaderController($rootScope, $location) {
        $rootScope.$location = $location;
        //$rootScope.isUserLoggedIn = false;
    }
})();