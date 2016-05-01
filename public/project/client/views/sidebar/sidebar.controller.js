(function() {
    "use strict";
    angular
        .module("ProjectApp")
        .controller("SidebarController", SidebarController);

    function SidebarController($scope) {

        $scope.getClass = function (path) {

            if ($location.path().substr(0, path.length) === path) {
                return 'active';
            } else {
                return '';
            }
        }
    }
})();