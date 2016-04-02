module.exports = function(app, fieldModel) {

    "use strict";

    app.get("/api/assignment/form/:formId/field", findFieldsForForm);
    app.get("/api/assignment/form/:formId/field/:fieldId", findFieldById);
    app.delete("/api/assignment/form/:formId/field/:fieldId", deleteField);
    app.post("/api/assignment/form/:formId/field", createField);
    app.put("/api/assignment/form/:formId/field/:fieldId", updateField);

    function findFieldsForForm(req, res) {
        var id = req.body;
        var fields = fieldModel.findFieldsForForm(id);
        res.json(fields);
    }

    function findFieldById(req, res) {
        var id = req.body;
        var field = fieldModel.findFieldById(id);
        res.json(field);
    }

    function deleteField(req, res) {
        var status = fieldModel.deleteFieldById(req.body.formId, req.body.fieldId);
        res.json(status);
    }

    function createField(req, res) {
        var fields = fieldModel.createField(req.body.formId, req.body.field);
        res.json(fields);
    }

    function updateField(req, res) {
        var fields = fieldModel.updateField(req.body.formId, req.body.fieldId, req.body.newField);
        res.json(fields);
    }

}