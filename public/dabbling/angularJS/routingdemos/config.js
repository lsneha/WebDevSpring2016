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
            .when("/search/:title", {
                templateUrl: "search/search.view.html",
                controller: "SearchController"
            })
            .when("/details/:imdbID", {
                templateUrl: "details/details.view.html",
                controller: "DetailsController"
            })
            .otherwise({
                redirectTo: "/home"
            })
    }
})();