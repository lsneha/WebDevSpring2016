/**
 * Created by sneha_000 on 3/15/2016.
 */
(function()
{
    angular
        .module("WhiteBoardApp")
        .controller("courseOverview.controller", courseOverviewController);

    function courseOverviewController($scope)
    {
        $scope.hello = "Hello";
    }
})();