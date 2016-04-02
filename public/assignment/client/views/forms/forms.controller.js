(function() {
    "use strict";
    angular
        .module("FormBuilderApp")
        .controller("FormController", FormController);

    function FormController($rootScope, FormService) {
        $rootScope.isUserLoggedIn = true;

        var model = this;

        model.createFormForUser = createFormForUser;
        model.findAllFormsForUser = findAllFormsForUser;
        model.deleteFormById = deleteFormById;
        model.updateFormById = updateFormById;
        model.findFormById = findFormById;

        model.forms = FormService.findAllFormsForUser($rootScope.currentUser._id);

        function createFormForUser(form) {
            FormService
                .createFormForUser($rootScope.currentUser._id, form)
                .then(function(response){
                    model.forms = FormService.findAllFormsForUser($rootScope.currentUser._id);
                    model.form = null;
                });
        }

        function findAllFormsForUser() {
            FormService
                .findAllFormsForUser($rootScope.currentUser._id)
                .then(function(response){
                    model.forms = FormService.findAllFormsForUser($rootScope.currentUser._id);
                });
        }

        function deleteFormById(formId) {
            FormService
                .deleteFormById(formId)
                .then(function(response){
                    model.forms = FormService.findAllFormsForUser($rootScope.currentUser._id);
                });
        }

        function updateFormById(formId, form){
            FormService
                .updateFormById(formId, form)
                .then(function(response){
                    model.forms = FormService.findAllFormsForUser($rootScope.currentUser._id);
                    model.form = FormService.findFormById(formId);
                });
        }

        function findFormById(formId) {
            FormService
                .findFormById(formId)
                .then(function(response){});
        }
    }
})();