let currentPlayer = 'X'; 
let board = ['', '', '', '', '', '', '', '', '']; 

const cells = document.querySelectorAll('.cell');
const message = document.getElementById('message');

function checkWin() {
    const winPatterns = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            message.textContent = `Переможець: ${board[a]}`;
            return true;
        }
    }
    return false;
}

function handleClick(event) {
    const id = event.target.id.split('-')[1];
    if (board[id] === '') {
        board[id] = currentPlayer;
        event.target.textContent = currentPlayer;
        if (checkWin()) return;
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
}

cells.forEach(cell => {
    cell.addEventListener('click', handleClick);
});
