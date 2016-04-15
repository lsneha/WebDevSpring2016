(function(){
    "use strict";
    angular
        .module("FormBuilderApp")
        .controller("AdminController", AdminController);

    function AdminController($rootScope)
    {
        $rootScope.isUserLoggedIn = true;
        console.log($rootScope.isUserLoggedIn);
        console.log($rootScope.isAdmin = true);
    }

})();