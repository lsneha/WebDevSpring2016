/**
 * Created by sneha_000 on 3/16/2016.
 */
(function(){
    angular
        .module("MovieApp")     //retrieve the module MovieApp
        .config(configuration);              //configure using this function

    function configuration($routeProvider) {
        $routeProvider
            .when("/home", {
                templateUrl: "home.view.html"
            })
            .when("/search", {
                templateUrl: "search/search.view.html",
                controller: "SearchController"
            })
            .otherwise({
                redirectTo: "/home"
            })
    }
})();