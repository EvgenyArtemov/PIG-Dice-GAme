
var scores, roundScore, activePlayer, dice;

scores = [0, 0];
roundScore = 0;
activePlayer = 0;

startGame();

document.querySelector('.btn-roll').addEventListener('click', function() {

  var diceBlock1 = document.getElementById("dice1");
  var diceBlock2 = document.getElementById("dice2");

  var dice1 = Math.floor(Math.random() * 6) + 1;
  var dice2 = Math.floor(Math.random() * 6) + 1;

  var currentScorePanel = document.querySelector('#current-' + activePlayer);

  diceBlock1.src = "dice-" + dice1 + ".png";
  diceBlock2.src = "dice-" + dice2 + ".png";

  if(dice1 !== 1 && dice2 !== 1) {
    roundScore += (dice1 + dice2);
    currentScorePanel.textContent = roundScore;
  } else {
     nextPlayer();
  }

})

function nextPlayer() {
  roundScore = 0;

  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';

  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');

  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;


}

function startGame() {
    activePlayer = 0;
    roundScore = 0;
    scores = [0, 0];
    gamePlaying = true;

    document.querySelector('.dice').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}
