document.addEventListener('DOMContentLoaded', () => {
   const squares = document.querySelectorAll('.grid div');
   const playerDisplay = document.querySelector('#player');

   let currentPlayer = 'playerX';

   squares.forEach(square => {
       square.addEventListener('click', clickOutcome)
   });

    function clickOutcome(e) {
        const squareArray = Array.from(squares);
        const index = squareArray.indexOf(e.target);
        playerDisplay.innerHTML = currentPlayer;

        if (currentPlayer === 'playerX') {
            if (!squares[index].classList.contains('playerO')) {
                squares[index].classList.add('playerX');
                currentPlayer = 'playerO'
            }
        } else {
            if (!squares[index].classList.contains('playerX')) {
                squares[index].classList.add('playerO');
                currentPlayer = 'playerX'
            }
        }
    }
});
