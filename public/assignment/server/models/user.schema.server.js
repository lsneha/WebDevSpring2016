var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

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
            email: [String],
            roles: [String]
        }, {collection: COLLECTION});

    // methods ======================
// generating a hash
    UserSchema.methods.generateHash = function(password) {
        return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
    };

// checking if password is valid
    UserSchema.methods.validPassword = function(password) {
        return bcrypt.compareSync(password, this.local.password);
    };

    return UserSchema;
};