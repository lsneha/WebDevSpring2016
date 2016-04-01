(function()
{
    angular
        .module("FormBuilderApp")
        .factory("FormService", FormService);

    function FormService()
    {
        var forms = [];
        forms = [
            {"_id": "000", "title": "Contacts", "userId": 123},
            {"_id": "010", "title": "ToDo", "userId": 123},
            {"_id": "020", "title": "CDs", "userId": 234}
        ];

        var service = {
            createFormForUser : createFormForUser,
            findAllFormsForUser : findAllFormsForUser,
            deleteFormById : deleteFormById,
            updateFormById : updateFormById
        };

        return service;

        function createFormForUser(userId, form, callback)
        {
            var newForm = {
                _id: (new Date()).getTime(),
                title: form.title,
                userId: userId
            };
            forms.push(newForm);
            callback(forms);
        }

        function findAllFormsForUser(userId, callback)
        {
            var foundForms = [];
            for (var f in forms) {
                if (forms[f].userId === userId) {
                    foundForms.push(forms[f]);
                }
            }
            return callback(foundForms);
        }

        function deleteFormById(formId, callback)
        {
            forms.forEach(function(result, index) {
                if(result[_id] === formId) {
                    //Remove from array
                    forms.splice(index, 1);
                }
            });
        }

        function updateFormById(formId, newForm, callback)
        {
            forms.forEach(function(result, index) {
                if(result[_id] === formId) {
                    forms[index] = {
                        _id: formId,
                        title: newForm.title,
                        userId: newForm.userId
                    };
                    callback(forms[index]);
                }
            });
        }
    }
})();