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

 var mySong = document.getElementById("song-dropdown").value; 
 
 // myAlbum currently has an array of three objects, arranged in dictionary:key 
 var myAlbum = [
   {
     title: 'What a Wonderful World', 
     songWriter: 'Bob Thiele, George David Weiss', 
     yearComposed:'1967', 
     yearPlayed:'1967'
   },
   {
     title:'La vie en rose', 
     songWriter:'Edith Pief', 
     yearComposed:'1945', 
     yearPlayed:'1947'
   },
   {
     title:'Dream a Little Dream of Me', 
     songWriter:'Fabian Andre, Wilbur Schwandt, Gus Khan', 
     yearComposed:'1931', 
     yearPlayed:''
   }
 ]
 
 
 document.getElementById("songSummary").innerHTML = "The title of this piece is " + myAlbum[mySong].title + ", which was originally composed by " + myAlbum[mySong].songWriter + " in " + myAlbum[mySong].yearComposed + ". Louis Armstrong played this piece in " + myAlbum[mySong].yearPlayed +".";
 
 
}

// a short function that is executed when a user clicks 'Like' button at the bottom of the page. It returns a 'Thank you' message to the user.
function likeButton() {
  
  document.getElementById("button").innerHTML = "Glad you enjoyed it!"
  
}