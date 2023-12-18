"use strict"

// Vue-Komponente für das Schachbrett erstellen
const Chessboard = {
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
                return "/assets/images/" + this.pieces[pieceType][pieceColor];
            }
            return "";
        }
    },
    template: `
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
    `
};

// Vue-Komponente für die Spielerprofile erstellen
const PlayerProfile = {
    template: `
        <div class="playerProfile mt-4 mb-3 mx-auto bg-light">
            <img src="/assets/images/avatar.jpg" alt="Player Avatar">
            <span class="ps-2">Player</span>
        </div>
    `
};

// Vue-Instanz erstellen
const app = Vue.createApp({
    components: {
        Chessboard,
        PlayerProfile
    }
});

app.mount('#app');
