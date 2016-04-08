(function() {
    "use strict";
    angular
        .module("FormBuilderApp")
        .controller("RegisterController", RegisterController);

    function RegisterController($scope, $rootScope, $location, UserService)
    {
        var model = this;
        $scope.message = null;
        model.register = register;

        function register(user) {

            $scope.message = null;

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
            var checkuser = model.findUserByCredentials(user.username, user.password);
            if (checkuser != null) {
                $scope.message = "User already exists";
                return;
            }

            UserService
                .register(user)
                .then(
                    function(response) {
                        var user = response.data;
                        if(user != null) {
                            $rootScope.currentUser = user;
                            $location.url("/profile");
                        }
                    },
                    function(err) {
                        $scope.error = err;
                    }
                );
        }
    }

})();