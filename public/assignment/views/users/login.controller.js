/**
 * Created by sneha_000 on 2/15/2016.
 */
(function(){
    "use strict";
    angular
        .module("FormBuilderApp")
        .controller("LoginController", LoginController);

    function LoginController($rootScope, $scope, UserService, $location)
    {
        $rootScope.isUserLoggedIn = false;
        $scope.login = login;

        function login (user) {
            var user = UserService.findUserByCredentials({username: user.username, password: user.password});
            if (user) {
                $rootScope.currentUser = user;
                UserService.setCurrentUser(user);
                $location.url("/profile");
            }
        }
    }

})();