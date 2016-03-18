/**
 * Created by sneha_000 on 3/14/2016.
 */
var mock = require("./form.mock.json");

module.exports = function(app) {

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

    return formApi;

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

    function deleteForm(form)
    {
        for(var f in mock) {
            if(formId === mock[f]._id) {
                var index = model.Forms.indexOf(mock[f]);
                model.Forms.splice(index, 1);
            }
        }
        return model.Users[u];
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

}