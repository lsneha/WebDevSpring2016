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
            addMovie: addMovie
        };

        return userService;

        function addMovie(userId, title) {
            return $http.put("api/project/movie/"+userId, title);
        }

        function getMoviesForUser(username) {
            return $http.get("/api/project/userMovies", username);
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