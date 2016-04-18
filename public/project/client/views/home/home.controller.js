(function(){
    "use strict";
    angular
        .module("MyProjectApp")
        .controller("HomeController", HomeController);

    function HomeController($scope, $rootScope, $location, UserService)
    {
        $scope.message = null;
        $scope.register = register;
        $scope.login = login;

        console.log("Inside home controller...");

        function register(user) {
            console.log("Inside register...");
            $scope.message = null;
            if (user == null) {
                $scope.message = "Please fill in the required fields";
                return;
            }
            if (!user.username) {
                $scope.message = "Please provide a username";
                return;
            }
            if (!user.password || !user.password2) {
                $scope.message = "Please provide a password";
                return;
            }
            if (user.password != user.password2) {
                $scope.message = "Passwords must match";
                return;
            }
            var user = UserService.findUserByUsername(user.username);
            if (user != null) {
                $scope.message = "User already exists";
                return;
            }
            var newUser = UserService.createUser($scope.user);
            UserService.setCurrentUser(newUser);
            $location.url("/profile");
        }

        function login(user) {
            console.log("Inside login");
            var user = UserService.findUserByCredentials({username: user.username01, password: user.password01});
            if (user) {
                $rootScope.currentUser = user;
                UserService.setCurrentUser(user);
                $location.url("/profile");
            }
        }
    }

})();