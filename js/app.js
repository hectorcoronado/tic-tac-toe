$(document).ready(function() {

var clickCounter = 0; //This variable will keep track of player turn
var gameBoard = [];

$('.box').on('click', function handleClick(event) {
   if ( $(this).text() === '') {
    	if ( clickCounter % 2 === 0) {
       		$(this).text('X');
          var cellX = parseInt( $(this).attr('id') ); //parseInt method turns 'X' string added to .box to index/id #
          gameBoard[cellX] = 'X'; //so that 'X's can be assigned to gameBoard at index/id #
          console.log(gameBoard); //Keep track of current board state
       		clickCounter++;
    	} else if ( clickCounter % 2 !== 0) {
        		$(this).text('O');
            var cellY = parseInt( $(this).attr('id') );
            gameBoard[cellY] = 'O'; //as above (line 16), so that 'Y' can be assigned to gameBoard at index/id number
            console.log(gameBoard); //Keep track of current board state
        		clickCounter++;
    		}
   }
});
$('.box').on('click', function checkWinner(event) {
    if (
          ( (gameBoard[0]==='X' && gameBoard[1] === 'X') && (gameBoard[2] === 'X') ) ||
          ( (gameBoard[3]==='X' && gameBoard[4] === 'X') && (gameBoard[5] === 'X') ) ||
          ( (gameBoard[6]==='X' && gameBoard[7] === 'X') && (gameBoard[8] === 'X') ) ||
          ( (gameBoard[0]==='X' && gameBoard[3] === 'X') && (gameBoard[6] === 'X') ) ||
          ( (gameBoard[1]==='X' && gameBoard[4] === 'X') && (gameBoard[7] === 'X') ) ||
          ( (gameBoard[2]==='X' && gameBoard[5] === 'X') && (gameBoard[8] === 'X') ) ||
          ( (gameBoard[0]==='X' && gameBoard[4] === 'X') && (gameBoard[8] === 'X') ) ||
          ( (gameBoard[6]==='X' && gameBoard[4] === 'X') && (gameBoard[2] === 'X') )

        ) {

            alert("Player X wins!");

    } else if (

            ( (gameBoard[0]==='O' && gameBoard[1] === 'O') && (gameBoard[2] === 'O') ) ||
            ( (gameBoard[3]==='O' && gameBoard[4] === 'O') && (gameBoard[5] === 'O') ) ||
            ( (gameBoard[6]==='O' && gameBoard[7] === 'O') && (gameBoard[8] === 'O') ) ||
            ( (gameBoard[0]==='O' && gameBoard[3] === 'O') && (gameBoard[6] === 'O') ) ||
            ( (gameBoard[1]==='O' && gameBoard[4] === 'O') && (gameBoard[7] === 'O') ) ||
            ( (gameBoard[2]==='O' && gameBoard[5] === 'O') && (gameBoard[8] === 'O') ) ||
            ( (gameBoard[0]==='O' && gameBoard[4] === 'O') && (gameBoard[8] === 'O') ) ||
            ( (gameBoard[6]==='O' && gameBoard[4] === 'O') && (gameBoard[2] === 'O') )

      ) {
              alert("Player O wins!");

            } else if (clickCounter > 8) {
              alert("Draw!");
            }
  });


  $(function() {
    $(".btn").click(function() {
      $('.box').text('');
      alert('New game!');
      clickCounter = 0; // Reverts to 0
      gameBoard = []; //Clears out array
      console.log (gameBoard);
    });
  });

});
