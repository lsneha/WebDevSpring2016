(function(){
    "use strict";
    angular
        .module("FormBuilderApp")
        .controller("LoginController", LoginController);

    function LoginController($rootScope, $scope, UserService, $location)
    {
        $rootScope.isUserLoggedIn = false;
        console.log($rootScope.isUserLoggedIn);
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