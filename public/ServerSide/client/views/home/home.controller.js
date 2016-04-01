/**
 * Created by sneha_000 on 2/15/2016.
 */
(function(){
    "use strict";
    angular
        .module("FormBuilderApp")
        .controller("HomeController", HomeController);

    function HomeController($scope)
    {
        $scope.isUserLoggedIn = false;
        /*user lookup*/
    }

})();