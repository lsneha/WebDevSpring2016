/**
 * Created by sneha_000 on 3/11/2016.
 */
(function(){
    angular
        .module("WhiteBoardApp")
        .controller("AdminController", AdminController);
    function AdminController($scope) {
        $scope.adminHello = "Hello from AdminController"
    }
})();