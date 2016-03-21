// wait for the DOM to finish loading
$(document).ready(function() {
// all code to manipulate the DOM
// goes inside this function

var clickCounter = 0; //This variable will keep track of player turn
var gameBoard = []; //

$('.box').on('click', function handleClick(event) {
   if ( $(this).length === 0) {
    	if ( clickCounter % 2 === 0) {
       		$(this).text('X');
       		clickCounter++;
    	} else if ( clickCounter % 2 !== 0) {
        		$(this).text('O');
        		clickCounter++;
    		}
   } 
});


});

/* This will be incorporated to the above function to theoretically
automatically result in a drawn game.

else if (clickCounter > 8) {
   	alert("Game drawn!");
   } 

*/
