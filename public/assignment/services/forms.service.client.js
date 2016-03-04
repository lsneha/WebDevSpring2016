/**
 * Created by sneha_000 on 3/4/2016.
 */
(function()
{
    angular
        .module("FormBuilderApp")
        .factory("FormService", FormService);

    function FormService()
    {
        var forms = [
            {"_id": "000", "title": "Contacts", "userId": 123},
            {"_id": "010", "title": "ToDo",     "userId": 123},
            {"_id": "020", "title": "CDs",      "userId": 234}
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
            return "callback";
        }

        function findAllFormsForUser(userId, callback)
        {
            return "callback";
        }

        function deleteFormById(formId, callback)
        {
            return "callback";
        }

        function updateFormById(formId, newForm, callback)
        {
            return "callback";
        }
    }
})();