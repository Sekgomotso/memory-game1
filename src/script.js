const cards = document.querySelectorAll('.game-card');

let hasFlippedCard = false;
let firstCard, secondCard;
let count = 0;

function flipCard() {
  this.classList.add('flip');

  if (!hasFlippedCard) {

    // first click
    hasFlippedCard = true;
    firstCard = this;
  } else {
    
    // second click
    hasFlippedCard = false;
    secondCard = this;

    if (firstCard.dataset.framework === secondCard.dataset.framework) {

      // matched
      firstCard.removeEventListener('click', flipCard);
      secondCard.removeEventListener('click', flipCard);
      count++;
    } else {

      // not a match
      setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
      }, 500);
    }

    if (count == 6) {
      alert("Victory!");
    }
  }
}

class Game {
  constructor (totalTime) {
    this.totalTime = totalTime;
    this.timer = document.getElementById('time-remaining');
  }

  start() {
    this.cardCheck = null;
    setTimeout(() => {
      this.countdown = startCount();
    }, 500)
  }

  startCount() {
    return setInterval(() => {
        this.timeRemaining--;
        this.timer.innerText = this.timeRemaining;
        if(this.timeRemaining === 0)
            this.gameOver();
    }, 1000);
}

gameOver() {
  clearInterval(this.countdown);
  document.getElementById('game-over-text').classList.add('visible');
}
}

cards.forEach(card => card.addEventListener('click', flipCard));

module.exports = {
  flipCard
}