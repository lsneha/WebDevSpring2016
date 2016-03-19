/**
 * Created by sneha_000 on 2/15/2016.
 */
(function(){
    "use strict";
    angular
        .module("FormBuilderApp")
        .controller("AdminController", AdminController);

    function AdminController($scope)
    {
        $scope.isUserLoggedIn = true;
    }

})();