(function () {
    angular
        .module ("GetMoviesApp")
        .factory ("MovieService", MovieService);

    function MovieService ($http) {
        var api = {
            getAllMovies: getAllMovies,
            getMovieById: getMovieById
        };
        return api;

        function getAllMovies () {
            return $http.get ("/api/experiments/express/omdb/getmovies/movie");
            //$http.get ("/api/experiments/express/omdb/getmovies/movie")
            //    .success(callback);
        }

        function getMovieById (id) {
            return $http.get ("/api/experiments/express/omdb/getmovies/movie/" + id);
        }
    }
})();