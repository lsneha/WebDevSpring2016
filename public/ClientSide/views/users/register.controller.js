(function(){
    "use strict";
    angular
        .module("FormBuilderApp")
        .controller("RegisterController", RegisterController);

    function RegisterController($scope, $rootScope, $location, UserService)
    {
	    var vm = this;
        vm.users = [];

        $scope.$location = $location;
        $rootScope.isUserLoggedIn = false;
        console.log($rootScope.isUserLoggedIn);

	    function init() {
            UserService.findAllUsers(function(users){
                vm.users = UserService.users;
            });
        }

        //add the created user to the $rootScope.currentUser - check syntax
        function register(user) {
            $location.path('#/profile');    //is this right?
		    UserService.createUser(user, function(users) {
			    vm.users = users;
		    })
	    }

	    init();

    }

})();