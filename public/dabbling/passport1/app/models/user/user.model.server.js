var mongoose      = require("mongoose");
mongoose.models = {};
mongoose.modelSchemas = {};

module.exports = function() {

    var UserSchema = new mongoose.Schema(
        {
            username: String,
            password: String,
            google:   {
                id:    String,
                token: String
            },
            facebook:   {
                id:    String,
                token: String
            },
            firstName: String,
            lastName: String,
            email: String,
            roles: [String]
        }, {collection: "user"});

    var UserModel = mongoose.model('UserModel', UserSchema);

    var api = {
        findUserByCredentials: findUserByCredentials,
        findUserByUsername: findUserByUsername,
        findUserById: findUserById,
        findAllUsers: findAllUsers,
        createUser: createUser,
        removeUser: removeUser,
        updateUser: updateUser,
        findUserByGoogleId: findUserByGoogleId,
        findUserByFacebookId: findUserByFacebookId,
        getMongooseModel: getMongooseModel
    };
    return api;

    function findUserByFacebookId(facebookId) {
        return UserModel.findOne({'facebook.id': facebookId});
    }

    function findUserByGoogleId(googleId) {
        return UserModel.findOne({'google.id': googleId});
    }

    function updateUser(userId, user) {
        console.log("update user model");
        return UserModel.update({_id: userId}, {$set: user});
    }

    function removeUser(userId) {
        return UserModel.remove({_id: userId});
    }

    function findAllUsers() {
        console.log("find all users model");
        return UserModel.find();
    }

    function createUser(user) {
        console.log("create user model");
        //console.log(UserModel.create(user));
        return UserModel.create(user);
    }

    function findUserByUsername(username) {
        console.log("find user by username model");
        //console.log(UserModel.findOne({username: username}));
        return UserModel.findOne({username: username});
    }

    function getMongooseModel() {
        console.log("user model get mongoose model");
        return UserModel;
    }

    function findUserById(userId) {
        console.log("find user by id model");
        return UserModel.findById(userId);
    }

    function findUserByCredentials(credentials) {
        console.log("find user by creds model");
        console.log(credentials.username);
        console.log(credentials.password);
        console.log("Retunred user: "+UserModel.findOne(
                {
                    username: credentials.username,
                    password: credentials.password
                }));
        return UserModel.findOne(
            {
                username: credentials.username,
                password: credentials.password
            }
        );
    }
}
