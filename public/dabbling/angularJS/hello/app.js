/**
 * Created by sneha_000 on 3/11/2016.
 */
var app = angular.module("HelloWorldApp", []);

app.controller("HelloWorldController", HelloWorldController);

function HelloWorldController($scope) {
    $scope.hello = "Hello World from AngularJS";
}