(function(){
    "use strict";
    angular
        .module("FormBuilderApp")
        .controller("FormController", FormController);

    function FormController($rootScope, FormService, $scope)
    {
        //var vm = this;
        $scope.addForm = addForm;
        $scope.deleteForm = deleteForm;
        $scope.forms = [
            {"_id": "000", "title": "Contacts", "userId": 123},
            {"_id": "010", "title": "ToDo",     "userId": 123},
            {"_id": "020", "title": "CDs",      "userId": 234}
        ];
        //console.log("first: " + vm.forms);
        $rootScope.isUserLoggedIn = true;
        console.log($rootScope.isUserLoggedIn);

        function init() {
            /*FormService.findAllFormsForUser($scope.currentUser, function(forms){
                //vm.forms = forms;
                console.log(vm.forms);
            });*/
            // event handler declarations

        }

        function addForm(formName) {
            var newForm = {
                "_id": "022",
                "title": formName,
                "userId": 123
            }
            $scope.forms.push(newForm);
            console.log($scope.forms);
        }

        function deleteForm(index) {
            //var index = $scope.movies.indexOf(movie);
            $scope.forms.splice(index, 1);
        }

        init();
    }

})();