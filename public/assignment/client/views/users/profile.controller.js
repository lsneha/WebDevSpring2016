(function() {
    "use strict";
    angular
        .module("FormBuilderApp")
        .controller("ProfileController", ProfileController);

    function ProfileController($scope, $rootScope, $location, UserService)
    {
        $rootScope.isUserLoggedIn = true;

        $rootScope.currentUser = model.getCurrentUser();
        if (!$rootScope.currentUser) {
            $location.url("/login");
        }

        $scope.updateUser = updateUser;

        $scope.error = null;
        $scope.message = null;

        function updateUser(user) {

            if(!user.firstName)
                user.firstName = $rootScope.currentUser.firstName;
            if(!user.lastName)
                user.lastName = $rootScope.currentUser.lastName;
            if(!user.username)
                user.username = $rootScope.currentUser.username;
            if(!user.password)
                user.password = $rootScope.currentUser.password;

            /*if(model.updateUser($rootScope.currentUser._id, user))
            {
                $scope.message = "Updated user details";
                model.setCurrentUser($rootScope.currentUser);
            }
            else{
                $scope.message = "Unable to update the user";
            }*/

            console.log("Inside update...");
            UserService
                .updateUser(user._id, user)
                .then(
                    function(response) {
                        $scope.users = response.data;
                        console.log("scope.users: "+$scope.users);
                    },
                    function(err) {
                        console.log("scope.err: "+$scope.error);
                        $scope.error = err;
                    }
                );
        }
    }

})();