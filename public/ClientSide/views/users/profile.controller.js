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
        //is init() not required?
        //why do we use this variable at all?

        $scope.isUserLoggedIn = true;

        var vm = this;
        //vm.createUser = UserService.createUser;

        $rootScope.currentUser = UserService.getCurrentUser();
        if (!$rootScope.currentUser) {
            $location.url("#/home");
        }

        $scope.updateUser = updateUser;

        function updateUser(user) {

            $rootScope.currentUser = UserService.updateUser(user);

            if (user) {
                $scope.message = "User updated successfully";
                UserService.setCurrentUser($rootScope.currentUser);
            } else {
                $scope.message = "Unable to update the user";
            }
        }
    }

})();