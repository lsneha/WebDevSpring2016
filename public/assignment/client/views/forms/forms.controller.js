/**
 * Created by sneha_000 on 2/15/2016.
 */
(function(){
    "use strict";
    angular
        .module("FormBuilderApp")
        .controller("FormController", FormController);

    function FormController($scope, FormService, UserService)
    {
        $scope.isUserLoggedIn = true;

        var user = UserService.getCurrentUser();
        $scope.forms = FormService.findAllFormsForUser(user._id);

        function addForm(form) {
            var newForm = {
                title: form.title
            }
            FormService.createFormForUser(user._id, newForm);
            $scope.forms = FormService.findAllFormsForUser(user._id);
            $scope.form = null;
        }

        function deleteForm(index) {
            FormService.deleteFormById($scope.forms[index]._id);
            $scope.forms = FormService.findAllFormsForUser(user._id);
        }

        function selectForm(index){
            $scope.form = {
                _id: $scope.forms[index]._id,
                title: $scope.forms[index].title,
                userId: $scope.forms[index].userId
            };
        }

    }

})();