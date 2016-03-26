(function(){
    angular
        .module("MyProjectApp")
        .factory("UserService", userService);

    function userService($http, $rootScope) {
        var api = {
            login: login,
            setCurrentUser: setCurrentUser,
            getCurrentUser: getCurrentUser,
            register: register,
            logout: logout,
            getProfile: getProfile
        };
        return api;

        function getProfile() {
            return $http.get("/api/project/readersinc/profile/"+$rootScope.currentUser._id);
        }

        function register(user) {
            return $http.post("/api/project/readersinc/register", user);
        }

        function logout() {
            return $http.post("/api/project/readersinc/logout");
        }

        function getCurrentUser() {
            return $http.get("/api/project/readersinc/loggedin");
        }

        function setCurrentUser(user) {
            $rootScope.currentUser = user;
        }

        function login(credentials) {
            return $http.post("/api/project/readersinc/login", credentials);
        }
    }
})();