# GIPHY-Tastic!

## Objectives

As we hone our newly developed skills in jQuery and Javascript, our next task was to understand and practice the use of APIs.

We were to create a page that has a predetermined set of values, converted into buttons, whereupon clicking each button caused a set of GIPHY images to dynamically populate on the page. Dynamic event handling was made possible by using jQuery and targeting DOMs. 

This page also has the functionality of the page visitor being able to create a NEW button by inputting their subject of interest in the search form.

This assignment was designed for us to demonstrate our handle on jQuery and DOM manipulation. We needed to be able to properly call the GIPHY API, and display desired data pulled from the requested JSON onto our mobile-responsive and easy to use page.

By signing up as a GIPHY Developer, I was able to request and acquire an API key which would allow me to make such requests onto my personal page.

Through this exercise, I learned how to set parameters on the JSON data being returned to me by setting limits (such as number of results, rating, and even the size of the images populated) and setting them into a fixed variable in my Javascript. 

I also learned how to store the user's input into a value that would enable the script to make ANY Ajax call using that chosen topic as a filter for the search.


## Page Features, Etc.

I used a simple and uncluttered user interface, designed by Bootstrap and CSS, in order to make the GIPHY images the main focus of the assingment. This is supposed to be fun and easy to use!

The buttons cause the page to load 10 GIPHY images based on the topic assigned to the clicked button, and are accompanied by their rating. For the purposes of the assignment, the ratings were filtered up to PG.

When the GIPHY images populate, the images begin in static state in order to promote faster content loading. Upon clicking, the images can be animated. This was also powered by the API. To stop animation, click again. 