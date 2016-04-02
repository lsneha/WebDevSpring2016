module.exports = function(app, userModel, formModel) {

    "use strict";

    app.get("/api/assignment/user/:userId/form", findFormsForUser);
    app.get("/api/assignment/form/:formId", findFormById);
    app.delete("/api/assignment/form/:formId", deleteForm);
    app.post("/api/assignment/user/:userId/form", createFormForUser);
    app.put("/api/assignment/form/:formId", updateForm);

    function findFormsForUser(req, res) {
        formModel
            .findAllFormsForUser(req.body)
            .then(function(forms){
                res.json(forms);
            });
    }

    function findFormById(req, res) {
        formModel
            .findFormById(req.params.formId)
            .then(function(forms){
                res.json(forms);
            });
    }

    function deleteForm(req, res) {
        formModel
            .deleteFormById(req.params.formId)
            .then(function(status){
                res.json(status);
            });
    }

    function createFormForUser(req, res) {
        formModel
            .createForm(req.params.userId, req.body)
            .then(function(form){
                res.json(form);
            });
    }

    function updateForm(req, res) {
        formModel
            .updateForm(req.params.formId, req.body)
            .then(function(sheet){
                res.json(sheet);
            });
    }

}