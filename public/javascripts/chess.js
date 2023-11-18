"use strict";

// Define a mapping of chess piece strings to SVG files
const pieceMappings = {
    'K1': 'black-king.png',
    'Q1': 'black-queen.png',
    'R1': 'black-rook.png',
    'k1': 'black-knight.png',
    'B1': 'black-bishop.png',
    'P1': 'black-pawn.png',
    'K2': 'white-king.png',
    'Q2': 'white-queen.png',
    'R2': 'white-rook.png',
    'k2': 'white-knight.png',
    'B2': 'white-bishop.png',
    'P2': 'white-pawn.png',
};

document.addEventListener("DOMContentLoaded", function() {
    // Eine Funktion, um die Schachfiguren als Text durch Bilder zu ersetzen
    function replaceButtonTextWithImages() {
        const buttons = document.querySelectorAll(".square");
        buttons.forEach(button => {
            // Text innerhalb des Buttons holen
            const buttonText = button.textContent.trim();
            // Bildpfad basierend auf dem Text erstellen
            const imagePath = 'assets/images/' + pieceMappings[buttonText];
            // Falls Spielfeld leer -> kein Bild, ansonsten Text durch img-Element ersetzen
            if (buttonText == "") {
                button.textContent = "";
            } else {
                button.innerHTML = '<img class="chess-piece-image" src=' + imagePath + '/>';
            }
        });
    }

    replaceButtonTextWithImages();
});
