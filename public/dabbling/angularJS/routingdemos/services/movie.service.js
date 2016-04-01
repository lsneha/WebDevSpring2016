(function(){
    angular
        .module("MovieApp")
        .factory("MovieService", MovieService);

    function MovieService($http){
        var api = {
            findMoviesByTitle: findMoviesByTitle,
            findMovieByImdbId: findMovieByImdbId
        }

        function findMoviesByTitle(title, callback){
            $http.get("http://www.omdbapi.com/?s="+title)
                .success(callback);
        }

        return api;

    }

    function findMovieByImdbId(imdbId){

    }

})();