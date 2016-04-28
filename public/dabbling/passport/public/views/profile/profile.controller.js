(function()
{
    angular
        .module("PassportApp")
        .controller('ProfileCtrl', ProfileCtrl);
    
    function ProfileCtrl($scope, UserService)
    {
        console.log('User in profile: ', $rootScope.currentUser, null, 2);
        $scope.update = update;

        function update(user)
        {
            UserService
                .updateUser(user._id, user)
                .then(
                    function(response) {
                        $scope.users = response.data;
                    },
                    function(err) {
                        $scope.error = err;
                    }
                );
        }
    }
})();
