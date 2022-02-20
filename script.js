const box = document.querySelector(".box");

const dialogBox = document.querySelector('.dialog_box');
let textDialogBox = document.querySelector('.text');
let btnDialogBoxClose = document.querySelector('.btn');
let coundMuveWindow = document.querySelector('.coundMuve')

let count = 0;
let countMuveCrosses = 0;
let countMuveZeroes = 0;
let result = '';


box.addEventListener('click', Event => {
    if (count % 2 === 0) {
        Event.target.innerHTML = 'x';
        countMuveCrosses++;
    } else {
        Event.target.innerHTML = 'o';
        countMuveZeroes++;
    }
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
            coundMuveWindow.innerHTML = 'Cound Muve: ' +
                countMuveCrosses + ' !';
            win(result);
            winSound();
        } else if (
            cells[arr[i][0]].innerHTML == 'o' &&
            cells[arr[i][1]].innerHTML == 'o' &&
            cells[arr[i][2]].innerHTML == 'o'
        ) {
            result = 'Zeroes'
            coundMuveWindow.innerHTML = 'Cound Muve: ' +
                countMuveZeroes + ' !';
            win(result);
            winSound()

        } else if (
            count === 9 &&
            result !== 'Crosses' &&
            result !== 'Zeroes'
        ) {
            result = 'dead heat'
            win(result)
            DeasHeatSound()
        }
    };
};
function win(winner) {
    textDialogBox.innerHTML = `Win: ${winner} !!!`;
    dialogBox.style.display = 'block';
};

//btnReset start
btnDialogBoxClose.addEventListener('click', CloseDialogbox);
function CloseDialogbox() {
    dialogBox.style.display = 'none';
    location.reload();
}
//btnReset end


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
const audioDeasHeat = new Audio();
function DeasHeatSound() {
    audio.src = './assets/song/dead_heat.mp3';
    audio.currentTime = 0;
    audio.play();
};
// sound end



