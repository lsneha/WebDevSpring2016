var passport         = require('passport');
var LocalStrategy    = require('passport-local').Strategy;
var mongoose         = require('mongoose');

module.exports = function(app) {

    "use strict";

    var userModel = require("../models/user.model.server.js")();
    var auth = authorized;

    app.post('/api/project/user', auth, createUser);
    app.get("/api/project/user", auth, findAllUsers);
    //app.get("/api/project/user/:id", auth, findUserById);
    //app.get("/api/project/user/username/:username", auth, findUserByUsername);
    //app.get("/api/project/user/username/:username/password/:password", auth, findUserByCredentials);
    app.put("/api/project/user/:id", auth, updateUser);
    app.delete("/api/project/user/:id", auth, deleteUser);

    //security project
    app.post("/api/project/login", passport.authenticate('local'), login);
    app.get("/api/project/loggedin", loggedin);
    app.post("/api/project/logout", logout);
    app.post("/api/project/register", register);

    //admin tasks
    app.post("/api/project/admin/user", ensureAdmin, createUserByAdmin);
    app.get("/api/project/admin/user", ensureAdmin, getAllUsers);
    app.get("/api/project/admin/user/:userId", ensureAdmin, findUserByIdForAdmin);
    app.delete("/api/project/admin/user/:userId", ensureAdmin, deleteUserByAdmin);
    app.put("/api/project/admin/user/:userId", ensureAdmin, updateUserByAdmin);

    passport.use(new LocalStrategy(localStrategy));
    passport.serializeUser(serializeUser);
    passport.deserializeUser(deserializeUser);

    function findUserByIdForAdmin(req, res) {
        findUserById(req, res);
    }

    function deleteUserByAdmin(req, res) {
        deleteUser(req, res);
    }

    function updateUserByAdmin(req, res) {
        updateUser(req, res);
    }

    function ensureAdmin(req, res, next) {
        if (req.isAuthenticated()) {
            userModel
                .findById(req.user._id)
                .then(function(user){
                    delete user.password;
                    if(user.roles.indexOf("admin") > -1) {
                        return next();
                    } else {
                        res.redirect('/#/login');
                    }
                })
        }
    }

    function getAllUsers(req, res){
        userModel
            .findAllUsers()
            .then(
                function (users) {
                    console.log("Success finding users in server service");
                    res.json(users);
                },
                function () {
                    console.log("Error finding users in server service");
                    res.status(400).send(err);
                }
            );
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

    function findUserByCredentials(req, res) {
        var credentials = req.body;
        var users = userModel.findUserByCredentials(credentials);
        res.send(200);
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

    function findUserById(req, res) {
        var id = req.body;
        console.log("id: "+id);
        var user = userModel.findUserById(id);
        console.log("circular user: "+user);
        res.json(user);
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
        if(!isAdmin(req.user)) {
            delete newUser.roles;
        }
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
                    //add a
                    if(user == null) {
                        // create a new user
                        return userModel.createUser(newUser)
                            .then(
                                // fetch all the users
                                function(){
                                    return userModel.findAllUsers();
                                },
                                function(err){
                                    res.status(400).send(err);
                                }
                            );
                        // if the user already exists, then just fetch all the users
                    } else {
                        return userModel.findAllUsers();
                    }
                },
                function(err){
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

    function createUserByAdmin(req, res) {
        createUser(req, res);
    }

    function isAdmin(user) {
        /*if(user.roles.indexOf("admin") > 0) {
            return true
        }
        return false;*/
        return true;
    }

    function authorized (req, res, next) {
        /*if (!req.isAuthenticated()) {
            res.send(401);
        } else {
            next();
        }*/
        console.log("authorized: "+req.isAuthenticated());
        console.log("Request user: "+req.user);
        next();
        /*if (!req.user) {
         res.send(401);
         } else {
         next();
         }*/
    };

}