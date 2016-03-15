/**
 * Created by sneha_000 on 2/15/2016.
 */
(function(){
    "use strict";
    angular
        .module("FormBuilderApp")
        .controller("LoginController", LoginController);

    function LoginController($scope, UserService, $location)
    {
        $scope.isUserLoggedIn = false;
        $scope.login = login;

        function login (user) {
            var user = UserService.findUserByCredentials({username: user.username, password: user.password});
            if (user) {
                $scope.currentUser = user;
                UserService.setCurrentUser(user);
                $location.url("/profile");
            }
        }
    }

})();