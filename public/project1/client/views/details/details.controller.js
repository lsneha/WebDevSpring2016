(function() {
    angular
        .module("MyProjectApp")
        .controller("DetailsController", detailsController);

    function detailsController($routeParams, $http, $scope) {
        var id = $routeParams.someID;
        /*$http
            .get("")
            .success(renderBook);

        function renderBook(response) {
            $scope.book = response;
        }*/

    }

})();