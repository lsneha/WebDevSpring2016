(function () {
    angular
        .module("MyApp", [])
        .controller("MyController", MyController);

    function MyController($scope) {
        //var vm = this;
        $scope.courseNames = ["Course 1", "Course 2", "Course 3"];
    }

})();