(function() {
    angular
        .module("MyProjectApp")
        .controller("MainController", MainController);

    function MainController($location, $scope, $http, $routeParams) {
        console.log("Inside main controller");
    }

})();