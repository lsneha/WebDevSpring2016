(function(){
    "use strict";
    angular
        .module("FormBuilderApp")
        .controller("FormController", FormController);

    function FormController($rootScope, FormService, $scope)
    {
        var vm = this;
        vm.forms = [
            {"_id": "000", "title": "Contacts", "userId": 123},
            {"_id": "010", "title": "ToDo",     "userId": 123},
            {"_id": "020", "title": "CDs",      "userId": 234}
        ];
        console.log("first" + vm.forms);
        $rootScope.isUserLoggedIn = true;
        console.log($rootScope.isUserLoggedIn);

        function init() {
            FormService.findAllFormsForUser($scope.currentUser, function(forms){
                //vm.forms = forms;
                console.log(vm.forms);
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