var q             = require("q");
var mongoose      = require("mongoose");

module.exports = function() {

    "use strict";

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
        findUserByGoogleId: findUserByGoogleId,
        findUserByFacebookId: findUserByFacebookId,
        getMongooseModel: getMongooseModel
    };

    return userApi;

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
        console.log("create user model");
        console.log(UserModel.create(user));
        return UserModel.create(user);
    }

    function removeUser(userId) {
        return UserModel.remove({_id: userId});
    }

    function updateUser(userId, user) {
        console.log("update user model");
        return UserModel.update({_id: userId}, {$set: user});
    }

    function findUserByUsername(username) {
        console.log("find user by username model");
        console.log(UserModel.findOne({username: username}));
        return UserModel.findOne({username: username});
    }

    function findUserById(userId) {
        console.log("find user by id model");
        return UserModel.findById(userId);
    }

    function findUserByFacebookId(facebookId) {
        return UserModel.findOne({'facebook.id': facebookId });
    }

    function findUserByGoogleId(googleId) {
        return UserModel.findOne({'google.id': googleId});
    }

    function getMongooseModel() {
        console.log("user model get mongoose model");
        return UserModel;
    }

}