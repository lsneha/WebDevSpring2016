module.exports = function(mongoose) {

    var COLLECTION = "field";

    var FieldSchema = mongoose.Schema({
        label: String,
        type: {
            type: String,
            enum: ["TEXT", "EMAIL", "PASSWORD", "OPTIONS", "DATE", "RADIOS", "CHECKBOXES"]
        },
        options: {
            label: String,
            value: String
        }
    },{collection: COLLECTION});

    return FieldSchema;
};
