/**
 * Created by sneha_000 on 3/17/2016.
 */
(function(){
    angular
        .module("MovieApp")
        .controller("SearchController", searchController);

    function searchController($scope, $http) {

        //event handler declarations
        $scope.search = search;

        //event handler implementation
        function search(title){
            console.log(title);
            $http.get("http://www.omdbapi.com/?s="+title)
                .success(render);
        }

        function render(response) {
            console.log(response);
            $scope.data = response;
        }
    }
})();