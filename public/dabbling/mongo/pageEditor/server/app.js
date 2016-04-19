module.exports = function(app, mongoose, db) {
    console.log("Inside server app js");
    var model = require("./models/page.model.js")(mongoose, db);
    require("./services/page.service.server.js")(app, model);
};