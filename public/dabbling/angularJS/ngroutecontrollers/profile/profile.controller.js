/**
 * Created by sneha_000 on 3/11/2016.
 */
(function(){
    angular
        .module("WhiteBoardApp")
        .controller("ProfileController", ProfileController);
    function ProfileController($scope) {
        $scope.profileHello = "Hello from ProfileController"
    }
})();