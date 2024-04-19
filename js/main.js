
let currentPlayer = 'X'; // Start with player X
let isInWinState = false;
let btnReset = document.getElementById('btnReset');

// event click listner for button
function init(){
btnReset.addEventListener('click',reloadGame)
}
// function for reloading game
function reloadGame(){
    location.reload();
    boxes = '';
    
}






// creating vars for all boxes
let box1 = document.getElementById('b1');
let box2 = document.getElementById('b2');
let box3 = document.getElementById('b3');
let box4 = document.getElementById('b4');
let box5 = document.getElementById('b5');
let box6 = document.getElementById('b6');
let box7 = document.getElementById('b7');
let box8 = document.getElementById('b8');
let box9 = document.getElementById('b9');
let boxes = [box1, box2, box3, box4, box5, box6, box7, box8, box9];
// adding all boxes into one var
//winning combos
const winningCombos = [
    [box1, box2, box3],
    [box4, box5, box6],
    [box7, box8, box9],
    [box1, box4, box7],
    [box2, box5, box8],
    [box3, box6, box9],
    [box1, box5, box9],
    [box3, box5, box7]
];
// creating function to make boxes clickable
boxes.forEach(box => {
    box.addEventListener('click', function(event) {
        if(isInWinState){
            return;
            
        }
     
        let boxContent = this.querySelector('.box-content'); // this in code, it's talking about the object that's currently "doing something."
     // if there is an empty box it will display current player
        if (boxContent.textContent === ''){
            boxContent.textContent = currentPlayer
            
        }
        // checking who won and displaying winner on screen
        if(checkWin(currentPlayer)){
            document.getElementById('winner').textContent = "Winner is: " + currentPlayer
            return;
        }
        
        // for (let i = 0; i < 1; i++) {

        // player tracker
            if (currentPlayer === 'X') {
            currentPlayer = 'O';
            
        } else {
            currentPlayer = 'X';
        }
        // displaying current player onto screen
        document.getElementById('trackPlayer').textContent = "Current Player:  " + currentPlayer
        checkTie()
        // }
    });
    
    
}) 


// const gameBoard = [
//     [0,1,2],
//     [0,1,2],
//     [0,1,2]
// ];



// win condition
function checkWin(currentPlayer){
    for (let i = 0; i < winningCombos.length; i++){
            // winningCombos[i].forEach(box => console.log(box.querySelector(".box-content").textContent))
            
        if (winningCombos[i].every(value => value.querySelector(".box-content").textContent === currentPlayer)){
           
            console.log("winner ", currentPlayer);
            isInWinState = true
            return true
            
        }
    }
    // displaying current winner
    document.getElementById('winner').textContent === 'Winner is: '
}


function checkTie() {
    
    for (let i = 0; i < boxes.length; i++) {
        if (boxes[i].querySelector(".box-content").textContent === '') {
            return false; 
           
        }
    }
    document.getElementById('itsATie').textContent = 'Its a Tie!'

    
    
    console.log("It's a tie!");
    return true;
}

init()