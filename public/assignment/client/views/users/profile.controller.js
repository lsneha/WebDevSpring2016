(function() {
    "use strict";
    angular
        .module("FormBuilderApp")
        .controller("ProfileController", ProfileController);

    function ProfileController($scope, $rootScope, $location, UserService)
    {
        //$rootScope.isUserLoggedIn = true;

        /*$rootScope.currentUser = model.getCurrentUser();
        if (!$rootScope.currentUser) {
            $location.url("/login");
        }*/

        $scope.update = update;

        $scope.error = null;
        $scope.message = null;
        console.log("inside profile controller...");

        function update(user) {

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
            console.log(user.username);
            console.log(user.password);
            console.log(user.firstName);
            console.log(user.lastName);
            console.log(user.email);
            console.log(user.roles);
            console.log(user._id);
            UserService
                .updateUser(user.username, user)
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