const cards = document.querySelectorAll('.game-card');

let hasFlippedCard = false;
let firstCard, secondCard;
let count = 0;
let startBtn = document.getElementsByClassName("strtBtn");

function flipCard() {
  if (this === firstCard) return;

  this.classList.add('flip');

  if (!hasFlippedCard) {

    // first click
    hasFlippedCard = true;
    firstCard = this;

    return;
  }
    
    // second click
    hasFlippedCard = false;
    secondCard = this;

    check();
    victoryMessage();
  
}

function check() {
  if (firstCard.dataset.framework === secondCard.dataset.framework) {

removeCard();

  } else {

    unflipCards();
  }
}

function removeCard() {
    // matched
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    board();
    count++;
}

function unflipCards() {
    // not a match
    setTimeout(() => {
      firstCard.classList.remove('flip');
      secondCard.classList.remove('flip');

      board();
    }, 500);
}

// message
function victoryMessage() {
  setTimeout(()=> {
    if(count == 6) {
      alert("NAILED IT!");
      shuffle();
    }
  }, 500);
}

// Lock board
function board() {
  [hasFlippedCard, setBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

// shuffle cards
function shuffle () {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
};

// gameOver() {
//   clearInterval(this.countdown);
//   document.getElementById('game-over-text').classList.add('visible');
// }
// }

cards.forEach(card => card.addEventListener('click', flipCard));

module.exports = {
  flipCard,
  check,
  removeCard,
  unflipCards,
  victoryMessage,
  board,
  shuffle
}