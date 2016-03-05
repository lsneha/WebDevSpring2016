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
        this.forms = FormService.forms;
        console.log($rootScope.isUserLoggedIn);

    }

})();