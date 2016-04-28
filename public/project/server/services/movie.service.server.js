var request = require('request');

module.exports = function(app) {

    app.get("/api/project/movieTitle", findMoviesByTitle);

    function findMoviesByTitle(req, res) {
        res.json(http.get("http://www.omdbapi.com/?s="+req.body));
    }

}