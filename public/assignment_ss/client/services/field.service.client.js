/**
 * Created by sneha_000 on 3/18/2016.
 */
(function()
{
    angular
        .module("FormBuilderApp")
        .factory("FieldService", FieldService);

    function FieldService()
    {
        var fieldService = {
            createFieldForForm : createFieldForForm,
            getFieldsForForm : getFieldsForForm,
            getFieldForForm : getFieldForForm,
            deleteFieldFromForm : deleteFieldFromForm,
            updateField: updateField
        };

        return fieldService;

        function createFormForUser(userId, form)
        {
            var newForm = {
                _id: (new Date()).getTime(),
                title: form.title,
                userId: userId
            }
            formService.forms.push(newForm);
            var index = formService.forms.indexOf(form);
            return formService.forms[index];
        }

        function findAllFormsForUser(userId)
        {
            var foundForms = [];
            for (var f in formService.forms) {
                if (formService.forms[f].userId === userId) {
                    foundForms.push(formService.forms[f]);
                }
            }
            return foundForms;
        }

        function deleteFormById(formId)
        {
            for (var f in formService.forms) {
                if (formService.forms[f].userId === userId) {
                    formService.forms.splice(f, 1);
                }
            }
            return formService.forms;
        }

        function updateFormById(formId, newForm)
        {
            for (var f in formService.forms) {
                if (formService.forms[f]._id === formId) {
                    formService.forms[f] = newForm;
                    return formService.forms[f];
                }
            }
            return null;
        }

    }
})();