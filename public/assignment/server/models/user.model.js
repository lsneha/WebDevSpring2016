var q = require("q");

module.exports = function(db, mongoose) {

    "use strict";

    var UserSchema = require("./user.schema.server.js")(mongoose);
    var UserModel = mongoose.model("UserModel", UserSchema);

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
        /*for (var u in mock) {
            if (mock[u].username === credentials.username &&
                mock[u].password === credentials.password) {
                return mock[u];
            }
        }
        return null;*/
        var deferred = q.defer();

        UserModel.findUserByCredentials(credentials, function(err, user){
            if(err) {
                deferred.reject(err);
            } else {
                deferred.resolve(user);
            }
        });

        return deferred.promise;
    }

    function findAllUsers() {
        /*return mock;*/
        var deferred = q.defer();

        UserModel.findAllUsers(function(err, users){
            if(err) {
                deferred.reject(err);
            } else {
                deferred.resolve(users);
            }
        });

        return deferred.promise;
    }

    function createUser(user)
    {
        /*user._id = "ID_"+(new Date()).getTime();
        mock.push(user);
        return user;*/
        var deferred = q.defer();
        console.log("Create a user");

        UserModel.createUser(user, function(err, user) {
            if(err) {
                deferred.reject(err);
            } else {
                console.log("User>");
                console.log(user);
                deferred.resolve(user);
            }
        });

        return deferred.promise;
    }

    function deleteUser(userId)
    {
        /*for(var u in mock) {
            if(userId === mock[u]._id) {
                var index = model.Users.indexOf(mock[u]);
                model.Users.splice(index, 1);
            }
        }
        return model.Users[u];*/
        var deferred = q.defer();

        UserModel.deleteUserById(userId, function(err, status) {
            if(err) {
                deferred.reject(err);
            } else {
                deferred.resolve(status);
            }
        });

        return deferred.promise;
    }

    function updateUser(userId, user)
    {
        /*for(var u in mock) {
            if(mock[u]._id === userId){
                mock[u] = user;
                return mock[u];
            }
        }
        return null;*/
        var deferred = q.defer();

        user.delete("userId");

        UserModel.updateUser({userId: userId}, {$set: user}, function(err, user) {
            if(err) {
                deferred.reject(err);
            } else {
                deferred.resolve(user);
            }
        });

        return deferred.promise;
    }

    function findUserByUsername(username) {
        /*for (var u in mock) {
            if (mock[u].username) {
                return mock[u];
            }
        }
        return null;*/
        var deferred = q.defer();

        UserModel.findUserByUsername(username, function(err, user){
            if(err) {
                deferred.reject(err);
            } else {
                deferred.resolve(user);
            }
        });

        return deferred.promise;
    }

    function findUserById(userId) {
        /*for (var u in mock) {
            if (mock[u]._id === userId) {
                return mock[u];
            }
        }
        return null;*/
        var deferred = q.defer();

        UserModel.findUserById(userId, function(err, user){
            if(err) {
                deferred.reject(err);
            } else {
                deferred.resolve(user);
            }
        });

        return deferred.promise;
    }

}