(function() {
    "use strict";
    angular
        .module("FormBuilderApp")
        .controller("HomeController", HomeController);

    function HomeController($rootScope)
    {
        $rootScope.isUserLoggedIn = false;
        /*user lookup*/
    }

})();