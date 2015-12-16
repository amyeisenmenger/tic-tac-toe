var playerOneName = prompt('What is your Name Player 1?');
var playerTwoName = prompt('What is your Name Player 2?');
document.getElementById('player_one_name').innerHTML = playerOneName;
document.getElementById('player_two_name').innerHTML = playerTwoName;


var mouse = 'X'
function changeMouse(){
  if (mouse == 'X'){
    mouse = 'O'
  } else {
    mouse = 'X'
  };
};
var boxes = document.getElementsByClassName('tic-tac-toe');
var activeBoxes = document.getElementsByClassName('active-box');

for(var i = 0; i < boxes.length; i++) {
    var box = activeBoxes[i];
    box.addEventListener('click', function() {
      if (this.innerHTML != 'X' && this.innerHTML != 'O' && this.innerHTML != "!") {
          this.classList.remove('active-box');
          this.classList.add('filled-box');
          this.innerHTML = mouse ;
          changeMouse();
      }
      endOfGame();
    });
  };

var filledBoxes = document.getElementsByClassName('filled-box');

function checkWin(){
  if (boxes[0].id in filledBoxes) {
    if (boxes[0].innerHTML == boxes[1].innerHTML && boxes[0].innerHTML == boxes[2].innerHTML) {
      return true;
    } else if (boxes[0].innerHTML == boxes[4].innerHTML && boxes[0].innerHTML == boxes[8].innerHTML){ 
      return true;
    } else if (boxes[0].innerHTML == boxes[3].innerHTML && boxes[0].innerHTML == boxes[6].innerHTML) {
      return true;
    } else {
      return false;
    };
  } else if (boxes[1].id in filledBoxes && boxes[1].innerHTML == boxes[4].innerHTML && boxes[1].innerHTML == boxes[7].innerHTML) {
    return true;
  } else if (boxes[2].id in filledBoxes){
    if (boxes[2].innerHTML == boxes[5].innerHTML && boxes[2].innerHTML == boxes[8].innerHTML) {
      return true;
      // 2,4,6
    }else if (boxes[2].innerHTML == boxes[4].innerHTML && boxes[2].innerHTML == boxes[6].innerHTML){
      return true;
    } else {
      return false;
    };
  } else if (boxes[3].id in filledBoxes && boxes[3].innerHTML == boxes[4].innerHTML && boxes[3].innerHTML == boxes[5].innerHTML) {
    return true;
  } else if (boxes[6].id in filledBoxes && boxes[6].innerHTML == boxes[7].innerHTML && boxes[6].innerHTML == boxes[8].innerHTML) {
    return true;
  } else if (boxes.length == filledBoxes.length) {
    return true;
  } else {
    return false;
  };
};

function endOfGame(){
  if (checkWin() == true){
    for (var i = 0; i < activeBoxes.length; i++) {
      activeBoxes[i].innerHTML = '!';
    };
    alert('Game Over');
  };
};

function resetBoard(){
  for (var i = 0; i < boxes.length; i++) {
      boxes[i].innerHTML = null ;
    };
}

var resetButton = document.getElementById('reset_button');

resetButton.addEventListener('click', function() {
  for (var i = 0; i < boxes.length ; i++) {
    var box = boxes[i];
    box.innerHTML = null;
    box.classList.add('active-box');
    box.classList.remove('filled-box');
  };
});

// change all other boxes class to filled-box