(function() {
    "use strict";
    angular
        .module("FormBuilderApp")
        .factory("UserService", UserService);

    function UserService($http, $q)
    {
        var userService = {
            findUserByCredentials: findUserByCredentials,
            login: login,
            logout: logout,
            register: register,
            findAllUsers: findAllUsers,
            deleteUser: deleteUser,
            updateUser: updateUser,
            createUser: createUser,
            findUserByUsername: findUserByUsername,
            findUserById: findUserById
        };

        return userService;

        function findUserByCredentials(username, password) {
            return $http.get("/api/assignment/user/username/"+username+"/password/"+password);
        }

        function findUserByUsername(username) {
            return $http.get("/api/assignment/user/username"+username);
        }

        function findUserById(userId) {
            return $http.get("/api/assignment/user/"+userId);
        }

        function logout() {
            return $http.post("/api/assignment/logout");
        }

        function createUser(user) {
            return $http.post('/api/assignment/user/', user);
        }

        function updateUser(userId, user) {
            console.log("update client service...");
            return $http.put('/api/assignment/user/'+userId, user);
        }

        function deleteUser(userId) {
            return $http.delete('/api/assignment/user'+userId);
        }

        function findAllUsers() {
            return $http.get("/api/assignment/user");
        }

        function register(user) {
            console.log("inside client service register");
            return $http.post("/api/assignment/register", user);
        }

        function login(user) {
            return $http.post("/api/assignment/login", user);
        }
    }
})();