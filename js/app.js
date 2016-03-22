// wait for the DOM to finish loading
$(document).ready(function() {
// all code to manipulate the DOM
// goes inside this function

var clickCounter = 0; //This variable will keep track of player turn
// maybe keep track of plays inside this array to check win/draw condition?
var gameBoard = ['.','.','.','.','.','.','.','.','.','.',]; //

$('.box').on('click', function handleClick(event) {
   console.log("This is our text in this box: " + $(this).text());
   if ( $(this).text() === '') {
      	if ( clickCounter % 2 === 0) {
         		$(this).text('X');
               // add 'X' to the id's index in your gameBoard Array
         		clickCounter++;
               console.log(gameBoard);
      	} else if ( clickCounter % 2 !== 0) {
          		$(this).text('O');
          		clickCounter++;
      	}
   } else {
      console.log("I already have text in me!");
   }
});


});

/* This will be incorporated to the above function to theoretically
automatically result in a drawn game.

else if (clickCounter > 8) {
   	alert("Game drawn!");
   }

*/
