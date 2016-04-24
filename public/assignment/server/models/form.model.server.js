var q             = require("q");
var mongoose      = require("mongoose");

module.exports = function() {

    "use strict";

    var FormSchema = require("./form.schema.server.js")(mongoose);
    var FormModel = mongoose.model("FormModel", FormSchema);

    var formApi = {
        findFormByTitle: findFormByTitle,
        findAllForms : findAllForms,
        createForm : createForm,
        deleteFormById: deleteFormById,
        updateForm: updateForm,
        findFormById: findFormById
    };

    return formApi;

    function findAllForms() {
        var deferred = q.defer();

        FormModel.findAllForms(function(err, forms){
            if(err) {
                deferred.reject(err);
            } else {
                deferred.resolve(forms);
            }
        });

        return deferred.promise;
    }

    function findAllFormsForUser(userId) {
        var deferred = q.defer();

        FormModel.findAllFormsForUser(userId, function(err, forms){
            if(err) {
                deferred.reject(err);
            } else {
                deferred.resolve(forms);
            }
        });

        return deferred.promise;
    }

    function createForm(userId, form) {
        var deferred = q.defer();
        console.log("Create a form");

        FormModel.createFormForUser(userId, form, function(err, form) {
            if(err) {
                deferred.reject(err);
            } else {
                console.log("Form>");
                console.log(form);
                deferred.resolve(form);
            }
        });

        return deferred.promise;
    }

    function deleteFormById(formId) {
        var deferred = q.defer();

        FormModel.deleteFormById(formId, function(err, status) {
            if(err) {
                deferred.reject(err);
            } else {
                deferred.resolve(status);
            }
        });

        return deferred.promise;
    }

    function updateForm(formId, form) {
        var deferred = q.defer();

        form.delete("formId");

        FormModel.updateForm({formId: formId}, {$set: form}, function(err, form) {
            if(err) {
                deferred.reject(err);
            } else {
                deferred.resolve(form);
            }
        });

        return deferred.promise;
    }

    function findFormByTitle(title) {
        var deferred = q.defer();

        FormModel.findFormByTitle(title, function(err, form){
            if(err) {
                deferred.reject(err);
            } else {
                deferred.resolve(form);
            }
        });

        return deferred.promise;
    }

    function findFormById(formId) {
        var deferred = q.defer();

        FormModel.findFormById(formId, function(err, form) {
            if(err) {
                deferred.reject(err);
            } else {
                deferred.resolve(form);
            }
        });

        return deferred.promise;
    }

}