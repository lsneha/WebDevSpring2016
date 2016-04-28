(function(){
    "use strict";
    angular
        .module("MyProjectApp")
        .controller("ProfileController", ProfileController);

    function ProfileController($scope)
    {
        $scope.isUserLoggedIn = true;
        console.log($scope.isUserLoggedIn);

        //to get a random quote
        var quotes =[
            "A room without books is like a body without a soul ― Marcus Tullius Cicero",
            "Good friends, good books, and a sleepy conscience: this is the ideal life ― Mark Twain",
            "I have always imagined that Paradise will be a kind of library ― Jorge Luis Borges",
            "You can never get a cup of tea large enough or a book long enough to suit me ― C.S. Lewis",
            "If one cannot enjoy reading a book over and over again, there is no use in reading it at all ― Oscar Wilde",
            "I find television very educating. Every time somebody turns on the set, I go into the other room and read a book ― Groucho Marx"
        ];
        $scope.quote = quotes[Math.floor(Math.random() * quotes.length)];

        function saveEdits() {
            var editElem = document.getElementById("edit");
            var userVersion = editElem.innerHTML;
            localStorage.userEdits = userVersion;
        }
    }

})();