/**
 * Created by sneha_000 on 3/16/2016.
 */
(function(){
    angular
        .module("Fish360App")
        .controller("MainController", MainController);

    function MainController($location, $rootScope) {
        var vm = this;

        vm.hello = "Hello";
        vm.$location = $location;
        $rootScope.$location = $location;
    }
})();