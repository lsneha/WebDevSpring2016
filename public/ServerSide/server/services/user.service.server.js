/**
 * Created by sneha_000 on 3/14/2016.
 */
var mock = require("./user.mock.json");

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

    function register(request, response) {
        var user = request.body.user;
        user = userModel.createUser(user);
        request.session.currentUser = user;
        response.json(user);
    }

    function findUserByCredentials(request, response) {
        var credentials = request.body;
        var users = userModel.findUserByCredentials(credentials);
        response.send(200);
    }

    function findAllUsers(request, response) {
        var users = userModel.findAllUsers();
        response.json(users);
    }

    function findUserById(request, response) {
        var id = request.body;
        var user = userModel.findUserById(id);
        response.json(user);
    }

    function findUserByUsername(request, response) {
        var username = request.body;
        var user = userModel.findUserByUsername(username);
        response.json(user);
    }

    function updateUser(request, response) {
        var user = userModel.updateUser(request.body.userId, request.body.user);
        response.json(user);
    }

    function deleteUser(request, response) {
        var userId = request.body.userId;
        var users = userModel.deleteUser(userId);
        response.json(users);
    }

    function login(request, response) {
        var credentials = request.body;
        var user = userModel.findUserByCredentials(credentials);
        request.session.currentUser = user;
        response.json(user);
    }

    function loggedin(request, response) {
        response.json(request.session.currentUser);
    }

    function logout(request, response) {
        request.session.destroy();
        response.send(200);
    }

}