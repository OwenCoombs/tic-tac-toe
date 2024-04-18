
var currentPlayer = 'X'; // Start with player X

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


  var box1, box2, box3, box4, box5, box6, box7, box8, box9;
  var box1 = document.getElementById('b1');
  var box2 = document.getElementById('b2');
  var box3 = document.getElementById('b3');
  var box4 = document.getElementById('b4');
  var box5 = document.getElementById('b5');
  var box6 = document.getElementById('b6');
  var box7 = document.getElementById('b7');
  var box8 = document.getElementById('b8');
  var box9 = document.getElementById('b9');

  box1.addEventListener('click', function() {
    this.querySelector('.box-content').textContent = currentPlayer;
    for (var i = 0; i < 1; i++) {
    if (currentPlayer === 'X') {
        currentPlayer = 'O';
    } else {
        currentPlayer = 'X';
    }
}
  });

  box2.addEventListener('click', function() {
    this.querySelector('.box-content').textContent = currentPlayer;
    for (var i = 0; i < 1; i++) {
    if (currentPlayer === 'X') {
        currentPlayer = 'O';
    } else {
        currentPlayer = 'X';
    }
}
  });

  box3.addEventListener('click', function() {
    this.querySelector('.box-content').textContent = currentPlayer;
    for (var i = 0; i < 1; i++) {
    if (currentPlayer === 'X') {
        currentPlayer = 'O';
    } else {
        currentPlayer = 'X';
    }
}
  });

  box4.addEventListener('click', function() {
    this.querySelector('.box-content').textContent = currentPlayer;
    for (var i = 0; i < 1; i++) {
    if (currentPlayer === 'X') {
        currentPlayer = 'O';
    } else {
        currentPlayer = 'X';
    }
}
  });

  box5.addEventListener('click', function() {
    this.querySelector('.box-content').textContent = currentPlayer;
    for (var i = 0; i < 1; i++) {
    if (currentPlayer === 'X') {
        currentPlayer = 'O';
    } else {
        currentPlayer = 'X';
    }
}
  });

  box6.addEventListener('click', function() {
    this.querySelector('.box-content').textContent = currentPlayer;
    for (var i = 0; i < 1; i++) {
    if (currentPlayer === 'X') {
        currentPlayer = 'O';
    } else {
        currentPlayer = 'X';
    }
}
  });

  box7.addEventListener('click', function() {
    this.querySelector('.box-content').textContent = currentPlayer;
    for (var i = 0; i < 1; i++) {
    if (currentPlayer === 'X') {
        currentPlayer = 'O';
    } else {
        currentPlayer = 'X';
    }
}
  });

  box8.addEventListener('click', function() {
    this.querySelector('.box-content').textContent = currentPlayer;
    for (var i = 0; i < 1; i++) {
    if (currentPlayer === 'X') {
        currentPlayer = 'O';
    } else {
        currentPlayer = 'X';
    }
}
  });

  box9.addEventListener('click', function() {
    this.querySelector('.box-content').textContent = currentPlayer;
    for (var i = 0; i < 1; i++) {
    if (currentPlayer === 'X') {
        currentPlayer = 'O';
    } else {
        currentPlayer = 'X';
    }
}
  });

//   checking if X won




