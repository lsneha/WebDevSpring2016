(function() {
     "use strict"
     angular
     .module("MyProjectApp")
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
            return $http.post('/api/project/admin/user', user);
        }

        function getAllUsers() {
            return $http.get('/api/project/admin/user');
        }

        function findUserByIdForAdmin(userId) {
            return $http.get("/api/project/admin/user/"+userId);
        }

        function deleteUserByAdmin(userId) {
            return $http.delete('/api/project/admin/user/'+userId);
        }

        function updateUserByAdmin(userId, user) {
            return $http.put('/api/project/admin/user/'+userId, user);
        }

        function findUserByCredentials(username, password) {
            return $http.get("/api/project/user/username/"+username+"/password/"+password);
        }

        function findUserByUsername(username) {
            return $http.get("/api/project/user/username"+username);
        }

        function findUserById(userId) {
            return $http.get("/api/project/user/"+userId);
        }

        function logout() {
            return $http.post("/api/project/logout");
        }

        function createUser(user) {
            return $http.post('/api/project/user/', user);
        }

        function updateUser(userId, user) {
            console.log("update client service...");
            return $http.put('/api/project/user/'+userId, user);
        }

        function deleteUser(userId) {
            return $http.delete('/api/project/user'+userId);
        }

        function findAllUsers() {
            return $http.get("/api/project/user");
        }

        function register(user) {
            console.log("inside client service register");
            return $http.post("/api/project/register", user);
        }

        function login(user) {
            return $http.post("/api/project/login", user);
        }
    }
 })();