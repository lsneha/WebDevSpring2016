var q = require("q");

module.exports = function(db, mongoose) {

    "use strict";

    var FieldSchema = require("./field.schema.server.js")(mongoose);
    var FieldModel = mongoose.model("FieldModel", FieldSchema);

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

    function setCurrentForm(field) {
        $scope.currentField = field;
    }

    function getCurrentForm() {
        return $scope.currentField;
    }

    function findAllForms() {

    }

    function createForm(form) {

    }

    function deleteForm(formId) {

    }

    function updateForm(formId, form) {

    }

    function findFormByTitle(title) {

    }

    function findFormById(formId) {

    }

}