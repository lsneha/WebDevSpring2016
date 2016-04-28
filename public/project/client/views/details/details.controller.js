(function(){
    angular
        .module("ProjectApp")
        .controller("DetailsController", DetailsController);

    function DetailsController($routeParams, $scope, MovieService){

        function init() {
            var imdbID = $routeParams.imdbID;
            MovieService.findMovieByImdbId(imdbID).success(renderMovie);
        }

        function renderMovie(response){
            $scope.movie = response;
        }

        init();
    }
})();