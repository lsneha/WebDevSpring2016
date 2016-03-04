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
            findAllUsers : findAllUsers,
            findUserById : findUserById
        };

        return service;

        function findUserByCredentials(username, password, callback)
        {
            return "callback";
        }

        function findAllUsers(callback)
        {
            return "callback";
        }

        function createUser(user, callback)
        {
            return "callback";
        }

        function deleteUserById(userId, callback)
        {
            return "callback";
        }

        function updateUser(userId, user, callback)
        {
            return "callback";
        }

    }
})();