module.exports = function(app, bookModel, userModel) {
    app.get("/api/project/book/:id", findBookById);
    app.get("/api/project/book/:title", findBooksByTitle);

    function findBooksByTitle(title, callback) {
        var config = {headers:  {
            'Access-Control-Allow-Origin': 'http://localhost:63342'
        }};
        $http
            .get("https://www.goodreads.com/search.xml?key=G9L1n2xWsxGDJxXV6yiQg&q="+title, config)
            .success(callback);
    }

    function findBookById(id, callback) {
        var config = {headers:  {
            'Access-Control-Allow-Origin': 'http://localhost:63342'
        }};
        $http
            .get("https://www.goodreads.com/search.xml?key=G9L1n2xWsxGDJxXV6yiQg&q="+id, config)
            .success(callback);
    }

}