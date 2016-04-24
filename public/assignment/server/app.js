module.exports = function(app, db, mongoose)  {
    var userModel    = require("./models/user.model.server.js")(db, mongoose);
    var formModel   = require("./models/form.model.server.js")(db, mongoose);

    var userService  = require("./services/user.service.server.js") (app, formModel, userModel);
    var movieService = require("./services/field.service.server.js")(app, formModel, userModel);
}