/**
 * Created by sneha_000 on 3/3/2016.
 */
(function()
{
    angular
        .module("FormBuilderApp")
        .factory("UserService", UserService);

    function UserService($scope, $http)
    {
        var userService = {
            findUserByCredentials: findUserByCredentials,
            findAllUsers : findAllUsers,
            createUser : createUser,
            deleteUserById: deleteUserById,
            updateUser: updateUser,
            setCurrentUser: setCurrentUser,
            getCurrentUser: getCurrentUser,
            findUserByUsername: findUserByUsername
        };

        return userService;

        //??
        function setCurrentUser(user) {
            $scope.currentUser = user;
        }

        //??
        function getCurrentUser() {
            return $http.get("/figureitout");
        }

        function findUserByCredentials(username, password)
        {
            var credentials = {
                username: username,
                password: password
            }
            return $http.get("/api/assignment/user?username=alice&password=wonderland", credentials);
        }

        function findAllUsers()
        {
            return $http.get("/api/assignment/user");
        }

        function findUserByUsername(username) {
            return $http.get("/api/assignment/user?username="+username);
        }

        function createUser(user)
        {
            return $http.post("/api/assignment/user", user);
        }

        function deleteUserById(userId)
        {
            return $http.delete("/api/assignment/user", userId);
        }

        function updateUser(userId, user)
        {
            return $http.post("/api/assignment/user/:id", userId);
        }
    }
})();