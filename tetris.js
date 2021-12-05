const canvas = document.getElementById('tetris');
const context = canvas.getContext('2d');
const piecemenu = document.getElementById('next')
const menu_contex = piecemenu.getContext('2d')


let isPlay = true;
menu_contex.scale(20,20)
context.scale(20, 20);
let dropCounter = 0;
let dropInterval = 1000;
let lastTime = 0;
const picese_list = [];
const pieces = 'TJLOSZI';

document.addEventListener('keydown', e => {
    if ( e.key === "ArrowLeft") {
        playerMove(-1);
    } else if (e.key == "ArrowRight") {
        playerMove(1);
    } else if (e.key == "ArrowDown"){
        playerDrop();
    } else if (e.key == "ArrowUp"){
        playerRotate(-1);
    } 
})

const colors = [
    //Setting colors for my blocks
    null,
    '#FF0D72',
    '#0DC2FF',
    '#0DFF72',
    '#F538FF',
    '#FF8E0D',
    '#FFE138',
    '#3877FF',
];


//Setting my area size in a matrix
const arena = createMatrix(12, 20);

const menu = createMatrix(3,3);

//Next picece object
const next_piece = {
    matrix: null,
};


//Player object
const player = {
    pos: {x: 0, y: 0},
    matrix: null,
    score: 0,
};
    picese_list.unshift(createPiece(pieces[pieces.length * Math.random() | 0]))
    playerReset();
    updateScore();
    update();