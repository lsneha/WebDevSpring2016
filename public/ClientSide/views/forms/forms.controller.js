(function(){
    "use strict";
    angular
        .module("FormBuilderApp")
        .controller("FormController", FormController);

    function FormController($rootScope, FormService, $scope)
    {
        $scope.addForm = addForm;
        $scope.deleteForm = deleteForm;
        $scope.selectForm = selectForm;
        $scope.updateForm = updateForm;

        $scope.forms = [
            {"_id": "000", "title": "Contacts", "userId": 123},
            {"_id": "010", "title": "ToDo",     "userId": 123},
            {"_id": "020", "title": "CDs",      "userId": 234}
        ];

        function addForm(formName) {
            var newForm = {
                "_id": "022",
                "title": formName,
                "userId": 123
            }
            $scope.forms.push(newForm);
            console.log($scope.forms);
        }

        function updateForm(formName)
        {
            console.log("Inside update form");
            $scope.forms[$scope.selectedFormIndex].title = formName;
        }

        function selectForm(index)
        {
            $scope.selectedFormIndex = index;
            $scope.newForm = {
                title: $scope.forms[index].title,
                _id: "000",
                userId: 123
            };
        }

        function deleteForm(formName)
        {
            $scope.newForm = {
                title: formName,
                _id: "000",
                userId: 123
            };
            var index = $scope.forms.indexOf($scope.newForm);
            $scope.forms.splice(index, 1);
        }
    }

})();