"use strict"

document.addEventListener("DOMContentLoaded", function () {
    let draggedPiece = null

    document.querySelectorAll('.chess-piece > img').forEach(piece => {
        piece.setAttribute('draggable', 'true')

        piece.addEventListener('dragstart', function (event) {
            draggedPiece = event.target.parentElement
        })
    })

    document.addEventListener('dragover', function (event) {
        event.preventDefault()
    })

    document.addEventListener('drop', function (event) {
        event.preventDefault()

        if (draggedPiece) {
            const oldPosition = draggedPiece.id
            const newPosition = event.target.id

            // Prüfe, ob die Positionen gültig sind
            if (oldPosition !== "" && newPosition !== "") {
                // AJAX-Anfrage an den Scala Play Server senden, um die Figur zu bewegen
                sendMoveToServer(oldPosition, newPosition)
                toggleNextTurnClass()
                draggedPiece = null
            }
        }
    })

    // Funktion für AJAX-Anfrage an den Scala Play Server
    function sendMoveToServer(oldPosition, newPosition) {
        let url = '/chess/move' + '?old=' + oldPosition + '&new=' + newPosition
        fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'text/html',
                'Content-Type': 'application/json',
            },
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`)
            }
            return response.text()
        })
        .then(htmlContent => {
            location.reload()
        })
        .catch((error) => {
            console.error('Error:', error)
        })
    }

    function toggleNextTurnClass() {
        $('.playerProfile').click(function () {
            $(this).toggleClass('nextTurn');
        })
    }
})
