var playerOneName = prompt('What is your Name Player 1?');
var playerTwoName = prompt('What is your Name Player 2?');
document.getElementById('player_one_name').innerHTML = playerOneName;
document.getElementById('player_two_name').innerHTML = playerTwoName;

var boxes = document.getElementsByClassName('tic-tac-toe-box');
console.log(boxes);

var mouse = 'X'
function changeMouse(){
  if (mouse == 'X'){
    mouse = 'O'
  } else {
    mouse = 'X'
  };
};

for(var i = 0; i < boxes.length; i++) {
  var box = boxes[i];
  box.addEventListener('click', function() {
    this.innerHTML = mouse ;
    changeMouse();
  });
};

// if boxes[0-2] in row 1 == eachother , etc.
// row 2
// row 3
// column 1
// column 2
// column 3
// diagonal left
// diagonal right
// print 'Game Over'