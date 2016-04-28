(function() {
    "use strict";
    angular
        .module("FormBuilderApp")
        .controller("AdminController", AdminController);

    function AdminController($rootScope, UserService, $scope)
    {
        $rootScope.isUserLoggedIn = true;
        $scope.users = UserService.findAllUsers();
        console.log("List of users in admin controller: "+$scope.users.length);

        $scope.addUser = addUser;
        $scope.removeUser = removeUser;
        $scope.editUser = editUser;
        $scope.updateUser = updateUser;

        function updateUser(user)
        {
            UserService.updateUserByAdmin(user);
        }

        function editUser(user)
        {
            $scope.newUser = {
                username: user.username,
                password: user.password,
                firstName: user.firstName,
                lastName: user.lastName,
                roles: user.roles
            };
        }

        function removeUser(userId)
        {
            UserService.deleteUserByAdmin(userId);
        }

        function addUser(user)
        {
            UserService.createUserByAdmin(user);
        }
    }

    $('#mytable').dataTable( {
        "pageLength": 10,
        "aoColumnDefs": [ { "bSortable": false, "aTargets": [ 2, 5, 6 ] }]
    } );

})();