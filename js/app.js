// wait for the DOM to finish loading
$(document).ready(function() {
// all code to manipulate the DOM
// goes inside this function

var clickCounter = 0; //This variable will keep track of player turn
var gameBoard = ['.','.','.','.','.','.','.','.','.'];
 //Index pos=     0   1   2   3   4   5   6   7   8 (9 possible positions)
 //This array willkeep track of X's and O's to help determine winner
var gameBoardInd; //Will be an integer

$('.box').on('click', function handleClick(event) {
   if ( $(this).text() === '') {
    	if ( clickCounter % 2 === 0) {
       		$(this).text('X');
          //The parseInt() function parses a string argument and
          //returns an integer of the specified radix (the base in mathematical numeral systems).
          var cellX = parseInt( $(this).attr('id') );
          gameBoard[cellX] = 'X';
          //add X's to id's (which equal index) of gameBoard array
          //$(this).(gameBoard)
          console.log(gameBoard); //Keep track of current board state
       		clickCounter++;
    	} else if ( clickCounter % 2 !== 0) {
        console.log($(this).attr('id'));
        		$(this).text('O');
            var cellY = parseInt( $(this).attr('id') );
            gameBoard[cellY] = 'O';
            //add O's to id's (which equal index) of gameBoard array
            console.log(gameBoard); //Keep track of current board state
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
