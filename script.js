const box = document.querySelector(".box");

const dialogBox = document.querySelector('.dialog_box');
let textDialogBox = document.querySelector('.text');
let btnDialogBoxClose = document.querySelector('.btn');

let count = 0;
let result = '';




box.addEventListener('click', Event => {
    count % 2 === 0 ? Event.target.innerHTML = 'x' :
        Event.target.innerHTML = 'o';
    count++;
    gameState();
    playSound();
});


function gameState() {
    let cells = document.getElementsByClassName("cell");
    let arr = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let i = 0; i < arr.length; i++) {
        if (
            cells[arr[i][0]].innerHTML == 'x' &&
            cells[arr[i][1]].innerHTML == 'x' &&
            cells[arr[i][2]].innerHTML == 'x'
        ) {
            result = 'Crosses'
            win(result)
            winSound()
        } else if (
            cells[arr[i][0]].innerHTML == 'o' &&
            cells[arr[i][1]].innerHTML == 'o' &&
            cells[arr[i][2]].innerHTML == 'o'
        ) {
            result = 'Zeroes'
            win(result)
            winSound()
        }
    };
};

function win(winner) {
    textDialogBox.innerHTML = `Win: ${winner} !!!`;
    dialogBox.style.display = 'block';
};

//btn start
btnDialogBoxClose.addEventListener('click', CloseDialogbox);
function CloseDialogbox() {
    dialogBox.style.display = 'none';
    location.reload();
}
//btn end


// sound start
const sound = new Audio();
function playSound() {
    sound.src = './assets/song/vibro.mp3';
    sound.currentTime = 0;
    sound.play();
};
const audio = new Audio();
function winSound() {
    audio.src = './assets/song/win.mp3';
    audio.currentTime = 0;
    audio.play();
};
// sound end