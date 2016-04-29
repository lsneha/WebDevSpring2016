(function(){
    "use strict";
    angular
        .module("ProjectApp")
        .controller("HeaderController", HeaderController);

    function HeaderController($scope, $http, $routeParams, $location, $rootScope) {

        function init(){
            console.log("Header controller initalized");
            function logout() {
                $rootScope.currentUser = null;
                $location.url("/home");
            }
        }

        var title = $routeParams.title;

        if(title) {
            search(title);
        }

        //event handler declarations
        $scope.search = search;

        function search(title){
            console.log(title);
            $http.get("http://www.omdbapi.com/?s="+title)
             .success(render);
            //MovieService.findMoviesByTitle(title, render);
        }

        function render(response) {
            if(response) {
                $rootScope.data = response;
            }

            $location.url("/searchResults");
        }

        init();
    }
})();