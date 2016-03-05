/**
 * Created by sneha_000 on 2/15/2016.
 */
(function(){
    "use strict";
    angular
        .module("FormBuilderApp")
        .controller("ProfileController", ProfileController);

    function ProfileController($rootScope, $routeParams, $location, UserService)
    {
        $rootScope.isUserLoggedIn = true;
        console.log($rootScope.isUserLoggedIn);

        var vm = this;
        vm.createUser = createUser;
    }

})();