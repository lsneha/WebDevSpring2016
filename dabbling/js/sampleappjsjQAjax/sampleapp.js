/**
 * Created by sneha_000 on 3/3/2016.
 */
(function(){

    $(init);

    var $movieTitleTxt;
    var $searchBtn;
    var SEARCH_URL = "http://www.omdbapi.com/?s=TITLE";

    function init() {
        $movieTitleTxt = $("#movieTitleTxt");
        $searchBtn = $("#searchBtn");
        $searchResults = $("#searchResults");

        $searchBtn.click(searchMovie);
    }

    function searchMovie() {
        var title = $movieTitleTxt.val();
        var url = SEARCH_URL.replace("TITLE", title);

        $.ajax({
            url: url,
            success: renderSearchResults
        });

        alert("Search for " + title);
    }

    function renderSearchResults(response) {
        console.log(response);

        var totalResults = response.totalResults;
        var movies = response.Search;

        for (var m = 0; m < movies.length; m++) {
            var movie = movies[m];
            console.log(movie);
            var posterUrl = movie.Poster;
            var title = movie.Title;
            var year = movie.Year;
            var imdbID = movie.imdbID;

            var $tr = $("<tr>")
                .attr("id", imdbID)
                .click(fetchMovieDetails);

            var $img = $("<img>")
                .attr("src", posterUrl)
                .addClass("posterThmb")
                .appendTo($tr);

            /*var $td = $("<td>")
                .append(posterUrl)
                .appendTo($tr);*/

            $td = $("<td>")
                .append(title)
                .appendTo($tr);

            $td = $("<td>")
                .append(year)
                .appendTo($tr);

            $td = $("<td>")
                .append(imdbID)
                .appendTo($tr);

            $searchResults.append($tr);
        }
    }

    function fetchMovieDetails(event) {
        console.log(event);

        var $tr = $(event.currentTarget);
        var imdbID = $tr.attr("id");
    }

})();