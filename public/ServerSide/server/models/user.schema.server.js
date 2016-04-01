module.exports = function(mongoose) {

    var COLLECTION = "user";

    var UserSchema = new mongoose.Schema(
        {
            username: String,
            password: String,
            firstName: String,
            lastName: String,
            email: [String],
            roles: [String],
        }, {collection: COLLECTION});

    return UserSchema;
};