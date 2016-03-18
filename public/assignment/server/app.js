/**
 * Created by sneha_000 on 3/14/2016.
 */
module.exports(app, db, mongoose){
    var userModel = require("./models/user.model.js")(app);
    var userService = require("./services/user.services.server.js")(app, userModel);
}