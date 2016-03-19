/**
 * Created by sneha_000 on 3/14/2016.
 */
var mock = require("./user.mock.json");

module.exports = function(app) {

    "use strict";

    var userApi = {
        findUserByCredentials: findUserByCredentials,
        findAllUsers : findAllUsers,
        createUser : createUser,
        deleteUser: deleteUser,
        updateUser: updateUser,
        setCurrentUser: setCurrentUser,
        getCurrentUser: getCurrentUser,
        findUserByUsername: findUserByUsername,
        findUserById: findUserById
    };

    return userApi;

    function setCurrentUser (user) {
        $scope.currentUser = user;
    }

    function getCurrentUser () {
        return $scope.currentUser;
    }

    function findUserByCredentials(credentials) {
        for (var u in mock) {
            if (mock[u].username === credentials.username &&
                mock[u].password === credentials.password) {
                return mock[u];
            }
        }
        return null;
    }

    function findAllUsers() {
        return mock;
    }

    function createUser(user)
    {
        user._id = "ID_"+(new Date()).getTime();
        mock.push(user);
        return user;
    }

    function deleteUser(userId)
    {
        for(var u in mock) {
            if(userId === mock[u]._id) {
                var index = model.Users.indexOf(mock[u]);
                model.Users.splice(index, 1);
            }
        }
        return model.Users[u];
    }

    function updateUser(userId, user)
    {
        for(var u in mock) {
            if(mock[u]._id === userId){
                mock[u] = user;
                return mock[u];
            }
        }
        return null;
    }

    function findUserByUsername(username) {
        for (var u in mock) {
            if (mock[u].username) {
                return mock[u];
            }
        }
        return null;
    }

    function findUserById(userId) {
        for (var u in mock) {
            if (mock[u]._id === userId) {
                return mock[u];
            }
        }
        return null;
    }

}