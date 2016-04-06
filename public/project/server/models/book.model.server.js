module.exports = function() {
    var books = [];
    var api = {
        findBooksByTitle: findBooksByTitle,
        findBookById: findBookById
    };
    return api;

    function findBooksByTitle (title) {
        var books = [];
        for (var u in books) {
            if (u.title == title)
                books.append(u)
        }
        return books;
    }

    function findBookById(id) {
        var books = [];
        for (var u in books) {
            if (u.id == id)
                return u;
        }
        return null;
    }
}