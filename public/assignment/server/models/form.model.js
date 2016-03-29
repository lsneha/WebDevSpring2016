/**
 * Created by sneha_000 on 3/14/2016.
 */
//var mock = require("./form.mock.json");
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
        setCurrentForm: setCurrentForm,
        getCurrentForm: getCurrentForm,
        findFormById: findFormById
    };

    function setCurrentForm(form) {
        $scope.currentForm = form;
    }

    function getCurrentForm() {
        return $scope.currentForm;
    }

    function findAllForms() {
        return mock;
    }

    function createForm(form)
    {
        form._id = "ID_"+(new Date()).getTime();
        mock.push(form);
        return form;
    }

    function deleteForm(formId)
    {
        for(var f in mock) {
            if(formId === mock[f]._id) {
                var index = model.Forms.indexOf(mock[f]);
                model.Forms.splice(index, 1);
            }
        }
        return model.Forms[f];
    }

    function updateForm(form, update)
    {
        for(var f in mock) {
            if(mock[f]._id === form._id){
                mock[f] = update;
                return mock[f];
            }
        }
        return null;
    }

    function findFormByTitle(title) {
        for (var f in mock) {
            if (mock[f].title) {
                return mock[f];
            }
        }
        return null;
    }

    function findFormById(formId) {
        for (var f in mock) {
            if (mock[f]._id === formId) {
                return mock[f];
            }
        }
        return null;
    }

    return formApi;

}