(function() {
    "use strict";
    angular
        .module("ProjectApp")
        .controller("LoginController", LoginController);

    function LoginController($rootScope, UserService, $scope, $location) {

        function init() {
            console.log("Login controller initialized...");
            $rootScope.currentUser = null;
            $scope.register = register;
            $scope.login = login;
        }

        function login(user)
        {
            if(user)
                UserService
                    .login(user)
                    .then(
                        function(response)
                        {
                            $rootScope.currentUser = response.data;
                            //check this url or path?
                            $location.path("/profile");
                        },
                        function(err) {
                            $scope.error = err;
                        }
                    );
        }

        function register(user) {
            if (user === null) {
                $scope.message = "Please fill in the compulsory fields";
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
                $scope.message = "Passwords do not match";
                return;
            }
            else {
                UserService
                    .register(user)
                    .then(
                        function(response) {
                            var user = response.data;
                            if(user != null) {
                                $rootScope.currentUser = user;
                                console.log("Login ctrl user not null: "+$rootScope.currentUser);
                                $location.url("/profile");
                            }
                        },
                        function(err) {
                            $scope.error = err;
                            console.log("Login ctrl user error: "+$scope.error);
                        }
                    );
            }
        }

        init();
    }
})();