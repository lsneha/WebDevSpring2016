var mock = require("./form.mock.json");

module.exports = function(app, userModel, formModel) {

    "use strict";

    app.get("/api/assignment/user/:userId/form", findFormsForUser);
    app.get("/api/assignment/form/:formId", findFormById);
    app.delete("/api/assignment/form/:formId", deleteForm);
    app.post("/api/assignment/user/:userId/form", createFormForUser);
    app.put("/api/assignment/form/:formId", updateForm);

    function findFormsForUser(request, response) {
        var forms = userModel.findAllFormsForUser(request.body.userId);
        response.json(forms);
    }

    function findFormById(request, response) {
        var form = formModel.findFormById(request.body.formId);
        response.json(form);
    }

    function deleteForm(request, response) {
        formModel.deleteForm(request.body.formId);
        response.json(200);
    }

    function createFormForUser(request, response) {
        var form = formModel.createFormForUser(request.body.form);
        response.json(form);
    }

    function updateForm(request, response) {
        var form = formModel.updateForm(request.body.form, request.body.update);
        response.json(form);
    }

}