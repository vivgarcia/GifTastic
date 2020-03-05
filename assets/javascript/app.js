//defining topics
var topics = [
    "bobs burgers",
    "rick and morty",
    "king of the hill",
    "futurama",
    "daria"
]
//running a loop through the topics array to create a button, assign a data-show to each, add bootstrap classes and append to div
for (let i = 0; i < topics.length; i++) {
    var button = $("<button>").text(topics[i]);
    button.attr("data-show", topics[i]);
    button.addClass("btn btn-primary customButton");
    $(".buttonsGoHere").append(button);
}
//add a new show 
$("#addAShow").on("click", function(event){
    event.preventDefault();
    // grab show title from input field
    var newShow = $("#showTitle").val().trim();
    console.log(newShow);
    //push new show into the topics array
    topics.push(newShow);
    // create new button and append it
    var newButton = $("<button>").text(newShow.toLowerCase());
    newButton.attr("data-show", newShow);
    newButton.addClass("btn btn-primary customButton");
    $(".buttonsGoHere").append(newButton);
    // clear the input field
    $("#showTitle").val("");
})

$(document).ready(function(){
    // create variable by grabbing data-show
    var show = $(this).attr("data-show");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + show + "&api_key=KkpY2QCGen77UrOTWYKKC98mbcNWeRTo&limit=10";
    $.ajax ({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        console.log(queryURL);
        console.log(response);
    })

})