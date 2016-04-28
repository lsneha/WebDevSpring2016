var mongoose         = require('mongoose');

module.exports = function(app, db, mongoose) {

    "use strict";

    var userModel = require("../models/user.model.server.js")(db, mongoose);

    app.post('/api/project/user', createUser);
    app.get("/api/project/user", findAllUsers);
    app.put("/api/project/user/:id", updateUser);
    app.delete("/api/project/user/:id", deleteUser);
    app.get("/api/project/user/username/:username", findUserByUsername);
    app.get("/api/project/user", getMoviesForUser);
    app.put("api/project/movie/:userId", addMovie);

    function addMovie(req, res) {
        userModel
            .fin
    }

    function getMoviesForUser(req, res) {
        userModel
            .getMoviesForUser(req.body)
            .then(
                function (user) {
                    res.json(user);
                },
                function () {
                    res.status(400).send(err);
                }
            );
    }

    function findAllUsers(req, res) {
        if(isAdmin(req.user)) {
            userModel
                .findAllUsers()
                .then(
                    function (users) {
                        res.json(users);
                    },
                    function () {
                        res.status(400).send(err);
                    }
                );
        } else {
            res.status(403);
        }
    }

    function findUserByUsername(req, res) {
        var username = req.body;
        var user = userModel.findUserByUsername(username);
        res.json(user);
    }

    function deleteUser(req, res) {
        if(isAdmin(req.user)) {

            userModel
                .removeUser(req.params.id)
                .then(
                    function(user){
                        return userModel.findAllUsers();
                    },
                    function(err){
                        res.status(400).send(err);
                    }
                )
                .then(
                    function(users){
                        res.json(users);
                    },
                    function(err){
                        res.status(400).send(err);
                    }
                );
        } else {
            res.status(403);
        }
    }

    function updateUser(req, res) {
        var newUser = req.body.pop();
        console.log("newUser: "+newUser.username);
        //console.log("req: "+req);

        console.log("update user server: "+newUser.username);
        console.log("update user server user obj: "+newUser.password);
        console.log("update user server user obj: "+newUser.firstName);
        console.log("update user server user obj: "+newUser.lastName);
        console.log("update user server user obj: "+newUser.email);
        console.log("request user: "+req.user);

        if(typeof newUser.roles == "string") {
            newUser.roles = newUser.roles.split(",");
        }

        userModel
            .updateUser(req.params.id, newUser)
            .then(
                function(user){
                    return userModel.findAllUsers();
                },
                function(err){
                    res.status(400).send(err);
                }
            )
            .then(
                function(users){
                    res.json(users);
                },
                function(err){
                    res.status(400).send(err);
                }
            );
    }

    function createUser(req, res) {
        console.log("server user service");
        var newUser = req.body;
        if(newUser.roles && newUser.roles.length > 1) {
            newUser.roles = newUser.roles.split(",");
        } else {
            newUser.roles = ["student"];
        }

        // first check if a user already exists with the username
        userModel
            .findUserByUsername(newUser.username)
            .then(
                function(user){
                    // if the user does not already exist
                    if(user == null) {
                        // create a new user
                        console.log("user does not exist - user server service");
                        return userModel.createUser(newUser)
                            .then(
                                // fetch all the users
                                function(){
                                    console.log("create user success");
                                    return userModel.findAllUsers();
                                },
                                function(err){
                                    console.log("create user failure");
                                    res.status(400).send(err);
                                }
                            );
                        // if the user already exists, then just fetch all the users
                    } else {
                        console.log("user already exists, finding all users");
                        return userModel.findAllUsers();
                    }
                },
                function(err){
                    console.log("find user by username error");
                    res.status(400).send(err);
                }
            )
            .then(
                function(users){
                    res.json(users);
                },
                function(){
                    res.status(400).send(err);
                }
            )
    }
}