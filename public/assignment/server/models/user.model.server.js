var q             = require("q");
var mongoose      = require("mongoose");

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
        var deferred = q.defer();
        console.log("find all users model");
        return UserModel.find(function(err, users){
            deferred.resolve(users);
        });
        return deferred.promise;
    }

    function createUser(user) {
        console.log("create user model");
        console.log("op: "+UserModel.create(user));
        return UserModel.create(user);
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