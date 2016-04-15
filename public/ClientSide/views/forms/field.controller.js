(function(){
    "use strict";
    angular
        .module("FormBuilderApp")
        .controller("FieldController", FieldController);

    function FieldController($rootScope, $routeParams)
    {
        $rootScope.isUserLoggedIn = true;
        var userId = $routeParams.userId;
        var formId = $routeParams.formId;

        function addField(fieldType) {

        }

        function deleteField(field) {

        }
    }

})();