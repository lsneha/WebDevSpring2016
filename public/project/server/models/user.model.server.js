var q             = require("q");
var mongoose      = require("mongoose");

module.exports = function() {

    "use strict";

    mongoose.models = {};
    mongoose.modelSchemas = {};
    var UserSchema = require("./user.schema.server.js")(mongoose);
    var UserModel = mongoose.model('UserModel', UserSchema);

    var userApi = {
        findAllUsers : findAllUsers,
        createUser : createUser,
        deleteUser: deleteUser,
        updateUser: updateUser,
        findUserByUsername: findUserByUsername,
        getMongooseModel: getMongooseModel
    };

    return userApi;

    function deleteUser(userId) {
        return UserModel.remove({_id: userId});
    }

    function findAllUsers() {
        console.log("find all users model");
        return UserModel.find();
    }

    function createUser(user) {
        console.log("create user model");
        return UserModel.create(user);
    }

    function updateUser(userId, user) {
        console.log("update user model: "+userId);
        return UserModel.update({username: userId}, {$set: user});
    }

    function findUserByUsername(username) {
        console.log("Inside find user by username");
        return UserModel.findOne({username: username});
    }

    function getMongooseModel() {
        console.log("user model get mongoose model");
        return UserModel;
    }

}