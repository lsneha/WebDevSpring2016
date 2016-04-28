(function()
{
    angular
        .module("PassportApp")
        .controller('ProfileCtrl', ProfileCtrl);
    
    function ProfileCtrl($scope, UserService)
    {
        $scope.update = update;

        function update(user)
        {
            console.log("Inside update...");
            UserService
                .updateUser(user._id, user)
                .then(
                    function(response) {
                        $scope.users = response.data;
                        console.log("scope.users: "+$scope.users);
                    },
                    function(err) {
                        console.log("scope.err: "+$scope.error);
                        $scope.error = err;
                    }
                );
        }
    }
})();
