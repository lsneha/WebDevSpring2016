/**
 * Created by sneha_000 on 2/15/2016.
 */
(function(){
    "use strict";
    angular
        .module("FormBuilderApp")
        .controller("HeaderController", HeaderController);

    function HeaderController($rootScope, $location) {
        $rootScope.$location = $location;
        $rootScope.isUserLoggedIn = false;
    }
})();