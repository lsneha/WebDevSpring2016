/*
(function(){
    angular
        .module("MyProjectApp")
        .factory("BookService", BookService);

    function BookService($http) {
        var api = {
            findBooksByTitle: findBooksByTitle,
            findBookById: findBookById
        };
        return api;

        function findBooksByTitle(title, callback) {
            console.log("Inside views book service");
            var config = {headers:  {
                'Access-Control-Allow-Origin': 'http://localhost:63342'
            }};
            $http
                .get("https://openlibrary.org/api/books?bibkeys=ISBN:0451526538")
                .success(callback);
        }

        function findBookById(id) {

        }
    }
})();*/
