module.exports(app)
{
    var userModel    = require("./models/user.model.js")();
    var formModel   = require("./models/form.model.js")();

    var userService  = require("./services/user.service.js") (app, formModel, userModel);
    var movieService = require("./services/field.service.js")(app, formModel, userModel);
}
