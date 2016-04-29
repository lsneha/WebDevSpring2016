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
            findUserByUsername: findUserByUsername,
            getMoviesForUser: getMoviesForUser,
            addMovie: addMovie,
            logout: logout,
            register: register,
            login: login
        };

        return userService;

        function logout() {
            return $http.post("/api/project/logout");
        }

        function register(user) {
            console.log("inside client service register");
            return $http.post("/api/project/register", user);
        }

        function login(user) {
            return $http.post("/api/project/login", user);
        }

        function addMovie(userId, title) {
            return $http.put("api/project/movie/"+userId, title);
        }

        function getMoviesForUser(username) {
            console.log("client service get movies: "+username);
            return $http.get("/api/project/userMovies/"+ username);
        }

        function findUserByUsername(username) {
            return $http.get("/api/project/user/username"+username);
        }

        function createUser(user) {
            console.log("client user service create user");
            return $http.post('/api/project/user', user);
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
            return $http.delete('/api/project/user'+userId);
        }

        function findAllUsers() {
            return $http.get("/api/project/user");
        }
    }
})();