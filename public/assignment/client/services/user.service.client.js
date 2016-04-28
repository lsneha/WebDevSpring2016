(function() {
    "use strict";
    angular
        .module("FormBuilderApp")
        .factory("UserService", UserService);

    function UserService($http)
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
            findUserById: findUserById,
            createUserByAdmin: createUserByAdmin,
            getAllUsers: getAllUsers,
            findUserByIdForAdmin: findUserByIdForAdmin,
            deleteUserByAdmin: deleteUserByAdmin,
            updateUserByAdmin: updateUserByAdmin
        };

        return userService;

        function createUserByAdmin(user) {
            return $http.post('/api/assignment/admin/user', user);
        }

        function getAllUsers() {
            return $http.get('/api/assignment/admin/user');
        }

        function findUserByIdForAdmin(userId) {
            return $http.get("/api/assignment/admin/user/"+userId);
        }

        function deleteUserByAdmin(userId) {
            return $http.delete('/api/assignment/admin/user/'+userId);
        }

        function updateUserByAdmin(userId, user) {
            return $http.put('/api/assignment/admin/user/'+userId, user);
        }

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