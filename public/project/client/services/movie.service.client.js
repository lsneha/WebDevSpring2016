(function(){
    angular
        .module("ProjectApp")
        .factory("MovieService", MovieService);

    function MovieService($http){
        var api = {
            findMoviesByTitle: findMoviesByTitle,
            findMovieByImdbId: findMovieByImdbId
        }

        return api;

        function findMoviesByTitle(title){
            return $http.get("/api/project/movieTitle", title);
        }

        function findMovieByImdbId(imdbId){
            return $http.get("http://www.omdbapi.com/?i="+imdbId);
        }

    }
})();