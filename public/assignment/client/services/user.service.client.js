(function() {
    "use strict";
    angular
        .module("FormBuilderApp")
        .factory("UserService", UserService);

    function UserService($http, $q)
    {
        var userService = {
            findUserByCredentials: findUserByCredentials,
            findAllUsers : findAllUsers,
            createUser : createUser,
            deleteUserById: deleteUserById,
            updateUser: updateUser,
            findUserByUsername: findUserByUsername,
            findUserById: findUserById
        };

        return userService;

        function findUserByCredentials(username, password) {
            var deferred = $q.defer();

            $http.get("/api/assignment/user?username="+username+"&password="+password)
                .success(function(response){
                    deferred.resolve(response);
                });

            return deferred.promise;
        }

        function findAllUsers() {
            var deferred = $q.defer();

            $http.get("/api/assignment/user")
                .success(function(response){
                    deferred.resolve(response);
                });

            return deferred.promise;
        }

        function findUserByUsername(username) {
            var deferred = $q.defer();

            $http.get("/api/assignment/user?username="+username)
                .success(function(response){
                    deferred.resolve(response);
                });

            return deferred.promise;
        }

        function findUserById(userId) {
            var deferred = $q.defer();

            $http.get("/api/assignment/user?userId="+userId)
                .success(function(response){
                    deferred.resolve(response);
                });

            return deferred.promise;
        }

        function createUser(user) {
            var deferred = $q.defer();

            $http.post("/api/assignment/user", user)
                .success(function(response){
                    deferred.resolve(response);
                });

            return deferred.promise;
        }

        function deleteUserById(userId) {
            var deferred = $q.defer();

            $http.delete("/api/assignment/user", userId)
                .success(function(response){
                    deferred.resolve(response);
                });

            return deferred.promise;
        }

        function updateUser(userId, user) {
            var deferred = $q.defer();

            $http.post("/api/assignment/user/:"+userId, user)
                .success(function(response){
                    deferred.resolve(response);
                });

            return deferred.promise;
        }
    }
})();