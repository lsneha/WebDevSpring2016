(function() {
    "use strict";
    angular
        .module("ProjectApp")
        .controller("AdminController", AdminController);

    function AdminController($rootScope, UserService, $scope)
    {
        function init() {
            console.log("Admin controller initialized...");
            findAllUsers();
        }

        function findAllUsers() {
            UserService
                .findAllUsers()
                .then(function(users){
                    $scope.users1 = users;
                    console.log("Admin ctrl no of users: "+users.length);
                });
        }

        init();

        $scope.users = [
            {"_id": 123, "firstName": "Alice", "lastName": "Wonderland", "username": "alice",  "password": "alice", "roles" : ["student", "admin"]},
            {"_id": 234, "firstName": "Bob", "lastName": "Hope",  "username": "bob",  "password": "bob", "roles" : ["student"]},
            {"_id": 345, "firstName": "Charlie", "lastName": "Brown",  "username": "charlie", "password": "charlie", "roles" : ["student"]},
            {"_id": 456, "firstName": "Dan", "lastName": "Craig",  "username": "dan", "password": "dan", "roles" : ["student"]},
            {"_id": 567, "firstName": "Edward", "lastName": "Norton", "username": "ed", "password": "ed", "roles" : ["student"]}
        ];

        $scope.users = UserService.findAllUsers();
        console.log("List of users in admin controller: "+$scope.users.length);

        $scope.addUser = addUser;
        $scope.removeUser = removeUser;
        $scope.editUser = editUser;
        $scope.updateUser = updateUser;
        $scope.followUser = followUser;

        function followUser(userId) {
            console.log("Current user is : "+$rootScope.currentUser.username);
            console.log("User to be followed is : "+userId);
            UserService
                .followUser($rootScope.currentUser.username, userId)
                .then(function(user){
                    $scope.followingDup = user.following;
                    var unique = user.following.filter(function(item, i, ar){ return ar.indexOf(item) === i; });
                    console.log("Admin ctrl no of users in following: "+unique.length);
                    console.log("Admin ctrl whats in following: "+unique);
                    $scope.following = unique;
                });;
        }

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
            console.log("Inside controller remove user");
            UserService.deleteUser(userId);
            findAllUsers();
        }

        function addUser(user)
        {
            UserService.createUser(user);
        }
    }

})();