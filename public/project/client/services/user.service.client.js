(function() {
    "use strict";
    angular
        .module("ProjectApp")
        .factory("UserService", UserService);

    function UserService($http)
    {
        var userService = {
            findAllUsers: findAllUsers,
            deleteUser: deleteUser,
            updateUser: updateUser,
            createUser: createUser,
            findUserByUsername: findUserByUsername
        };

        return userService;

        function findUserByUsername(username) {
            return $http.get("/api/project/user/username"+username);
        }

        function createUser(user) {
            console.log("client user service create user");
            return $http.post('/api/project/user', user);
        }

        function updateUser(userId, user) {
            return $http.put('/api/project/user/'+userId, user);
        }

        function deleteUser(userId) {
            return $http.delete('/api/project/user'+userId);
        }

        function findAllUsers() {
            return $http.get("/api/project/user");
        }
    }
})();