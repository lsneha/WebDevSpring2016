(function(){
    angular
        .module("FormBuilderApp")
        .controller("ProfileController", ['UserService', '$scope', '$rootScope', '$location', function ProfileController(UserService, $scope, $rootScope, $location)
        {
            //is init() not required?
            //why do we use this variable at all?

            $rootScope.isUserLoggedIn = true;
            console.log($rootScope.isUserLoggedIn);

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
        }]);

})();