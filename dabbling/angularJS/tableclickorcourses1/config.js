/**
 * Created by sneha_000 on 3/15/2016.
 */
(function()
{
    angular
        .module("WhiteBoardApp")
        .config(function($routeProvider)
        {
            $routeProvider
                .when("/",
                    {
                        templateUrl: "courseList/courseList.view.html",
                        controller: "courseList.controller"
                    })
                .when("/course/:index",
                    {
                        templateUrl: "courseOverview/courseOverview.view.html",
                        controller: "courseOverview.controller"
                    })
        });
})();