$(document).ready(function() {

  var clickCount = 0,
      board = [],
      player1Name,
      player2Name

  $('.box').on('click', function handleClick(event) {
    if ($(this).text() === '') {
      var cell = parseInt($(this).attr('id'));
      if (clickCount % 2 === 0) {
        $(this).text('X').addClass('blue');
        board[cell] = 'X';
      } else {
        $(this).text('O').addClass('red');
        board[cell] = 'O';
      }
      clickCount++;
      checkWinner();
    }
  });

  $('#namesForm').on('submit', function(event) {
    event.preventDefault();
    player1Name = $('#player1Name').val();
    player2Name = $('#player2Name').val();
    $('#player1').html(player1Name);
    $('#player2').html(player2Name);
    $('#playerNamesModal').modal('toggle');
  });

  $('#reset').on('click', function() {
    resetGame();
  });


  function checkWinner() {
    if (
      ((board[0] === 'X' && board[1] === 'X') && (board[2] === 'X')) ||
      ((board[3] === 'X' && board[4] === 'X') && (board[5] === 'X')) ||
      ((board[6] === 'X' && board[7] === 'X') && (board[8] === 'X')) ||
      ((board[0] === 'X' && board[3] === 'X') && (board[6] === 'X')) ||
      ((board[1] === 'X' && board[4] === 'X') && (board[7] === 'X')) ||
      ((board[2] === 'X' && board[5] === 'X') && (board[8] === 'X')) ||
      ((board[0] === 'X' && board[4] === 'X') && (board[8] === 'X')) ||
      ((board[6] === 'X' && board[4] === 'X') && (board[2] === 'X'))
    ) {
      alert(player1Name + ' wins!');
      resetGame();
    } else if (
      ((board[0] === 'O' && board[1] === 'O') && (board[2] === 'O')) ||
      ((board[3] === 'O' && board[4] === 'O') && (board[5] === 'O')) ||
      ((board[6] === 'O' && board[7] === 'O') && (board[8] === 'O')) ||
      ((board[0] === 'O' && board[3] === 'O') && (board[6] === 'O')) ||
      ((board[1] === 'O' && board[4] === 'O') && (board[7] === 'O')) ||
      ((board[2] === 'O' && board[5] === 'O') && (board[8] === 'O')) ||
      ((board[0] === 'O' && board[4] === 'O') && (board[8] === 'O')) ||
      ((board[6] === 'O' && board[4] === 'O') && (board[2] === 'O'))
    ) {
      alert(player2Name + ' wins!');
      resetGame();
    } else if (clickCount > 8) {
      alert("Draw! Hit the 'Reset!' button to play again!");
    }
  }

  function resetGame(){
    $('.box').text('');
    clickCount = 0;
    board = [];
  }

});
