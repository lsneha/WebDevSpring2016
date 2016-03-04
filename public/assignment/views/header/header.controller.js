/**
 * Created by sneha_000 on 2/15/2016.
 */
(function(){
    angular
        .module("FormBuilderApp")
        .controller("HeaderController", HeaderController);

    function HeaderController($scope) {
        $scope.adminHello = "Hello from HeaderController"
    }
})();