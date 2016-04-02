var q = require("q");

module.exports = function(db, mongoose) {

    "use strict";

    var FieldSchema = require("./field.schema.server.js")(mongoose);
    var FieldModel = mongoose.model("FieldModel", FieldSchema);

    var fieldApi = {
        createField : createField,
        findFieldsForForm : findFieldsForForm,
        findFieldById : findFieldById,
        deleteFieldById : deleteFieldById,
        updateField: updateField
    };

    return fieldApi;

    function findFieldsForForm(formId) {
        var deferred = q.defer();

        FieldModel.findFieldsForForm(formId, function(err, user){
            if(err) {
                deferred.reject(err);
            } else {
                deferred.resolve(user);
            }
        });

        return deferred.promise;
    }

    function createField(formId, field) {
        var deferred = q.defer();
        console.log("Create a field");

        FieldModel.createField(formId, field, function(err, field) {
            if(err) {
                deferred.reject(err);
            } else {
                console.log("Field>");
                console.log(field);
                deferred.resolve(field);
            }
        });

        return deferred.promise;
    }

    function deleteFieldById(formId, fieldId) {
        var deferred = q.defer();

        FieldModel.deleteFieldById(formId, fieldId, function(err, field) {
            if(err) {
                deferred.reject(err);
            } else {
                deferred.resolve(field);
            }
        });

        return deferred.promise;
    }

    function updateField(formId, fieldId, newField) {
        var deferred = q.defer();

        form.delete("formId");

        FormModel.updateField({formId: formId}, {fieldId: fieldId}, {$set: newField}, function(err, form) {
            if(err) {
                deferred.reject(err);
            } else {
                deferred.resolve(form);
            }
        });

        return deferred.promise;
    }

    function findFieldById(formId, fieldId) {
        var deferred = q.defer();

        FormModel.findFieldById(formId, fieldId, function(err, field){
            if(err) {
                deferred.reject(err);
            } else {
                deferred.resolve(field);
            }
        });

        return deferred.promise;
    }

}