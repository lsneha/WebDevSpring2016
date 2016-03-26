(function(){
    angular
        .module("MyprojectApp")
        .factory("BookService", bookService);

    function bookService($http) {
        var api = {
            findBooksByTitle: findBooksByTitle,
            findBookById: findBookById
        };
        return api;

        function findBooksByTitle(title) {
            return $http.get("/api/project/book/"+title);
        }

        function findBookById(id) {
            return $http.get("/api/project/book/"+id);
        }
    }
})();