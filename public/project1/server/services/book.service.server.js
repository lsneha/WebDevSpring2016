module.exports = function(app) {

    app.get("/api/project/book/:title", findBooksByTitle);

    function findBooksByTitle(title, callback) {
        console.log("Inside server side book service...");
        console.log("Title: "+title);
        var config = {headers:  {
            'Access-Control-Allow-Origin': 'http://localhost:3000'
        }};
        $http
            .get("http://www.omdbapi.com/?s="+title, config)
            .success(callback);
    }

}