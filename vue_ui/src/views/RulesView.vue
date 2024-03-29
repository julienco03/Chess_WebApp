<template>
  <div class="container">
    <h2 class="mt-4">What are the basic rules of playing chess?</h2>

    <p>
      Want to know how to play chess for beginners? Here's a basic rundown on how the
      rules work. In chess, each player takes turns to make a single move. Players cannot
      choose to skip a turn - they must move a piece. Each chess piece moves in a specific
      way, and must be moved according to its legal movement.<br /><br />
      Except for the knight, which may jump over pieces, pieces cannot move through pieces
      of either colour without either stopping (in the same of a piece of the same colour)
      or capturing them (in the case of a piece of the opposite colour).
    </p>

    <hr />

    <h3>How to capture pieces</h3>
    <p>
      If a piece lands on a space with an opponent’s piece, that piece is captured and
      removed from the board. Pieces cannot be placed on the same square as a piece of the
      same colour. When a piece captures an opponent’s piece, it must finish its current
      move action and end the player’s turn.
    </p>

    <div id="accordionExample" class="accordion">
      <div class="accordion-item">
        <h3 id="headingOne" class="accordion-header">
          <button
            class="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            Pawn
          </button>
        </h3>
        <div
          id="collapseOne"
          class="accordion-collapse collapse show"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            An exception to this is if a pawn is yet to be moved during the game. If a
            pawn has not yet moved, it may be moved two squares forward as a single move.
            Both squares must be empty. The player can also choose to move the piece a
            single square.<br />
            The only time a pawn may move diagonally is when capturing an opponent’s
            piece. Pawns may capture an opponent’s piece on either of the diagonal spaces
            to the left or right ahead of the piece. As part of capturing the piece, the
            pawn will move diagonally to replace the captured piece. A pawn cannot capture
            an adjacent piece on any other square, or move diagonally without capturing.
          </div>
        </div>
      </div>

      <div class="accordion-item">
        <h2 id="headingTwo" class="accordion-header">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            Rook (Castle)
          </button>
        </h2>
        <div
          id="collapseTwo"
          class="accordion-collapse collapse"
          aria-labelledby="headingTwo"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <p>
              The rook, sometimes called the castle, can move any number of squares
              horizontally along its current row (rank) or column (file). It cannot pass
              through pieces of the same colour, and can capture pieces of the opposite
              colour by moving onto an occupied space. It cannot move diagonally for any
              reason.
            </p>
          </div>
        </div>
      </div>

      <div class="accordion-item">
        <h2 id="headingThree" class="accordion-header">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
            Knight
          </button>
        </h2>
        <div
          id="collapseThree"
          class="accordion-collapse collapse"
          aria-labelledby="headingThree"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <p>
              Knights are the only chess piece that may be moved ‘through’ other pieces by
              ‘jumping’ over them. It captures pieces as normal by landing on a space
              occupied by a piece of the opposite colour and cannot move to a square
              occupied by a piece of the same colour, but may move over pieces of either
              colour during its move.<br />
              Knights move in a fixed ‘L’ pattern: two squares forward, backward, left or
              right, then one square horizontally or vertically, or vice versa - one
              square forward, backward, left or right, followed by two squares
              horizontally or vertically to complete the ‘L’ shape.<br />
              This means that the knight can always move to the closest square that is not
              on its current row (rank), column (file) or directly adjacent diagonally.<br />
              The knight must move the full distance - it cannot move just two squares in
              a straight line without also moving one to the side, for instance.
            </p>
          </div>
        </div>
      </div>

      <div class="accordion-item">
        <h2 id="headingFour" class="accordion-header">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseFour"
            aria-expanded="false"
            aria-controls="collapseFour"
          >
            Bishop
          </button>
        </h2>
        <div
          id="collapseFour"
          class="accordion-collapse collapse"
          aria-labelledby="headingFour"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <p>
              The bishop can move any number of squares diagonally - this means it always
              moves along the diagonal line of squares matching the current colour of its
              square. This means that each player begins the game with one bishop that can
              move on each colour. A bishop cannot move horizontally or vertically for any
              reason. It cannot move through pieces of the same colour, and captures a
              piece of the opposite colour by moving onto its square.
            </p>
          </div>
        </div>
      </div>

      <div class="accordion-item">
        <h2 id="headingFive" class="accordion-header">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseFive"
            aria-expanded="false"
            aria-controls="collapseFive"
          >
            Queen
          </button>
        </h2>
        <div
          id="collapseFive"
          class="accordion-collapse collapse"
          aria-labelledby="headingFive"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <p>
              The queen may move any number of squares horizontally, vertically or
              diagonally. These movements must be made in a single straight line during a
              single turn. (In other words, you can’t move three squares diagonally,
              followed by three spaces vertically.) The queen cannot move through pieces
              of the same colour, and captures a piece of the opposite colour by moving
              onto its square.
            </p>
          </div>
        </div>
      </div>

      <div class="accordion-item">
        <h2 id="headingSix" class="accordion-header">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseSix"
            aria-expanded="false"
            aria-controls="collapseSix"
          >
            King
          </button>
        </h2>
        <div
          id="collapseSix"
          class="accordion-collapse collapse"
          aria-labelledby="headingSix"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <p>
              The king moves a single space horizontally, vertically or diagonally. The
              king cannot move into a space that would grant a check or checkmate to the
              opponent player.<br />
              As an exception to all other chess pieces, the king is never captured - a
              player loses the match when the king is placed into checkmate, which would
              lead to an unavoidable capture on the opponent’s next turn.
            </p>
          </div>
        </div>
      </div>
    </div>

    <hr />

    <h3 class="mt-4">What is check and checkmate?</h3>
    <p>
      When a piece moves in a way that would allow a player to capture the opponent’s king
      on their next turn, the attacking player typically announces “check”. <br /><br />
      The player placed into check must move their king or move another piece to stop the
      attack on their next turn - either by blocking the move or capturing the attacking
      piece.
      <br /><br />
      If a player creates a situation where their opponent cannot stop their king from
      being captured on the next turn, the attacking player announces “checkmate” and
      immediately wins the game. The king is never captured - a game of chess is won when
      a successful checkmate is announced.
      <br /><br />
      A player can also choose to resign, granting their opponent the victory. Matches can
      also end in an agreed draw - for example, as the result of stalemate leaving a
      player without any legal moves, or if no player can win using available legal moves,
      a situation known as a “dead position”. One example of a dead position is when both
      players are left with their king as their only remaining piece on the board.
      <br /><br />
      Draws can also occur as the result of advanced rules typically used in professional
      tournaments, including identical board positions occurring three or five times -
      rules known respectively as threefold repetition and fivefold repetition - or no
      captures or pawn moves taking place within the last 50 or 75 moves. The exact rules
      used can depend on the tournament and agreement between the players.
    </p>

    <div class="text-center mb-3">
      <button class="btn-outline-secondary px-4 py-2">
        <a href="https://www.dicebreaker.com/games/chess/how-to/how-to-play-chess"
          >Source</a
        >
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "RulesView",
};
</script>

<style scoped></style>
