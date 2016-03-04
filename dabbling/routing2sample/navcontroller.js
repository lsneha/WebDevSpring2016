/**
 * Created by sneha_000 on 3/4/2016.
 */
(function()
{
    angular
        .module("WhiteBoardApp")
        .controller("NavController", navController);

    function navController($scope, $location)
    {
        $scope.$location = $location;
        console.log($location.url());
    }
})();