var q             = require("q");
var mongoose      = require("mongoose");
var util = require('util');

module.exports = function() {

    "use strict";

    mongoose.models = {};
    mongoose.modelSchemas = {};
    var UserSchema = require("./user.schema.server.js")(mongoose);
    var UserModel = mongoose.model('UserModel', UserSchema);

    var userApi = {
        findUserByCredentials: findUserByCredentials,
        findAllUsers : findAllUsers,
        createUser : createUser,
        deleteUser: deleteUser,
        updateUser: updateUser,
        findUserByUsername: findUserByUsername,
        findUserById: findUserById,
        getMongooseModel: getMongooseModel,
        getMoviesForUser: getMoviesForUser,
        addMovie: addMovie,
        followUser: followUser
    };

    return userApi;

    function addMovie(username, movieTitle) {
        var deferred = q.defer();
        console.log("model title: "+movieTitle);
        console.log("model username: "+username);

        UserModel.findOne({username: username}, function(err, user){
            if(err) {
                deferred.reject(err);
            } else {
                console.log("success finding user in schema");
                console.log("user.username: "+user.username);
                user.movies.push(movieTitle);
                console.log("after pushing: "+user.movies);
                UserModel.update({username: username}, {$set: user},
                    function(err, user){
                        if(err) {
                            console.log("Error adding movie in model");
                            deferred.reject(err);
                        } else {
                            console.log("Success add movie");
                            console.log(user.movies);
                            deferred.resolve(user);
                        }
                    });
            }
        });

        return deferred.promise;
    }

    function getMoviesForUser(username) {
        console.log("Some magic...");
        console.log(util.inspect(username, {showHidden: false, depth: null}));
        var deferred = q.defer();

        UserModel.findOne({username: username}, function(err, user){
            if(err) {
                deferred.reject(err);
            } else {
                console.log("Success get movies");
                console.log(user.movies);
                deferred.resolve(user);
            }
        });

        return deferred.promise;
    }

    function followUser(userId, username) {
        var deferred = q.defer();
        console.log("model userId: "+userId);
        console.log("model username: "+username);

        UserModel.findOne({username: userId}, function(err, user) {
            if (err) {
                deferred.reject(err);
            } else {
                console.log("success finding user in schema");
                console.log("user.username: " + user.username);
                user.following.push(username);
                console.log("after pushing: " + user.following);
                UserModel.update({username: userId}, {$set: user},
                    function (err, user) {
                        if (err) {
                            console.log("Error adding user in model");
                            deferred.reject(err);
                        } else {
                            console.log("Success add user");
                            UserModel.findOne({username: userId}, function (err, user) {
                                if (err) {
                                    console.log("error finding user: ")
                                    deferred.reject(err);
                                } else {
                                    console.log("Success follow: "+user.following);
                                    deferred.resolve(user);
                                }
                            });
                        }
                    }
                );
            }
        });
        return deferred.promise;
    }

    function deleteUser(userId) {
        console.log("in delete user model: "+userId);
        var deferred = q.defer();

        UserModel.remove({username: userId}, function(err, user){
            if(err) {
                console.log("error deleting users");
                deferred.reject(err);
            } else {
                console.log("success deleting users");
                deferred.resolve(user);
            }
        });

        return deferred.promise;
    }

    function findUserByCredentials(credentials) {
        console.log("find user by creds model");
        return UserModel.findOne(
            {
                username: credentials.username,
                password: credentials.password
            }
        );
    }

    function findAllUsers() {
        console.log("find all users model");
        var deferred = q.defer();

        UserModel.find(function(err, users){
            if(err) {
                deferred.reject(err);
            } else {
                deferred.resolve(users);
            }
        });

        return deferred.promise;
    }

    function createUser(user) {
        var deferred = q.defer();

        UserModel.create(user, function(err, users){
            if(err) {
                deferred.reject(err);
            } else {
                deferred.resolve(users);
            }
        });

        return deferred.promise;
    }

    function updateUser(userId, user) {
        console.log("update user model");
        return UserModel.update({username: userId}, {$set: user});
    }

    function findUserByUsername(username) {
        console.log("find user by username model line 59");
        //console.log(UserModel.findOne({username: username}));
        return UserModel.findOne({username: username});
    }

    function findUserById(userId) {
        //console.log(" "+UserModel.findOne({_id: userId}));
        return UserModel.findOne({username: userId});
    }

    function getMongooseModel() {
        console.log("user model get mongoose model");
        return UserModel;
    }

}