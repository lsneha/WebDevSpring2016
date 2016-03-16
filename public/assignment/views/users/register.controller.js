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
        vm.users = [];
	
        $scope.$location = $location;
        $scope.isUserLoggedIn = false;

	    function init() {
            UserService.findAllUsers(function(users){
                vm.users = UserService.users;
            });
        }

        function register(user) {
            $location.path('#/profile');
		    UserService.createUser(user, function(users) {
			    vm.users = users;
		}) 
	}

	init();
    }

})();