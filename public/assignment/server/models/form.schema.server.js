module.exports = function(mongoose) {

    var Field = require("./field.schema.server.js")(mongoose);

    var COLLECTION = "form";

    var FieldSchema = mongoose.Schema({
        userId: String,
        title: String,
        fields: Field,
        created: Date,
        updated: Date
    },{collection: COLLECTION});

    return FieldSchema;
};
