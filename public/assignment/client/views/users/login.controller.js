(function() {
    "use strict";
    angular
        .module("FormBuilderApp")
        .controller("LoginController", LoginController);

    function LoginController($rootScope, $scope, UserService, $location)
    {
        $rootScope.isUserLoggedIn = false;
        $scope.login = login;

        var model = this;

        function login (user) {
            var user = model.findUserByCredentials({username: user.username, password: user.password});
            if (user) {
                $rootScope.currentUser = user;
                $location.url("/profile");
            }
        }
    }

})();