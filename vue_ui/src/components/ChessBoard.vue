<template>
    <!-- Horizontale Label [A-H] -->
    <div id="xlabel">
        <div v-for="(label, index) in x_labels" :key="index">
            {{ label }}
        </div>
    </div>

    <div id="chessboard-wrapper">

        <!-- Vertikale Label [1-8] -->
        <div id="ylabel">
            <div v-for="(label, index) in y_labels" :key="index">
                {{ label }}
            </div>
        </div>

       <!-- Schachbrett-Felder -->
       <div id="chessboard">
           <div v-for="(row, rowIndex) in squares" :key="rowIndex" class="line">
               <button v-for="(piece, colIndex) in row" :key="colIndex" class="square chess-piece">
                   <template v-if="getPieceImage(piece, rowIndex < 2 ? 'black' : 'white')">
                       <!-- Wenn eine Figur vorhanden ist, zeige das Bild an -->
                       <img :src="getPieceImage(piece, rowIndex < 2 ? 'black' : 'white')" class="chess-piece-image" alt="Piece" />
                   </template>
                   <template v-else>
                       <!-- Wenn keine Figur vorhanden ist, zeige zwei Leerzeichen an -->
                       &nbsp;&nbsp;
                   </template>
               </button>
           </div>
       </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            squares: this.getStartingPosition(),
            pieces: {
                'pawn': {
                    'black': 'black-pawn.png',
                    'white': 'white-pawn.png'
                },
                'rook': {
                    'black': 'black-rook.png',
                    'white': 'white-rook.png'
                },
                'knight': {
                    'black': 'black-knight.png',
                    'white': 'white-knight.png'
                },
                'bishop': {
                    'black': 'black-bishop.png',
                    'white': 'white-bishop.png'
                },
                'queen': {
                    'black': 'black-queen.png',
                    'white': 'white-queen.png'
                },
                'king': {
                    'black': 'black-king.png',
                    'white': 'white-king.png'
                },
            },
            x_labels: ["A", "B", "C", "D", "E", "F", "G", "H"],
            y_labels: ["8", "7", "6", "5", "4", "3", "2", "1"],
        };
    },
    methods: {
        getStartingPosition() {
            return [
                ["rook", "knight", "bishop", "queen", "king", "bishop", "knight", "rook"],
                ["pawn", "pawn", "pawn", "pawn", "pawn", "pawn", "pawn", "pawn"],
                Array(8).fill(null),
                Array(8).fill(null),
                Array(8).fill(null),
                Array(8).fill(null),
                ["pawn", "pawn", "pawn", "pawn", "pawn", "pawn", "pawn", "pawn"],
                ["rook", "knight", "bishop", "queen", "king", "bishop", "knight", "rook"],
            ];
        },
        getPieceImage(pieceType, pieceColor) {
            if (pieceType && pieceColor && this.pieces[pieceType] && this.pieces[pieceType][pieceColor]) {
                return require("@/assets/chess_pieces/" + this.pieces[pieceType][pieceColor]);
            }
            return "";
        }
    }
}
</script>

<style scoped>
    #chessboard-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .line {
      padding: 0;
      height: var(--cell-size-desktop);
      margin-bottom: var(--line-gap);
    }

    .square {
      padding: 0;
      margin: -2px;
      width: var(--cell-size-desktop);
      height: var(--cell-size-desktop);
      font-size: 1.5rem;
      display: inline-block;
      vertical-align: middle;
    }

    .chess-piece-image {
      width: 80%;
      height: auto;
    }

    /* Schachbrett auf mobilen Geräten */
    @media (max-width: 650px) and (orientation: portrait) {
      .line {
        height: var(--cell-size-mobile);
      }

      .square {
        width: var(--cell-size-mobile);
        height: var(--cell-size-mobile);
      }

      .chess-piece-image {
        width: 50%;
        height: auto;
        padding-bottom: 5px;
      }
    }

    /* Schachbrettmuster */
    .line:nth-child(even) > .square:nth-child(even) {
      background-color: var(--light-square-color);
      color: var(--dark-square-color);
    }
    .line:nth-child(even) > .square:nth-child(odd) {
      background-color: var(--dark-square-color);
      color: var(--light-square-color);
    }
    .line:nth-child(odd) > .square:nth-child(even) {
      background-color: var(--dark-square-color);
      color: var(--light-square-color);
    }
    .line:nth-child(odd) > .square:nth-child(odd) {
      background-color: var(--light-square-color);
      color: var(--dark-square-color);
    }

    /* Beschriftung der horizontalen Achse */
    #xlabel {
      text-align: center;
      margin-left: var(--vertical-offset-desktop);
      margin-bottom: var(--horizontal-offset-desktop);
    }
    #xlabel > * {
      display: inline-block;
      width: calc(var(--cell-size-desktop) - 5px);
    }
    #xlabel > *:last-of-type {
      margin-right: 0;
      padding-right: 0;
    }

    @media (max-width: 650px) and (orientation: portrait) {
      #xlabel {
        margin-left: var(--vertical-offset-mobile);
        margin-bottom: var(--horizontal-offset-mobile);
      }
      #xlabel > * {
        width: calc(var(--cell-size-mobile) - 5px);
      }
    }

    /* Beschriftung der vertikalen Achse */
    #ylabel {
      text-align: center;
      margin-top: 0px;
      margin-right: var(--vertical-offset-desktop);
    }
    #ylabel > * {
      display: block;
      height: calc(calc(var(--cell-size-desktop)) + var(--line-gap));
      line-height: 70px;
    }

    @media (max-width: 650px) and (orientation: portrait) {
      #ylabel {
        margin-right: var(--vertical-offset-mobile);
      }
      #ylabel > * {
        height: calc(calc(var(--cell-size-mobile)) + var(--line-gap));
        line-height: 35px;
      }
    }
</style>
