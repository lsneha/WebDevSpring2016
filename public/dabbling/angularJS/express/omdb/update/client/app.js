(function () {
    angular
        .module("GetMoviesApp", [])
        .controller("GetMoviesController", GetMoviesController);

    function GetMoviesController ($scope, MovieService) {

        $scope.getMovieById = getMovieById;
        $scope.deleteMovieById = deleteMovieById;
        $scope.createMovie  = createMovie;
        $scope.updateMovie = updateMovie;

        function init () {
            MovieService
                .getAllMovies()
                .then(renderAllMovies, renderError);
        }
        init();

        function updateMovie (id, movie) {
            MovieService
                .updateMovie(id, movie)
                .then(function () {
                    return MovieService.getAllMovies();
                })
                .then(renderAllMovies, renderError);
        }

        function deleteMovieById (id) {
            MovieService
                .deleteMovieById(id)
                .then(function () {
                    return MovieService.getAllMovies();
                })
                .then(renderAllMovies, renderError);
        }

        function createMovie (movie) {
            MovieService
                .createMovie(movie)
                .then(function () {
                    return MovieService.getAllMovies();
                })
                .then(renderAllMovies, renderError);
        }

        function getMovieById (id) {
            MovieService
                .getMovieById(id)
                .then(renderMovie, renderError);
        }

        function renderAllMovies (response) {
            $scope.movies = response.data;
        }

        function renderMovie (response) {
            $scope.movie = response.data;
        }

        function renderError (error) {
            $scope.error = "Unable to render movie";
        }
    }
})();