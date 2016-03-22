/**
 * Created by sneha_000 on 3/11/2016.
 */
(function(){
    angular
        .module("WhiteBoardApp", ["ngRoute"])
        .config(function($routeProvider){
            $routeProvider
                .when("/", {
                    templateUrl: "home.html"
                })
                .when("/profile", {
                    templateUrl: "profile.html"
                })
                .when("/admin", {
                    templateUrl: "admin.html"
                })
                .otherwise({
                    redirectTo: "/"
                });
        });
})();