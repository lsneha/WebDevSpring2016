(function(){
    "use strict";
    angular
        .module("MyProjectApp")
        .config(function($routeProvider){
            $routeProvider
                .when("/", {
                    templateUrl: "views/home/home.view.html",
                    controller: "HomeController"
                })
                .when("/home", {
                    templateUrl: "views/home/home.view.html"
                })
                .when("/profile", {
                    templateUrl: "views/users/profile.view.html",
                    controller: "ProfileController"
                })
                .when("/mybooks", {
                    templateUrl: "views/users/mybooks.view.html"
                })
                /*.when("/details/:someID", {
                    templateUrl: "views/details/details.view.html",
                    controller: "DetailsController"
                })*/
                .when("/adminHm", {
                    templateUrl: "views/users/admin.view.html"
                })
                .when("/search", {
                    templateUrl: "views/details/details.view.html",
                    controller: "DetailsController"
                })
                .when("/search/:title", {
                    templateUrl: "views/details/details.view.html",
                    controller: "DetailsController"
                })
                .otherwise({
                    redirectTo: "/home"
                });
        });
})();