/**
 * Created by sneha_000 on 2/17/2016.
 */
(function(){
    angular
        .module("FormBuilderApp")
        .controller("MainController", MainController);

    function MainController($scope) {
        $scope.homeHello = "Hello from HomeController"
    }

})();