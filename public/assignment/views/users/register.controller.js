/**
 * Created by sneha_000 on 2/15/2016.
 */
(function(){
    "use strict";
    angular
        .module("FormBuilderApp")
        .controller("RegisterController", RegisterController);

    function RegisterController($scope, $location, UserService)
    {
	    var vm = this;
	
        $scope.$location = $location;
        $rootScope.isUserLoggedIn = false;
        console.log($rootScope.isUserLoggedIn);

	    function init() {
            UserService.findAllUsers(function(trips){
                vm.users = users;
            });
        }

        $scope.register = function register(user) {
            console.log($location);
            $location.path('#/profile');
		    UserService.createUser(user, function(users) {
			    vm.users = users;
		}) 
	}

	init();
    }

})();