/**
 * Created by sneha_000 on 3/3/2016.
 */
(function(){
    "use strict";
    angular
        .module("FormBuilderApp")
        .controller("SidebarController", SidebarController);

    function SidebarController($scope) {
        console.log($scope.isUserLoggedIn);

        $scope.getClass = function (path) {
            console.log($location.path());
            console.log(path);

            if ($location.path().substr(0, path.length) === path) {
                return 'active';
            } else {
                return '';
            }
        }
    }
})();