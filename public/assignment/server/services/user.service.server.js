/**
 * Created by sneha_000 on 3/14/2016.
 */
module.exports = function(app, userModel) {
    app.post("/api/assignment/register", register);
    app.post("/api/assignment/user", findUserByCredentials);
    app.get("/api/assignment/alluser", findAllUsers);

    function register(request, response) {
        var user = request.body;
        user = userModel.createUser(user);
        request.session.currentUser = user;
        request.json(user);
    }

    function findUserByCredentials(request, response) {
        console.log(request.body);
        var credentials = request.body;
        response.send(200);
    }

    function findAllUsers(request, response) {
        var users = userModel.findAllUsers;
        response.json(users);
    }

}