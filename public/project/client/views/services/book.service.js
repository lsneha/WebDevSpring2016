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
            var config = {headers:  {
                'Access-Control-Allow-Origin': 'http://localhost:63342'
            }};
            $http
                .get("https://www.goodreads.com/search.xml?key=G9L1n2xWsxGDJxXV6yiQg&q="+title, config)
                .success(callback);
        }

        function findBookById(id) {

        }
    }
})();