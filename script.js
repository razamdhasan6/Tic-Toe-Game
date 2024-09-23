const btns = document.querySelectorAll('.btn');
const resetBtn = document.querySelector('.reset-btn');
const result = document.querySelector('.result');

let player1Value = true;

const winnerPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];


btns.forEach(btn => {
    btn.addEventListener('click', () => {
        console.log('but is clicked');
        if (player1Value) {
            btn.textContent = 'X'
            player1Value = false;
        }
        else {
            btn.textContent = 'O'
            player1Value = true;
        }
        btn.disabled = true
        checkWinner()
    })

    resetBtn.addEventListener('click', () => {
        btn.textContent = '';
        btns.forEach(btn => btn.disabled = false);
        result.textContent =''
    })
});

const checkWinner = () => {
    let winnerFound = false;

    for (let pattern of winnerPattern) {
        let pos1Value = btns[pattern[0]].innerText;
        let pos2Value = btns[pattern[1]].innerText;
        let pos3Value = btns[pattern[2]].innerText;

        if (pos1Value != '' && pos2Value != '' && pos3Value != '') {
            if (pos1Value === pos2Value && pos2Value === pos3Value) {
                result.textContent = pos1Value;
                winnerFound = true;
                btns.forEach(btn => btn.disabled = true);
                return;
            }
        }
        if (!winnerFound && [...btns].every(btn => btn.disabled)) {
            result.textContent='Draw!'
        }
    }
}