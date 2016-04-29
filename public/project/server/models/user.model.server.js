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
        addMovie: addMovie
    };

    return userApi;

    function addMovie(username, movieTitle) {
        return UserModel.update({username: username}, {$set: {"movies" : movieTitle}});
    }

    function getMoviesForUser(username) {
        console.log("Some magic...");
        console.log(util.inspect(username, {showHidden: false, depth: null}));
        return UserModel.findOne({username: username});
    }

    function deleteUser(userId) {
        return UserModel.remove({_id: userId});
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
        return UserModel.find();
    }

    function createUser(user) {
        return UserModel.create(user);
    }

    function updateUser(userId, user) {
        console.log("update user model");
        return UserModel.update({username: userId}, {$set: user});
    }

    function findUserByUsername(username) {
        console.log("find user by username model line 59");
        console.log(UserModel.findOne({username: username}));
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