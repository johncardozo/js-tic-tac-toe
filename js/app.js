document.addEventListener("DOMContentLoaded", () => {
  // Main constants in game
  const EMPTY = -1;
  const PLAYER_1 = 1;
  const PLAYER_0 = 0;
  const board = [EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY];

  // Get elements in page
  const squares = document.querySelectorAll(".grid div");
  const playerDisplay = document.querySelector("#player");
  const message = document.querySelector("#message");
  const mainMessage = document.querySelector("#mainMessage");

  // Setup the game
  let gameOver = false;
  let currentPlayer = PLAYER_1;

  // Loop on squares
  squares.forEach((square) => {
    // Add a click listener to every square in the grid
    square.addEventListener("click", clickOnSquare);
  });

  // Click on square
  function clickOnSquare(e) {
    // Check if game is over
    if (gameOver) return;

    // Get the array of squares
    const squareArray = Array.from(squares);

    // Get the index of clicked square
    const index = squareArray.indexOf(e.target);

    // Check if the square is empty
    if (board[index] === EMPTY) {
      // Store the play
      board[index] = currentPlayer;

      // Change square visualization adding a css class to square
      squares[index].classList.add(`player-${currentPlayer}`);

      // Switch player
      currentPlayer = currentPlayer == PLAYER_0 ? PLAYER_1 : PLAYER_0;

      // Check if there's a winner
      isWinner();

      // Check if game is over
      if (gameOver) {
        // Set the message
        message.innerHTML = "WINNER: ";
        // Add a css class to object
        mainMessage.classList.add("winner");
      } else {
        // Show next player
        playerDisplay.innerHTML = currentPlayer == PLAYER_0 ? "O" : "X";
      }
    }
  }

  // Chek if there's a winner
  function isWinner() {
    gameOver =
      // Rows
      (board[0] != EMPTY && board[0] == board[1] && board[1] == board[2]) ||
      (board[3] != EMPTY && board[3] == board[4] && board[4] == board[5]) ||
      (board[6] != EMPTY && board[6] == board[7] && board[7] == board[8]) ||
      // Columns
      (board[0] != EMPTY && board[0] == board[3] && board[3] == board[6]) ||
      (board[1] != EMPTY && board[1] == board[4] && board[4] == board[7]) ||
      (board[2] != EMPTY && board[2] == board[5] && board[5] == board[8]) ||
      // First diagonal
      (board[0] != EMPTY && board[0] == board[4] && board[4] == board[8]) ||
      // Second diagonal
      (board[2] != EMPTY && board[2] == board[4] && board[4] == board[6]);
  }
});
