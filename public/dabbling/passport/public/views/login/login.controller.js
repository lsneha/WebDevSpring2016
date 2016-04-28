(function()
{
    angular
        .module("PassportApp")
        .controller("LoginCtrl", LoginCtrl);
    
    function LoginCtrl($scope, $location, $rootScope, UserService)
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
                        console.log("Login success: ", response.data);
                        $rootScope.currentUser = response.data;
                        console.log('Redirecting...');
                        $location.path("/profile");
                    },
                    function(err) {
                        $scope.error = err;
                    }
                );
        }
    }
  
})();
