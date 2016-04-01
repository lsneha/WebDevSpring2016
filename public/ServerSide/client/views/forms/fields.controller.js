/**
 * Created by sneha_000 on 2/15/2016.
 */
(function(){
    "use strict";
    angular
        .module("FormBuilderApp")
        .controller("FieldsController", FieldsController);

    function FieldsController($scope)
    {
        $scope.isUserLoggedIn = true;
    }

})();