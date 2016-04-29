var passport         = require('passport');
var LocalStrategy    = require('passport-local').Strategy;
var mongoose         = require('mongoose');

module.exports = function(app, db, mongoose) {

    "use strict";

    var userModel = require("../models/user.model.server.js")(db, mongoose);

    app.post('/api/project/user', createUser);
    app.get("/api/project/user", findAllUsers);
    app.put("/api/project/user/:id", updateUser);
    app.delete("/api/project/user/:id", deleteUser);
    app.get("/api/project/user/username/:username", findUserByUsername);
    app.get("/api/project/userMovies/:username", getMoviesForUser);
    app.put("api/project/movie/:userId", addMovie);

    app.post("/api/project/login", passport.authenticate('local'), login);
    app.get("/api/project/loggedin", loggedin);
    app.post("/api/project/logout", logout);
    app.post("/api/project/register", register);

    passport.use(new LocalStrategy(localStrategy));
    passport.serializeUser(serializeUser);
    passport.deserializeUser(deserializeUser);

    function isLoggedIn(req, res, next) {

        // if user is authenticated in the session, carry on
        if (req.isAuthenticated())
            return next();

        // if they aren't redirect them to the home page
        res.redirect('/');
    }

    function localStrategy(username, password, done) {
        userModel
            .findUserByCredentials({username: username, password: password})
            .then(
                function(user) {
                    if (!user) { return done(null, false); }
                    return done(null, user);
                },
                function(err) {
                    if (err) { return done(err); }
                }
            );
    }

    function serializeUser(user, done) {
        done(null, user);
    }

    function deserializeUser(user, done) {
        userModel
            .findUserById(user._id)
            .then(
                function(user){
                    done(null, user);
                },
                function(err){
                    done(err, null);
                }
            );
    }

    function login(req, res) {
        var user = req.user;
        res.json(user);
    }

    function loggedin(req, res) {
        console.log(req.body, null, 2);
        //res.send(req.isAuthenticated() ? req.user : '0');
        res.send(req.user);
    }

    function logout(req, res) {
        req.logOut();
        res.send(200);
    }

    function register(req, res) {
        console.log("inside server register...");
        var newUser = req.body;
        newUser.roles = ['student'];
        newUser.movies = ['movie1', 'movie2'];

        userModel
            .findUserByUsername(newUser.username)
            .then(
                function(user){
                    if(user) {
                        console.log("line 178");
                        res.json(null);
                    } else {
                        console.log("line 181");
                        console.log("encrypted password: "+newUser.password);
                        return userModel.createUser(newUser);
                    }
                },
                function(err){
                    console.log("user server service error: "+err);
                    res.status(400).send(err);
                }
            )
            .then(
                function(user){
                    if(user){console.log("line 194");
                        req.login(user, function(err) {
                            if(err) {
                                console.log("line 197: "+err);
                                res.status(400).send(err);
                            } else {
                                console.log("line 200: "+user);
                                res.json(user);
                            }
                        });
                    }
                },
                function(err){
                    console.log("error 207: "+err);
                    res.status(400).send(err);
                }
            );
    }

    function addMovie(req, res) {
        userModel
            .addMovie(req.params.username, req.body)
            .then(
                function (user) {
                    console.log("ss success");
                    res.json(user);
                },
                function () {
                    console.log("ss failed");
                    res.status(400).send(err);
                }
            );
    }

    function getMoviesForUser(req, res) {
        console.log("server service get movies: "+req.params.username);
        userModel
            .getMoviesForUser(req.params.username)
            .then(
                function (user) {
                    console.log("ss success");
                    res.json(user);
                },
                function () {
                    console.log("ss failed");
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
        var newUser = req.body;
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