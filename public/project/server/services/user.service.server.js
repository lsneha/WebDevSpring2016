module.exports = function(app, bookModel, userModel) {
    app.post("/api/project/papyrus/login", login);
    app.get("/api/project/papyrus/loggedin", loggedin);
    app.post("/api/project/papyrus/logout", logout);
    app.post("/api/project/papyrus/register", register);
    app.get("/api/project/papyrus/profile/:userId", profile);

    function profile(req, res) {
        var userId = req.params.userId;
        var user = userModel.findUserById(userId);
        var bookImdbIDs = user.likes;
        var books = bookModel.findbooksByImdbIDs(bookImdbIDs);
        user.likesbooks = books;
        res.json(user);
    }

    function register(req, res) {
        var user = req.body;
        user = userModel.createUser(user);
        req.session.currentUser = user;
        res.json(user);
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