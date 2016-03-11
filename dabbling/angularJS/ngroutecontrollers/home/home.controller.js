/**
 * Created by sneha_000 on 3/11/2016.
 */
(function(){
    angular
        .module("WhiteBoardApp")
        .controller("HomeController", HomeController);
    function HomeController($scope) {
        $scope.homeHello = "Hello from HomeController"
    }
})();