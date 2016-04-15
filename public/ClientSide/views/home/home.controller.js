(function(){
    "use strict";
    angular
        .module("FormBuilderApp")
        .controller("HomeController", HomeController);

    function HomeController($rootScope)
    {
        $rootScope.isUserLoggedIn = false;
        $rootScope.isAdmin = true;
        console.log($rootScope.isUserLoggedIn);
            /*user lookup*/
    }

})();