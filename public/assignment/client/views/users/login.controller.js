(function() {
    "use strict";
    angular
        .module("FormBuilderApp")
        .controller("LoginController", LoginController);

    function LoginController($rootScope, $scope, UserService, $location)
    {
        $scope.login = login;

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
    }

})();