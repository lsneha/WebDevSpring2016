/**
 * Created by sneha_000 on 2/15/2016.
 */
(function(){
    "use strict";
    angular
        .module("FormBuilderApp")
        .controller("ProfileController", ProfileController);

    function ProfileController($scope, $location, UserService)
    {
        $scope.isUserLoggedIn = true;

        $scope.currentUser = UserService.getCurrentUser();
        if (!$scope.currentUser) {
            $location.url("/login");
        }

        $scope.updateUser = updateUser;

        $scope.error = null;
        $scope.message = null;

        function updateUser(user) {

            $scope.error = null;
            $scope.message = null;
            if(!user.firstName)
                user.firstName = $scope.currentUser.firstName;
            if(!user.lastName)
                user.lastName = $scope.currentUser.lastName;
            if(!user.username)
                user.username = $scope.currentUser.username;
            if(!user.password)
                user.password = $scope.currentUser.password;

            if(UserService.updateUser($scope.currentUser._id, user))
            {
                $scope.message = "Updated user details";
                UserService.setCurrentUser($scope.currentUser);
            }
            else{
                $scope.message = "Unable to update the user";
            }
        }
    }

})();