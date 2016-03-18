/**
 * Created by sneha_000 on 3/17/2016.
 */
(function() {
    angular
        .module("MovieApp")
        .controller("NavController", NavController);

    function NavController($location, $scope) {
        $scope.$location = $location;
    }
})();