(function() {
    "use strict";
    angular
        .module("ProjectApp")
        .factory("UserService", UserService);

    function UserService($http, $q)
    {
        var userService = {
            findAllUsers: findAllUsers,
            deleteUser: deleteUser,
            updateUser: updateUser,
            createUser: createUser,
            findUserByUsername: findUserByUsername,
            getMoviesForUser: getMoviesForUser,
            addMovie: addMovie,
            logout: logout,
            register: register,
            login: login,
            followUser: followUser
        };

        return userService;

        function logout() {
            return $http.post("/api/project/logout");
        }

        function register(user) {
            console.log("inside client service register");
            var deferred = $q.defer();
            $http.post("/api/project/register", user)
                .success(function(response){
                    deferred.resolve(response);
                });

            return deferred.promise;
        }

        function login(user) {
            return $http.post("/api/project/login", user);
        }

        function followUser(userId, username) {
            console.log("Add user service client: "+userId);
            console.log("Add user service client: "+username);
            var userJson = { "username" : username};
            var deferred = $q.defer();

            $http.put("/api/project/follow/" + userId, userJson)
                .success(function(response){
                    console.log("Success in client service");
                    deferred.resolve(response);
                })
                .error(function (err) {
                    console.log("some error");
                });

            return deferred.promise;
        }

        function addMovie(userId, title) {
            console.log("Add movie service client: "+userId);
            console.log("Add movie service client: "+title);
            var movieJson = { "title" : title};
            var deferred = $q.defer();

            $http.put("/api/project/movie/" + userId, movieJson)
                .success(function(response){
                    console.log("Success in client service");
                    deferred.resolve(response);
                })
                .error(function (err) {
                    console.log("some error");
                });

            return deferred.promise;
        }

        function getMoviesForUser(username) {
            console.log("client service get movies: "+username);
            var deferred = $q.defer();
            $http.get("/api/project/userMovies/"+ username)
                .success(function(response){
                    deferred.resolve(response);
                });

            return deferred.promise;
        }

        function findUserByUsername(username) {
            return $http.get("/api/project/user/username"+username);
        }

        function createUser(user) {
            console.log("client user service create user");
            var deferred = $q.defer();
            $http.post('/api/project/user', user)
                .success(function(response){
                    deferred.resolve(response);
                });

            return deferred.promise;
        }

        function updateUser(userId, user) {
            console.log("update user client: "+user.username);
            console.log("update user client user obj: "+user.password);
            console.log("update user client user obj: "+user.firstName);
            console.log("update user client user obj: "+user.lastName);
            console.log("update user client user obj: "+user.email);
            return $http.put('/api/project/user/'+userId, user);
        }

        function deleteUser(userId) {
            console.log("delete user client service: "+userId);
            var deferred = $q.defer();
            $http.delete('/api/project/user/'+userId)
                .success(function(response){
                    console.log("Success deleting user in CS");
                    deferred.resolve(response);
                });

            return deferred.promise;
        }

        function findAllUsers() {
            var deferred = $q.defer();
             $http.get("/api/project/user")
                .success(function(response){
                    deferred.resolve(response);
                });

            return deferred.promise;
        }
    }
})();