//defining topics
var topics = [
    "bob belcher",
    "linda belcher",
    "tina belcher",
    "gene belcher",
    "louise belcher"
]
//running a loop through the topics array to create a button, assign a data-character to each, add bootstrap classes and append to div
for (let i = 0; i < topics.length; i++) {
    var button = $("<button>");
    button.attr("data-character", topics[i]);
    button.addClass("btn btn-primary");
    $("#buttonsGoHere").append(button);
}

$(document).ready(function(){
    var character = $(this).attr("data-character");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + character + "&api_key=KkpY2QCGen77UrOTWYKKC98mbcNWeRTo&limit=10";

    $.ajax ({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        console.log(queryURL);
        console.log(response);

    })

})