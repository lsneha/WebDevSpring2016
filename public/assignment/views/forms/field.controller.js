/**
 * Created by sneha_000 on 3/18/2016.
 */
(function(){
    "use strict";
    angular
        .module("FormBuilderApp")
        .controller("FieldController", FieldController);

    function FieldController($scope, $routeParams)
    {
        $scope.isUserLoggedIn = true;
        var userId = $routeParams.userId;
        var formId = $routeParams.formId;

        function addField(fieldType) {

        }

        function deleteField(field) {

        }
    }

})();