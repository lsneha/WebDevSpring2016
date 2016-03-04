/**
 * Created by sneha_000 on 3/3/2016.
 */
(function(){
    angular
        .module("FormBuilderApp")
        .controller("SidebarController", SidebarController);

    function SidebarController($scope) {
        $scope.adminHello = "Hello from SidebarController"
    }
})();