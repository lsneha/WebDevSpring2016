(function() {
    "use strict";
    angular
        .module("ProjectApp")
        .controller("AdminController", AdminController);

    function AdminController($rootScope, UserService, $scope)
    {
        function init() {
            console.log("Admin controller initialized...");
        }

        init();

        $scope.users = UserService.findAllUsers();
        console.log("List of users in admin controller: "+$scope.users.length);

        $scope.addUser = addUser;
        $scope.removeUser = removeUser;
        $scope.editUser = editUser;
        $scope.updateUser = updateUser;

        function updateUser(user)
        {
            UserService.updateUser(user);
        }

        function editUser(user)
        {
            $rootScope.currentUser = {
                username: user.username,
                password: user.password,
                firstName: user.firstName,
                lastName: user.lastName,
                roles: user.roles
            };
        }

        function removeUser(userId)
        {
            UserService.deleteUser(userId);
        }

        function addUser(user)
        {
            UserService.createUser(user);
        }
    }

})();