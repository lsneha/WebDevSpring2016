/**
 * Created by sneha_000 on 2/28/2016.
 */
(function(){
    angular
        .module("FormBuilderApp", ["ngRoute"])
        .controller("MainController", function($scope, $location) {
            $scope.$location = $location;
        })

})();