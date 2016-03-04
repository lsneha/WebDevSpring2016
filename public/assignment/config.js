/**
 * Created by sneha_000 on 2/17/2016.
 */
(function(){
    angular
        .module("FormBuilderApp")
        .config(function($routeProvider){
            $routeProvider
                .when("/", {
                    templateUrl: "home/home.view.html",
                    controller: "HomeController"
                })
                .when("/home", {
                    templateUrl: "home/home.view.html",
                    controller: "HomeController"
                })
                .when("/profile", {
                    templateUrl: "users/profile.view.html",
                    controller: "ProfileController"
                })
                .when("/admin", {
                    templateUrl: "admin/admin.view.html"
                })
                .when("/forms", {
                    templateUrl: "forms/forms.view.html",
                    controller : "FormController"
                })
                .when("/fields", {
                    templateUrl: "forms/fields.view.html"
                })
                .when("/login", {
                    templateUrl: "users/login.view.html",
                    controller: "LoginController"
                })
                .when("/register", {
                    templateUrl: "users/register.view.html",
                    controller: "RegisterController"
                })
                .otherwise({
                    redirectTo: "/"
                });
        });
})();