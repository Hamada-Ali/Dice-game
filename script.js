// import elements
const dice = document.querySelector(".dice");
const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");
const score0 = document.getElementById('score--0');
const score1 = document.getElementById('score--1');
const rollBtn = document.querySelector('.btn--roll');
const newBtn = document.querySelector('.btn--new');
const holdBtn = document.querySelector('.btn--hold');
const current0 = document.getElementById('current--0');
const current1 = document.getElementById('current--1');
const playerActive = document.querySelector('.player--active');
const thePlayer = document.querySelectorAll('.player')

score0.textContent = 0;
score1.textContent = 0;
dice.classList.add("hidden");
let currentDice = 0;
let activePlayer = 0;
let holdValue = 0;
let done = false;
const swtich = (acitvePlayer) => {
  if(!done) {
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0.classList.toggle('player--active')
  player1.classList.toggle('player--active')
  document.getElementById(`current--${acitvePlayer}`).textContent = 0;
  dice.src = `dice-${1}.png`;
  }
}

const rolling = () => {

  // generate random dice
  const random = Math.trunc(Math.random() * 6) + 1;

  // display dice images
  dice.src = `dice-${random}.png`;
  dice.classList.remove('hidden');

  // check if the dice greater than one
  if(random !== 1) {
    currentDice += random;
    document.getElementById(`current--${activePlayer}`).textContent = currentDice;
  } else {

    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentDice = 0;
    swtich(activePlayer);
  }
}

const finalScore = document.getElementById(`score--${activePlayer}`).textContent;
const hold = () => {
  if (Number(document.getElementById(`score--${activePlayer}`).textContent) >= 20 && !done) {
    document.querySelector(`.player--${activePlayer}`).style.backgroundColor = "#222";
    done = true;
  } else {
    holdValue = parseInt(document.getElementById(`score--${activePlayer}`).textContent);
    holdValue += currentDice;
    document.getElementById(`score--${activePlayer}`).textContent = holdValue;
    holdValue = 0
    currentDice = 0
    swtich(activePlayer);
  }

}


const reset = () => {
  holdValue = 0;
  currentDice =0;
  document.getElementById(`score--0`).textContent = 0;
  document.getElementById(`score--1`).textContent = 0;
  document.getElementById(`current--0`).textContent = 0;
  document.getElementById(`current--0`).textContent = 0;
  document.querySelector(`.player--0`).style.backgroundColor = "";
  document.querySelector(`.player--1`).style.backgroundColor = "";
  
}

rollBtn.addEventListener('click', rolling)
newBtn.addEventListener('click', reset)
holdBtn.addEventListener('click', hold)

