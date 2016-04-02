module.exports = function(app, userModel, formModel) {

    "use strict";

    app.get("/api/assignment/user/:userId/form", findFormsForUser);
    app.get("/api/assignment/form/:formId", findFormById);
    app.delete("/api/assignment/form/:formId", deleteForm);
    app.post("/api/assignment/user/:userId/form", createFormForUser);
    app.put("/api/assignment/form/:formId", updateForm);

    function findFormsForUser(req, res) {
        model
            .findAllFormsForUser(req.body)
            .then(function(forms){
                res.json(forms);
            });
    }

    function findFormById(req, res) {
        model
            .findFormById(req.params.formId)
            .then(function(forms){
                res.json(forms);
            });
    }

    function deleteForm(req, res) {
        model
            .deleteFormById(req.params.formId)
            .then(function(status){
                res.json(status);
            });
    }

    function createFormForUser(req, res) {
        model
            .createForm(req.params.userId, req.body)
            .then(function(form){
                res.json(form);
            });
    }

    function updateForm(req, res) {
        model
            .updateForm(req.params.formId, req.body)
            .then(function(sheet){
                res.json(sheet);
            });
    }

}