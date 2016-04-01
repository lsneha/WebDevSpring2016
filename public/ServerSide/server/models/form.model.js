var q = require("q");

module.exports = function(app) {

    "use strict";

    var FormSchema = require("./form.schema.server.js")(mongoose);
    var FormModel = mongoose.model("FormModel", FormSchema);

    var formApi = {
        findFormByTitle: findFormByTitle,
        findAllForms : findAllForms,
        createForm : createForm,
        deleteForm: deleteForm,
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

    function createForm(form)
    {
        /*form._id = "ID_"+(new Date()).getTime();
        mock.push(form);
        return form;*/
        var deferred = q.defer();
        console.log("Create a form");

        FormModel.createForm(user, function(err, form) {
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

    function deleteForm(formId)
    {
        /*for(var f in mock) {
            if(formId === mock[f]._id) {
                var index = model.Forms.indexOf(mock[f]);
                model.Forms.splice(index, 1);
            }
        }
        return model.Forms[f];*/
        var deferred = q.defer();

        FormModel.deleteForm(formId, function(err, status) {
            if(err) {
                deferred.reject(err);
            } else {
                deferred.resolve(status);
            }
        });

        return deferred.promise;
    }

    function updateForm(formId, form)
    {
        /*for(var f in mock) {
            if(mock[f]._id === form._id){
                mock[f] = update;
                return mock[f];
            }
        }
        return null;*/
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
        /*for (var f in mock) {
            if (mock[f].title) {
                return mock[f];
            }
        }
        return null;*/
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
        /*for (var f in mock) {
            if (mock[f]._id === formId) {
                return mock[f];
            }
        }
        return null;*/
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