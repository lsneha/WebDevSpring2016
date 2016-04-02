module.exports = function(app, userModel) {

    "use strict";

    app.post("/api/assignment/user", register);
    app.get("/api/assignment/user", findAllUsers);
    app.get("/api/assignment/user/:id", findUserById);
    app.get("/api/assignment/user?username=username", findUserByUsername);
    app.get("/api/assignment/user?username=alice&password=wonderland", findUserByCredentials);
    app.put("/api/assignment/user/:id", updateUser);
    app.delete("/api/assignment/user/:id", deleteUser);

    app.post("/api/assignment/user/login", login);
    app.get("/api/assignment/user/loggedin", loggedin);
    app.post("/api/assignment/user/logout", logout);

    function register(req, res) {
        var user = req.body.user;
        user = userModel.createUser(user);
        req.session.currentUser = user;
        res.json(user);
    }

    function findUserByCredentials(req, res) {
        var credentials = req.body;
        var users = userModel.findUserByCredentials(credentials);
        res.send(200);
    }

    function findAllUsers(req, res) {
        var users = userModel.findAllUsers();
        res.json(users);
    }

    function findUserById(req, res) {
        var id = req.body;
        var user = userModel.findUserById(id);
        res.json(user);
    }

    function findUserByUsername(req, res) {
        var username = req.body;
        var user = userModel.findUserByUsername(username);
        res.json(user);
    }

    function updateUser(req, res) {
        var user = userModel.updateUser(req.body.userId, req.body.user);
        res.json(user);
    }

    function deleteUser(req, res) {
        var userId = req.body.userId;
        var users = userModel.deleteUser(userId);
        res.json(users);
    }

    function login(req, res) {
        var credentials = req.body;
        var user = userModel.findUserByCredentials(credentials);
        req.session.currentUser = user;
        res.json(user);
    }

    function loggedin(req, res) {
        res.json(req.session.currentUser);
    }

    function logout(req, res) {
        req.session.destroy();
        res.send(200);
    }

}