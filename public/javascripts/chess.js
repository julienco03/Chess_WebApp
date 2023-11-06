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
    // Eine Funktion, um die Buttons zu ersetzen
    function replaceButtonTextWithImages() {
        const buttons = document.querySelectorAll(".square");
        buttons.forEach(button => {
            // Den Text innerhalb des Buttons abrufen
            const buttonText = button.textContent.trim();
            // Den Bildpfad basierend auf dem Text erstellen
            const imagePath = 'assets/images/' + pieceMappings[buttonText];
            console.log(imagePath)
            // Den Text innerhalb des Buttons leeren
            if (buttonText == "") {
                button.textContent = "";
            } else {
                button.innerHTML = '<img src=' + imagePath + ' width="69" height="69" />';
            }
        });
    }

    // Die Funktion aufrufen, um die Buttons zu ersetzen
    replaceButtonTextWithImages();
});
