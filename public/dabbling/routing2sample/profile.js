/**
 * Created by sneha_000 on 3/4/2016.
 */
(function()
{
    angular
        .module("WhiteBoardApp")
        .controller("profileController", profileController);

    function profileController($scope, $routeParams, UserService)
    {
        $scope.id = $routeParams.id;
        $scope.user = UserService.findUserById($routeParams.id);
    }
})();