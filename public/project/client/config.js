(function(){
    "use strict";
    angular
        .module("ProjectApp")
        .config(function($routeProvider){
            $routeProvider
                .when("/", {
                    templateUrl: "views/home/home.view.html",
                    controller: "HomeController"
                })
                .when("/home", {
                    templateUrl: "views/home/home.view.html",
                    controller: "HomeController"
                })
                .when("/login", {
                    templateUrl: "views/login/login.view.html",
                    controller: "LoginController"
                })
                .when("/profile", {
                    templateUrl: "views/profile/profile.view.html",
                    controller: "ProfileController"
                })
                .when("/searchResults", {
                    templateUrl: "views/search/searchresults.view.html"
                })
                .when("/details/:imdbID", {
                    templateUrl: "views/details/details.view.html",
                    controller: "DetailsController"
                })
                .otherwise({
                    redirectTo: "/home"
                });
        });


})();