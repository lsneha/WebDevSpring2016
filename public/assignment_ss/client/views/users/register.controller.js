/**
 * Created by sneha_000 on 2/15/2016.
 */
(function(){
    "use strict";
    angular
        .module("FormBuilderApp")
        .controller("RegisterController", RegisterController);

    function RegisterController($scope, $location, UserService)
    {
        var rc = this;
        rc.message = null;
        rc.register = register;


        function register(user) {

            rc.message = null;

            if (user === null) {
                rc.message = "Please fill in the compulsory fields";
                return;
            }
            if (!user.username) {
                rc.message = "Please provide a username";
                return;
            }
            if (!user.password || !user.password2) {
                rc.message = "Please provide a password";
                return;
            }
            if (user.password != user.password2) {
                rc.message = "Passwords do not match";
                return;
            }
            var checkuser = UserService.findUserByCredentials(user.username, user.password);
            if (checkuser != null) {
                rc.message = "User already exists";
                return;
            }

            UserService
                .createUser(user)
                .then(function (response) {
                    if (response.data != null) {
                        UserService.setCurrentUser(response.data);
                        $location.url("/profile")
                    }
                });
        }
    }

})();