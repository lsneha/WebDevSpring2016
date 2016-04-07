var mongoose = require('mongoose');
module.exports = function(mongoose) {

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
            email: [String],
            roles: [String]
        }, {collection: COLLECTION});

    return UserSchema;
};