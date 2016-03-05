/**
 * Created by sneha_000 on 2/15/2016.
 */
(function(){
    "use strict";
    angular
        .module("FormBuilderApp")
        .controller("ProfileController", ProfileController);

    function ProfileController($rootScope, $scope, $location, UserService)
    {
        $rootScope.isUserLoggedIn = true;
        console.log($rootScope.isUserLoggedIn);

        var vm = this;
        //vm.createUser = UserService.createUser;

        $scope.currentUser = UserService.getCurrentUser();
        if (!$scope.currentUser) {
            $location.url("#/home");
        }

        $scope.updateUser = updateUser;

        function updateUser (user) {

            $scope.currentUser = UserService.updateUser(user);

            if (user) {
                $scope.message = "User updated successfully";
                UserService.setCurrentUser($scope.currentUser);
            } else {
                $scope.message = "Unable to update the user";
            }
        }
    }

})();