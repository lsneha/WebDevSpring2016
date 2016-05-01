var mongoose = require('mongoose');

module.exports = function() {

    var COLLECTION = "user";

    var UserSchema = new mongoose.Schema(
        {
            username: String,
            password: String,
            google: {
                id: String,
                token: String
            },
            facebook: {
                id: String,
                token: String
            },
            firstName: String,
            lastName: String,
            email: String,
            roles: [String],
            movies: [String],
            following: [String]
        }, {collection: COLLECTION});

    return UserSchema;
};