/**
 * Created by sneha_000 on 3/11/2016.
 */
(function(){
    angular
        .module("WhiteBoardApp")
        .config(function($routeProvider){
            $routeProvider
                .when("/", {
                    templateUrl: "home/home.view.html",
                    controller: "HomeController"
                })
                .when("/profile", {
                    templateUrl: "profile/profile.view.html",
                    controller: "ProfileController"
                })
                .when("/admin", {
                    templateUrl: "admin/admin.view.html",
                    controller: "AdminController"
                })
                .otherwise({
                    redirectTo: "/"
                });
        });
})();