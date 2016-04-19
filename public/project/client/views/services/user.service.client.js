/*
(function() {
    "use strict"
    angular
        .module("MyProjectApp")
        .factory("UserService", UserService);

    function UserService($rootScope) {
        var model = {
            users: [
                {username: "alice", password: "alice", roles: ["user"], description: "I am Alice"},
                {username: "bob", password: "bob", roles: ["user", "admin"], description: "I am Bob"},
                {username: "charlie", password: "charlie", roles: ["user"], description: "I am Charlie"}
            ],
            createUser: createUser,
            findUserByUsername: findUserByUsername,
            findUserByCredentials: findUserByCredentials,
            updateUser: updateUser,
            setCurrentUser: setCurrentUser,
            getCurrentUser: getCurrentUser
        };
        return model;

        function setCurrentUser (user) {
            $rootScope.currentUser = user;
        }

        function getCurrentUser () {
            return $rootScope.currentUser;
        }

        function createUser (user) {
            var user = {
                username: user.username,
                password: user.password
            };
            model.users.push(user);
            return user;
        }

        function findUserByUsername (username) {
            for (var u in model.users) {
                if (model.users[u].username === username) {
                    return model.users[u];
                }
            }
            return null;
        }

        function findUserByCredentials(credentials) {
            for (var u in model.users) {
                if (model.users[u].username === credentials.username &&
                    model.users[u].password === credentials.password) {
                    return model.users[u];
                }
            }
            return null;
        }

        function updateUser (currentUser) {
            var user = model.findUserByUsername (currentUser.username);
            if (user != null) {
                user.firstName = currentUser.firstName;
                user.lastName = currentUser.lastName;
                user.password = currentUser.password;
                return user;
            } else {
                return null;
            }
        }
    }
})();
*/
