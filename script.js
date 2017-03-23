let turn = true;
let tds = document.querySelectorAll("td");
let maxMoves = 9;
let matches1 = [
  {match: 0, value:[9,5,1]},
  {match: 0, value:[7,5,3]},
  {match: 0, value:[4,5,6]},
  {match: 0, value:[7,8,9]},
  {match: 0, value:[1,2,3]},
  {match: 0, value:[1,4,7]},
  {match: 0, value:[2,5,8]},
  {match: 0, value:[3,6,9]},
  {match: 0, value:[3,5,7]}
];
let matches2 = [
  {match: 0, value:[9,5,1]},
  {match: 0, value:[7,5,3]},
  {match: 0, value:[4,5,6]},
  {match: 0, value:[7,8,9]},
  {match: 0, value:[1,2,3]},
  {match: 0, value:[1,4,7]},
  {match: 0, value:[2,5,8]},
  {match: 0, value:[3,6,9]},
  {match: 0, value:[3,5,7]}
];

function player1(val){
  // loop through possible combos and compare if 'x' is found
  // if so, add ++ to match, 3 needed to win
  for(key of matches1){
    for (x of key.value) {
      if(x == val){
        key.match += 1;
        if(key.match == 3) {
          document.querySelector(".end").innerHTML = "Pelaaja 1 WINS!"
          tds.forEach(td => td.removeEventListener('click',moves));
        }
      }
    }
  }
}
function player2(val){
  // loop through possible combos and compare if 'o' is found
  // if so, add ++ to match, 3 needed to win

for(key of matches2){
    for (x of key.value) {
        if(x == val){
          key.match += 1;
          console.log(key.match);
          if(key.match == 3) {
            document.querySelector(".end").innerHTML = "Pelaaja 2 WINS!"
            tds.forEach(td => td.removeEventListener('click',moves));
        }
      }
    }
  }
}

function moves() {
  // Check if draw
  if(maxMoves == 0) {
    document.querySelector(".end").innerHTML = " TASURI!"
    turn ? this.innerHTML = "X" : this.innerHTML = "O";
    tds.forEach(td => td.removeEventListener('click',moves));
  }
  // Check for 'X' || 'O' turn and pass the value to player1/player2 for check
  if (turn){
      turn = false;
      console.log(this.innerHTML.length);
      if(this.innerHTML.length == 0) {
        this.innerHTML = "X";
        maxMoves--;
        player1(this.getAttribute('data-value'));
      }
  } else {
      turn = true;
      if(this.innerHTML.length === 0) {
        this.innerHTML = "O";
        maxMoves--;
        player2(this.getAttribute('data-value'));
      }
    }
  }


function reset(){
  // clear board
  for (x of tds) {
    x.innerHTML = "";
  }
  //player 1 'x' matches reset
  for (x of matches1){
    x.match = 0;
    console.log(x);
  }
  //player 2 'o' matches reset
  for (x of matches2){
    x.match = 0;
  }

  document.querySelector(".end").innerHTML = "Ristin0lla!";
  maxMoves = 9;
  // start listening again after being stopped
   tds.forEach(td => td.addEventListener('click',moves));
}

document.querySelector(".reset").addEventListener("click",reset);
 tds.forEach(td => td.addEventListener('click',moves));
