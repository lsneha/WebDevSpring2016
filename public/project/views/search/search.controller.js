/**
 * Created by sneha_000 on 3/25/2016.
 */
(function() {
    angular
        .module("MyProjectApp")
        .controller("SearchController", searchController);

    function searchController(BookService, $location, $scope, $http, $routeParams) {

        var title = $routeParams.title;
        if(title) {
            search(title);
        }

        //event handler declaration
        $scope.search = search;

        //event handler implementation
        function search(title) {
            console.log(title);
            $location.url("/search/"+title);
            BookService.findBooksByTitle(title, render);
            /*var config = {headers:  {
                'Access-Control-Allow-Origin': 'http://localhost:63342'
            }};
            $http
                .get("https://www.goodreads.com/search.xml?key=G9L1n2xWsxGDJxXV6yiQg&q="+title, config)
                .success(render);*/
        }

        function render(response) {
            console.log(response);
            $scope.data = response;
        }

    }

})();