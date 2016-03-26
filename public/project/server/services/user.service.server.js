module.exports = function(app, bookModel, userModel) {
    app.post("/api/project/readersinc/login", login);
    app.get("/api/project/readersinc/loggedin", loggedin);
    app.post("/api/project/readersinc/logout", logout);
    app.post("/api/project/readersinc/register", register);
    app.get("/api/project/readersinc/profile/:userId", profile);

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