// var giphyUrl = "http://api.giphy.com/v1/gifs/search&q=";

// var searchTerm = "";

// var apiKey = "?api_key=dc6zaTOxFJmzC";

// var queryURL = giphyUrl + searchTerm + apiKey;

 // 1. create the onclick function that queries the API with the button value as the searchTerm, and then display the gif results in the #gif-results <div> of the html.

 $(".btn").on("click", function() {
 	
	var giphyUrl = "https://api.giphy.com/v1/gifs/search?q=";

 	var searchTerm = $(this).attr("value");
	var apiKey = "&api_key=dc6zaTOxFJmzC";
	var clear = "";
	var queryURL = giphyUrl + searchTerm + apiKey;	

		console.log(searchTerm);
 	$("#gif-results").html(clear);
 	$.ajax({
	url: queryURL,
    method: 'GET'
  }).done(function(response) {
     
  	
 
    for (var i = 0; i < 25; i++) {
		console.log(response.data[i].id)
 // $("#gif-results").html();
 		var imgUrl = "https://media.giphy.com/media/";
 		var imgUrlId = response.data[i].id;
 		var imgUrlEnd = "/giphy.gif";
 		var linkIndex = [imgUrl + imgUrlId + imgUrlEnd];
 		
 		// console.log("This is your link index " + linkIndex);

 		var addHTML = '<img class="resize" src="' + linkIndex + '">';

 		console.log('<img class="resize" src="' + linkIndex + '">');
 		

 		$("#gif-results").append(addHTML);
    }

  	});


 })