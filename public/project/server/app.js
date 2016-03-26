/**
 * Created by sneha_000 on 3/25/2016.
 */
module.exports = function(app) {
    var userModel    = require("./models/user.model.server.js")();
    var bookModel   = require("./models/book.model.server.js")();

    var userService  = require("./services/user.service.server.js") (app, bookModel, userModel);
    var movieService = require("./services/book.service.server.js")(app, bookModel, userModel);
}