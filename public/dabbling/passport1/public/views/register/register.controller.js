(function()
{
    angular
        .module("PassportApp")
        .controller("RegisterCtrl", RegisterCtrl);
        
    function RegisterCtrl($scope, $location, $rootScope, UserService)
    {
        $scope.register = register;

        function register(user)
        {
            if(user.password != user.password2 || !user.password || !user.password2)
            {
                $scope.error = "Your passwords don't match";
                console.log("Reg ctrl error: "+$scope.error);
            }
            else
            {
                UserService
                    .register(user)
                    .then(
                        function(response) {
                            var user = response.data;
                            console.log("Reg ctrl user: "+user);
                            if(user != null) {
                                $rootScope.currentUser = user;
                                console.log("Reg ctrl user not null: "+$rootScope.currentUser);
                                $location.url("/profile");
                            }
                        },
                        function(err) {
                            $scope.error = err;
                            console.log("Reg ctrl user error: "+$scope.error);
                        }
                    );
            }
        }
    }
})();
