let currentPlayer="X";
let gameState=['','','','','','','','',''];
let winner=document.getElementById('winner');
let winnerDeclared=false;
let button=document.getElementById('btn');
const winConditions=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

//handle my click
function handleClick(event){
    if(winnerDeclared==true || !gameState.includes('')) return;
    let td=event.target;
    console.log(td);
    let index=td.getAttribute('index');
    //check for empty
    if(td.innerHTML==''){
        td.innerHTML= currentPlayer;
        gameState[index]= currentPlayer;
        //check for winner
        checkWinner();
        if(!winnerDeclared){
            checkDraw();
        }
        if(winnerDeclared==false && gameState.includes('')) changePlayer();
    }
}

function changePlayer(){
    currentPlayer=currentPlayer=="X" ? "O" : "X";
}
//Initialize
function init(){
    var tdCells=document.getElementsByTagName('td');
    console.log(tdCells);
    for(let i=0; i<9; i++){
        tdCells[i].addEventListener('click',handleClick);
    }
}

init();

//check for winner
function checkWinner(){
    for(let i=0; i<8; i++){
        var a= winConditions[i][0];
        var b= winConditions[i][1];
        var c= winConditions[i][2];
        if(gameState[a]==currentPlayer && gameState[b]==currentPlayer && gameState[c]==currentPlayer){
            var add=document.createElement('h2');
            add.innerHTML="Winner is "+ currentPlayer;
            winner.append(add);
            winnerDeclared=true;
            return;
        }
    }
}

//check for draw
function checkDraw(){
    if(!gameState.includes('') && winnerDeclared==false){
        var add=document.createElement('h2');
            add.innerHTML="Game is Tied";
            winner.append(add);
    }
}


//Restart Game
function restartGame(){
    currentPlayer="X";
    gameState=['','','','','','','','',''];
    winnerDeclared=false;
    var tdCells=document.getElementsByTagName('td');
    for(let i=0; i<9; i++){
        tdCells[i].innerHTML='';
    }
    winner.innerHTML='';
}

button.addEventListener('click',restartGame);