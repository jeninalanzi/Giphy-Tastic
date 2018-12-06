// --- Initial array of topics that will be the basis of our first buttons on the page.
var topics = ["Horror Movies", "Monkeys", "Goats", "Heavy-Metal", "Cooking"];

    // --- Creating buttons for each string in the topic array above.
    for(var i = 0; i < topics.length; i++) {
        console.log(topics[i]);
        var pageButton = $("<button>");
        pageButton.addClass("topic btn btn-dark btn-lg");
        pageButton.attr("data-name", topics[i]); // will spit out as <button data-name="topics[i]">
        pageButton.text(topics[i]);
        $("#button-container").append(pageButton);
        };

    // When clicked, the pageButton will grab data with AJAX.
    function displayArrayInfo() {
        var topic = $(this).attr("data-name");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + topic + "&api_key=dc6zaTOxFJmzC&limit=10";

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {

            // Clears the page of gif's so that new ones can take its place.
            $("#giphy").empty();
           
            // For-loop that allows each button-click to result
            // in 10 static GIFs to be populated on the page.
            var results = response.data;
            for(var x = 0; x < results.length; x++) {
                var displayDiv = $("<div class='display-div'>");
                displayDiv.css("float", "left");
                displayDiv.css("margin", "10px");
                var p = $("<p>").text("Rating: " + results[x].rating);
                var image = $("<img>");
                image.addClass("gif");
                image.attr("src", results[x].images.fixed_height_still.url);
                image.attr("data-state", "still")
                image.attr("data-still", results[x].images.fixed_height_still.url);
                image.attr("data-animate", results[x].images.fixed_height.url);
                displayDiv.append(p);
                displayDiv.append(image);

                

                $("#giphy").prepend(displayDiv);

                console.log(queryURL);
                console.log(response.data);
            }

        })
    };

    // Call-function that allows user to click button to display images + rating.
    $(document).on("click", ".topic", displayArrayInfo);



    
    // Function that animates on/off the GIFs when they're clicked:
    $(document).on("click", ".gif", function() {
        var state = $(this).attr("data-state");
        if (state === "still") {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
          } else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
          };
    });




    // Function that will create new buttons from the visitor's input
    $("#add-button").on("click", function(event) {

        // Prevents page from refreshing.
        event.preventDefault();

        // Stores user input as a value to be used later
        var newTopic = $("#newfav-input").val().trim();
            topics.push(newTopic);

        // Creating the new button
        var newButton = $("<button>");
            newButton.addClass("topic btn btn-dark btn-lg");
            newButton.attr("data-name", newTopic);
            newButton.text(newTopic);
            $("#button-container").append(newButton);
        
    })