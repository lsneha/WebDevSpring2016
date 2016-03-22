/**
 * Created by sneha_000 on 3/17/2016.
 */
(function(){
    angular
        .module("MovieApp")
        .controller("SearchController", searchController);

    function searchController(MovieService, $scope, $http, $routeParams, $location) {

        var title = $routeParams.title;

        if(title) {
            search(title);
        }

        //event handler declarations
        $scope.search = search;

        //event handler implementation
        function search(title){
            console.log(title);
            $location.url("/search/"+title);
            /*$http.get("http://www.omdbapi.com/?s="+title)
                .success(render);*/
            MovieService.findMoviesByTitle(title, render);
        }

        function render(response) {
            console.log(response);
            $scope.data = response;
        }
    }
})();