/**
 * Created by sneha_000 on 3/14/2016.
 */
var mock = require("./form.mock.json");

module.exports = function(app, userModel, formModel) {

    "use strict";

    app.get("/api/assignment/form/:formId/field", findFieldsForForm);
    app.get("/api/assignment/form/:formId/field/:fieldId", findFieldById);
    app.delete("/api/assignment/form/:formId/field/:fieldId", deleteField);
    app.post("/api/assignment/form/:formId/field", createField);
    app.put("/api/assignment/form/:formId/field/:fieldId", updateField);

    function findFieldsForForm(request, response) {
        var user = request.body;
        user = userModel.createUser(user);
        request.session.currentUser = user;
        response.json(user);
    }

    function findFieldById(request, response) {
        var credentials = request.body;
        var users = userModel.findUserByCredentials(credentials);
        response.send(200);
    }

    function deleteField(request, response) {
        var users = userModel.findAllUsers();
        response.json(users);
    }

    function createField(request, response) {
        var id = request.body;
        var users = userModel.findUserById;
        response.json(users);
    }

    function updateField(request, response) {
        var id = request.body;
        var users = userModel.findUserById;
        response.json(users);
    }

}