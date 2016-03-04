/**
 * Created by sneha_000 on 2/15/2016.
 */
(function(){
    angular
        .module("FormBuilderApp")
        .controller("RegisterController", RegisterController);

    function RegisterController($scope, $location)
    {
        $scope.$location = $location;
        //$scope.users = UserService.createUser();
    }

})();