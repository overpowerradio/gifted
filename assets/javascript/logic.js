// var giphyUrl = "http://api.giphy.com/v1/gifs/search&q=";

// var searchTerm = "";
 
// var apiKey = "?api_key=dc6zaTOxFJmzC";

// var queryURL = giphyUrl + searchTerm + apiKey;

 // 1. create the onclick function that queries the API with the button value as the searchTerm, and then display the gif results in the #gif-results <div> of the html.

 $(".pgBtn").on("click", function() {
 	
	var giphyUrl = "https://api.giphy.com/v1/gifs/search?q=";

 	var searchTerm = $(this).attr("value");
	var apiKey = "&api_key=dc6zaTOxFJmzC";

	var queryURL = giphyUrl + searchTerm + apiKey;	

		console.log(searchTerm);
 	
 	$(".gif-results").empty();
 	
 	$.ajax({
	url: queryURL,
    method: 'GET'
  }).done(function(response) {
     
  	
 
    for (var i = 0; i < 24; i++) {
		console.log(response.data[i].id)
 // $("#gif-results").html();
 		var imgUrl = "https://media.giphy.com/media/";
 		var imgUrlId = response.data[i].id;
 		var imgUrlEnd = "/giphy.gif";
 		var linkIndex = [imgUrl + imgUrlId + imgUrlEnd];
 		
 		// console.log("This is your link index " + linkIndex);

 		var addHTML = '<div class="col-md-4"><img class="resize" src="' + linkIndex + '"></div>';

 		console.log('<img class="resize" src="' + linkIndex + '">');
 		

 		$(".gif-results").append(addHTML);
    }

  	});


 })

 $("#gif-search").on("click", function() {

 	var giphyUrl = "https://api.giphy.com/v1/gifs/search?q=";

 	var searchTerm = $("#unique-gif").val().trim();
	var apiKey = "&api_key=dc6zaTOxFJmzC";

	var queryURL = giphyUrl + searchTerm + apiKey;	

		console.log(searchTerm);
 	
 	$(".gif-results").empty();
 	$("#emotions").append('<button type="button" class="pgBtn btn btn-default btn-lg btn btn-primary btn-xs yourSmile" value="like"><span class="glyphicon glyphicon-thumbs-up" aria-hidden="true"></span> ' + searchTerm + '</button>' + '    ');

 	$.ajax({
	url: queryURL,
    method: 'GET'
  }).done(function(response) {
     
  	
 
    for (var i = 0; i < 24; i++) {
		console.log(response.data[i].id)
 // $("#gif-results").html();
 		var imgUrl = "https://media.giphy.com/media/";
 		var imgUrlId = response.data[i].id;
 		var imgUrlEnd = "/giphy.gif";
 		var linkIndex = [imgUrl + imgUrlId + imgUrlEnd];
 		
 		// console.log("This is your link index " + linkIndex);

 		var addHTML = '<div class="col-md-4"><img class="resize" src="' + linkIndex + '"></div>';

 		console.log('<img class="resize" src="' + linkIndex + '">');
 		

 		$(".gif-results").append(addHTML);
    }

  	});
 })