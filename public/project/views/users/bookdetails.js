/**
 * Created by sneha_000 on 3/3/2016.
 */
(function(){

    $(init);

    var $bookTitleTxt;
    var $searchBtn;
    var $searchResults;

    var SEARCH_URL = "https://www.goodreads.com/search.xml?key=G9L1n2xWsxGDJxXV6yiQg&q=TITLE";
    var DETAILS_URL = "https://www.goodreads.com/book/show/GR_ID";

    function init() {
        $bookTitleTxt = $("#bookTitleTxt");
        $searchBtn = $('#searchBtn');
        $searchResults = $("#searchResults tbody");
        $searchBtn.click(searchBook);
    }

    function searchBook() {
        alert("inside search");
        console.log("inside search book");
        var title = $bookTitleTxt.val();
        var url = SEARCH_URL.replace("TITLE", title);

        $.ajax({
            url: url,
            success: renderSearchResults
        });

        alert("Search for " + title);
    }

    function renderSearchResults(response) {
        var response = $.parseXML(response);
        var $response = $(response);
        console.log($response);

        //var movies = response.Search;

        $searchResults.empty();
    }

})();