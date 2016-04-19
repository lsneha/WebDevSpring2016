//var q = require("q");
var mock = require("./user.mock.json");

module.exports = function(mongoose, db) {

    /*var UserSchema = mongoose.Schema({
        "username": String,
        "password": String,
        "firstName": String,
        "lastName": String,
        "description": String,
        "books": [
            ]
    }, {collection: "users"});

    var UserModel = mongoose.model("UserModel", UserSchema);*/
    var api = {
        findUserByCredentials: findUserByCredentials,
        createUser: createUser,
        findUserById: findUserById,
        findUsersByIds: findUsersByIds
    };
    return api;

    function findUsersByIds (userIds) {
        var users = [];
        for (var u in userIds) {
            var user = findUserById (userIds[u]);
            if (user) {
                users.push (user);
            }
        }
        return users;
    }

    function findUserById(userId) {
        for(var u in mock) {
            if( mock[u]._id === userId ) {
                return mock[u];
            }
        }
        return null;

    }

    function createUser(user) {
        user._id = "ID_" + (new Date()).getTime();
        mock.push(user);
        return user;
        /*var deferred = q.defer();

        UserModel.create(user, function(err, doc){
            UserModel.find(function(err, users){
                deferred.resolve(users);
            });
        });

        return deferred.promise;*/
    }

    function findUserByCredentials(credentials) {
        for(var u in mock) {
            if( mock[u].username === credentials.username &&
                mock[u].password === credentials.password) {
                return mock[u];
            }
        }
        return null;
    }
}