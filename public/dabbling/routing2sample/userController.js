/**
 * Created by sneha_000 on 3/4/2016.
 */
(function()
{
    angular
        .module("WhiteBoardApp")
        .controller("UserController", UserController);

    function UserController($scope, UserService)
    {
        $scope.users = UserService.findAllUsers();
    }
})();