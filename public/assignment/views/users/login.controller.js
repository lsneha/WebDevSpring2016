/**
 * Created by sneha_000 on 2/15/2016.
 */
(function(){
    "use strict";
    angular
        .module("FormBuilderApp")
        .controller("LoginController", LoginController);

    function LoginController($rootScope, $scope, UserService)
    {
        $rootScope.isUserLoggedIn = true;
        console.log($rootScope.isUserLoggedIn);
        /*user lookup*/
    }

})();