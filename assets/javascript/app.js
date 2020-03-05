//TODO: GIFs won't animate when new button is clicked
// TODO: Make sure all characters are alphanumerical
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
    button.addClass("btn btn-primary giftasticButton");
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
    newButton.addClass("btn btn-primary giftasticButton");
    $(".buttonsGoHere").append(newButton);
    // clear the input field
    $("#showTitle").val("");
})
// function to click button to populate 10 GIFs
$(document).on("click", ".giftasticButton", function(){
    // create variable by grabbing data-show
    var show = $(this).attr("data-show");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + show + "&api_key=KkpY2QCGen77UrOTWYKKC98mbcNWeRTo&limit=10";
    $.ajax ({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        var results = response.data;
        console.log(results);
        // creates an individual div for each gif and rating
        var gifContainer = $("<div class ='gifContainer col-md-3'>");
        // runs a loop through the results and grabs relevant data
        for (let i = 0; i < results.length; i++) {
            // create local variables for the rating and image
            let rating = results[i].rating;
            let p = $("<p>").text("Rating: " + rating);
            let GIF = $("<img class='result'>");
            // assign attributes to the GIF for the animated feature
            GIF.attr("src", results[i].images.fixed_height_still.url);
    		GIF.attr("data-state", "still");
    		GIF.attr("data-still", results[i].images.fixed_height_still.url);
            GIF.attr("data-animate", results[i].images.fixed_height.url);
            // attach GIF and P to the container and attach gifContainer to parent DIV
            gifContainer.prepend(GIF);
            gifContainer.prepend(p);
            $(".gifsGoHere").prepend(gifContainer);
        }
    })
// when GIF is clicked, states will be switched
    $(document).on("click", ".result", function() {
        var state = $(this).attr("data-state");
        if(state === "still") {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
            } else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
        }
    });
})