var giphyUrl = "http://api.giphy.com/v1/gifs/";

var searchTerm = "";

var apiKey = "?api_key=dc6zaTOxFJmzC";

var queryURL = giphyUrl + searchTerm + apiKey;

 // 1. create the onclick function that queries the API with the button value as the searchTerm, and then display the gif results in the #gif-results <div> of the html.

 $(".btn").on("click", function() {
 	searchTerm = $(this).attr("value");

 	$.ajax({
	url: queryURL,
     method: 'GET'
  }).done(function(response) {
     console.log(searchTerm);

  // $("#gif-results").html();
    

  	});


 })