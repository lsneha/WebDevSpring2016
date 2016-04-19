module.exports = function(app) {
    var userModel    = require("./models/user.model.server.js")();
    var bookModel   = require("./models/book.model.server.js")();

    require("./services/user.service.server.js") (app, bookModel, userModel);
    require("./services/book.service.server.js")(app, bookModel, userModel);
}