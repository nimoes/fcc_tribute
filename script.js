/*
Author: Min Seo
Project: FreeCodeCamps' Front End Development Project
Goal: Build a Tribute Page

*/

/*
This function is executed when a user selects an option from a dropdown menu and clicks the submit button. 
The dropdown menu consists of several songs that Louis Armstrong played throughout his career. Once a submit button is clicked, the function goes through its array of information and retrieves the following information:

title - title of the song
songwriter - composers or original song writer
yearComposed - when the song was originally writted from the songwriter(s)
yearPlayed - when Louis Armstrong played his own version of the song
*/
function songSubmitted () {
  var myAlbum = {
  songs:
  [{title:'What a Wonderful World', songwriter: 'Bob Thiele, George David Weiss', yearComposed:'1967', yearPlayed:'1967'},
  {title:'La vie en rose', songwriter:'Edith Pief', yearComposed:'1945', yearPlayed:'1947'},
  {title:'Dream a Little Dream of Me', songwriter:'Fabian Andre, Wilbur Schwandt, Gus Khan', yearComposed:'1931', yearPlayed:''}]
  }
  
  
  
}

// a short function that is executed when a user clicks 'Like' button at the bottom of the page. It returns a 'Thank you' message to the user.
function likeButton() {
  document.getElementById("button").innerHTML = "Thank you!"
}