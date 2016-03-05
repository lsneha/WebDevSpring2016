/**
 * Created by sneha_000 on 2/15/2016.
 */
(function(){
    "use strict";
    angular
        .module("FormBuilderApp")
        .controller("FormController", FormController);

    function FormController($scope, FormService, $rootScope)
    {
        var vm = this;
        $rootScope.isUserLoggedIn = true;

        function init() {
            FormService.findAllFormsForUser($scope.currentUser, function(forms){
                vm.forms = forms;
            });
        }

        function addForm(form) {
            FormService.createFormForUser($scope.currentUser, form, function(forms){
                vm.forms = forms;
            })
        }

        function deleteForm(index) {
            FormService.deleteFormById(index, function(forms){
                vm.forms = forms;
            });
        }

        init();
    }

})();