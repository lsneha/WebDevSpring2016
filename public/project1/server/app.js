module.exports = function(app, db, mongoose) {
    var userModel    = require("./models/user.model.server.js")();
    //var bookModel   = require("./models/book.model.server.js")();

    var userService  = require("./services/user.service.server.js") (app, userModel);
    var bookService = require("./services/book.service.server.js")(app, userModel);
}