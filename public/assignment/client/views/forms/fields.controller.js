(function() {
    "use strict";
    angular
        .module("FormBuilderApp")
        .controller("FieldsController", FieldsController);

    function FieldsController($rootScope)
    {
        $rootScope.isUserLoggedIn = true;
    }

})();