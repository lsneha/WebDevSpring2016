/**
 * Created by sneha_000 on 3/15/2016.
 */
(function(){
    angular
        .module("WhiteBoardApp")
        .controller("MainController", MainController);

    function MainController($scope, $location) {
        $scope.$location = $location;
    }
})();