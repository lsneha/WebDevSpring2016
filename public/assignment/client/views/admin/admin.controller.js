(function() {
    "use strict";
    angular
        .module("FormBuilderApp")
        .controller("AdminController", AdminController);

    function AdminController($rootScope, UserService, $scope)
    {
        $rootScope.isUserLoggedIn = true;
        $scope.users = [
            {"_id": 123, "firstName": "Alice", "lastName": "Wonderland", "username": "alice",  "password": "alice", "roles" : ["student", "admin"]},
            {"_id": 234, "firstName": "Bob", "lastName": "Hope",  "username": "bob",  "password": "bob", "roles" : ["student"]},
            {"_id": 345, "firstName": "Charlie", "lastName": "Brown",  "username": "charlie", "password": "charlie", "roles" : ["student"]},
            {"_id": 456, "firstName": "Dan", "lastName": "Craig",  "username": "dan", "password": "dan", "roles" : ["student"]},
            {"_id": 567, "firstName": "Edward", "lastName": "Norton", "username": "ed", "password": "ed", "roles" : ["student"]}
        ];

        console.log("List of users in admin controller: "+$scope.users.length);

        $scope.addUser = addUser;
        $scope.removeUser = removeUser;
        $scope.editUser = editUser;
        $scope.updateUser = updateUser;

        function updateUser(user)
        {
            $scope.users[$scope.selectedCourseIndex].username = user.username;
            $scope.users[$scope.selectedCourseIndex].password = user.password;
            $scope.users[$scope.selectedCourseIndex].firstName = user.firstName;
            $scope.users[$scope.selectedCourseIndex].lastName = user.lastName;
            $scope.users[$scope.selectedCourseIndex].start = user.start;
        }

        function editUser(index)
        {
            $scope.selectedCourseIndex = index;
            $scope.newUser = {
                username: user.username,
                password: user.password,
                firstName: user.firstName,
                lastName: user.lastName,
                roles: user.roles
            };
        }

        function removeUser(user)
        {
            var index = $scope.users.indexOf(user);
            $scope.users.splice(index, 1);
        }

        function addUser(user)
        {
            var newUser = {
                firstName: user.firstName,
                lastName: user.lastName,
                username: user.username,
                password: user.password,
                roles: user.roles
            };

            $scope.users.push(newUser);
        }
    }

    $('#mytable').dataTable( {
        "pageLength": 10,
        "aoColumnDefs": [ { "bSortable": false, "aTargets": [ 2, 5, 6 ] }]
    } );

})();