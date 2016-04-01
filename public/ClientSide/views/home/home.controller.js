/**
 * Created by sneha_000 on 2/15/2016.
 */
(function(){
    "use strict";
    angular
        .module("FormBuilderApp")
        .controller("HomeController", HomeController);

    function HomeController($rootScope)
    {
        $rootScope.isUserLoggedIn = false;
        console.log($rootScope.isUserLoggedIn);
            /*user lookup*/
    }

})();