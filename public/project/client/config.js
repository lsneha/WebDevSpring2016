(function(){
    "use strict";
    angular
        .module("ProjectApp")
        .config(function($routeProvider){
            $routeProvider
                .when("/", {
                    templateUrl: "views/login/login.view.html",
                    controller: "LoginController"
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
                .when("/admin", {
                    templateUrl: "views/admin/admin.view.html",
                    controller: "AdminController"
                })
                .when("/searchResults", {
                    templateUrl: "views/search/searchresults.view.html",
                    controller: "SRController"
                })
                .when("/details/:imdbID", {
                    templateUrl: "views/details/details.view.html",
                    controller: "DetailsController"
                })
                .otherwise({
                    redirectTo: "/login"
                });
        });


})();