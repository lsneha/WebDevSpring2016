/**
 * Created by sneha_000 on 3/3/2016.
 */
(function()
{
    angular
        .module("FormBuilderApp")
        .factory("UserService", UserService);

    function UserService()
    {
        var users = [
            {	"_id":123, "firstName":"Alice",            "lastName":"Wonderland",              "username":"alice",  "password":"alice",   "roles": ["student"]		},
            {	"_id":234, "firstName":"Bob",              "lastName":"Hope",
                "username":"bob",    "password":"bob",     "roles": ["admin"]		},
            {	"_id":345, "firstName":"Charlie",          "lastName":"Brown",                   "username":"charlie","password":"charlie", "roles": ["faculty"]		},
            {	"_id":456, "firstName":"Dan",              "lastName":"Craig",                   "username":"dan",    "password":"dan",     "roles": ["faculty", "admin"]},
            {	"_id":567, "firstName":"Edward",           "lastName":"Norton",                  "username":"ed",     "password":"ed",      "roles": ["student"]		}
        ];

        var service = {
            findUserByCredentials: findUserByCredentials,
            findAllUsers : findAllUsers,
            createUser : createUser,
            deleteUserById: deleteUserById,
            updateUser: updateUser
        };

        return service;

        function findUserByCredentials(username, password, callback)
        {
            users.forEach(function(result, index) {
                if((result[username] === username) && (result[password] === password)) {
                    callback(users[index]);
                }
            });
        }

        function findAllUsers(callback)
        {
            return callback(users);
        }

        function createUser(user, callback)
        {
            var newUser = {
                _id: users._id,
                firstName: users.firstName,
                lastName: users.lastName,
                username: users.username,
                password: users.password,
                roles: users.roles
            }
            users.push(newUser);
            callback(users);
        }

        function deleteUserById(userId, callback)
        {
            findAndRemove(users, _id, userId);
            callback(users);
        }

        function findAndRemove(array, property, value) {
            array.forEach(function(result, index) {
                if(result[property] === value) {
                    //Remove from array
                    array.splice(index, 1);
                }
            });
        }

        function updateUser(userId, user, callback)
        {
            users.forEach(function(result, index) {
                if(result[_id] === userId) {
                    users[index] = {
                        _id: user._id,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        username: user.username,
                        password: user.password,
                        roles: user.roles
                    };
                    callback(users[index]);
                }
            });
        }

    }
})();