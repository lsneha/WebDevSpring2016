(function(){
    "use strict";
    angular
        .module("MyProjectApp")
        .controller("HeaderController", HeaderController);

    function HeaderController($location, $scope, UserService, BookService, $routeParams) {
        $scope.$location = $location;
        $scope.logout = logout;
        console.log("Inside header controller...");

        function logout() {
            UserService.setCurrentUser(null);
            $location.url("/home");
        }

        var title = $routeParams.title;
        if(title) {
            console.log("Inside of condition for title...");
            search(title);
        }

        //event handler declaration
        $scope.search = search;

        //event handler implementation
        function search(title) {
            console.log("Inside search controller...");
            console.log(title);
            BookService
                .findBooksByTitle(title)
                .then(function(books){
                    $scope.books = books;
                });
            $location.url("/search/"+title);

            console.log("after book search: "+$scope.books.count);
        }

        function render(response) {
            console.log(response);
            $scope.data = response;
        }

    }
})();