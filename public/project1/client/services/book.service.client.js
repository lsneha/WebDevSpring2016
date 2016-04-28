(function(){
    angular
        .module("MyprojectApp")
        .factory("BookService", bookService);

    function bookService($http, $q) {
        var api = {
            findBooksByTitle: findBooksByTitle,
            findBookById: findBookById
        };
        return api;

        function findBooksByTitle(title) {
            console.log("Inside client book service..");
            var deferred = $q.defer();

            $http.get("/api/project/book/"+title)
                .success(function(books){
                    deferred.resolve(books);
                });

            return deferred.promise;
        }

        function findBookById(id) {
            var deferred = $q.defer();

            $http.get("/api/project/book/"+id)
                .success(function(book){
                    deferred.resolve(book);
                });

            return deferred.promise;
        }
    }
})();