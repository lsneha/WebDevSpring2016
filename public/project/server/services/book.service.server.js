/**
 * Created by sneha_000 on 3/25/2016.
 */
module.exports = function(app, bookModel, userModel) {
    app.get("/api/project/readersinc/search/:id", findBookById);
    app.get("/api/project/readersinc/search/:title", findBooksByTitle);

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