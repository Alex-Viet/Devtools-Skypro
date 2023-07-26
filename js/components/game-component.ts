import {
  game,
  getCardRank,
  getCardSuit,
  getRandomCards,
  resetGame,
} from '../index';
import { gameContainer } from '../index';
import { moduleElem, renderResultModule } from './result-component';

let matchedCardsCount = 0,
  counter = 0,
  timerId: any;

export function resetTimer() {
  clearTimeout(timerId);
}

export const renderGame = () => {
  if (game.difficultyLevel === 'easy') {
    getRandomCards(game.fieldSize[0]);
  } else if (game.difficultyLevel === 'medium') {
    getRandomCards(game.fieldSize[1]);
  } else {
    getRandomCards(game.fieldSize[2]);
  }

  const headerHtml = `
      <header class="header">
        <div class="timer">
          <div class="timer__text">
            <div class="timer__min">min</div>
            <div class="timer__sec">sek</div>
          </div>
          <div class="timer__count">${game.gameTime}</div>
        </div>
        <button class="button" id="button-go">Начать заново</button>
      </header>`;

  const cardsHtml = game.cardDeck
    .map((card, index) => {
      let suit = '',
        rank = '';

      return `
          <div class="card__back" data-index="${index}">
            <img src="./static/card-back.svg" alt="карта" />
          </div>
          <div class="card" data-index="${index}">
            <div class="card__front">
              <div class="card__top">
                <div class="card__title">${getCardRank(card, rank)}</div>
                <img class="card__suites_small" src="./static/${getCardSuit(
                  card,
                  suit
                )}.svg" alt="" />
              </div>
              <div class="card__suites">
                <img src="./static/${getCardSuit(card, suit)}.svg" alt="" />
              </div>
              <div class="card__top card__top_flipped">
                <div class="card__title">${getCardRank(card, rank)}</div>
                <img class="card__suites_small" src="./static/${getCardSuit(
                  card,
                  suit
                )}.svg" alt="" />
              </div>
              <div></div>
            </div>
          </div>`;
    })
    .join('');

  const gameHtml = `
      ${headerHtml}
      <section class="game-field">
      ${cardsHtml}
      </section>`;

  gameContainer.innerHTML = gameHtml;

  const cardsFront = document.querySelectorAll('.card');
  const cardsBack = document.querySelectorAll('.card__back');

  timerId = setTimeout(() => {
    for (const cardFront of cardsFront as any) {
      cardFront.style.display = 'none';
    }

    for (const cardBack of cardsBack as any) {
      cardBack.style.display = 'flex';
    }

    game.status = 'start';
    const timer = setInterval(() => {
      if (
        game.status === 'win' ||
        game.status === 'lost' ||
        game.status === 'level'
      ) {
        clearInterval(timer);
        return;
      }
      counter++;
      const minutes = Math.floor(counter / 60)
        .toString()
        .padStart(2, '0');
      const seconds = (counter % 60).toString().padStart(2, '0');
      const timeCount = <HTMLElement>document.querySelector('.timer__count');

      game.gameTime = `${minutes}.${seconds}`;
      timeCount.textContent = game.gameTime;
    }, 1000);
    counter = 0;
  }, 5000);

  for (const cardBack of cardsBack as any) {
    cardBack.addEventListener('click', (event: MouseEvent) => {
      event.stopPropagation();
      const backCardIndex = cardBack.dataset.index;
      cardBack.style.display = 'none';

      for (const cardFront of cardsFront as any) {
        const frontCardIndex = cardFront.dataset.index;
        const card = game.cardDeck[frontCardIndex];

        if (frontCardIndex === backCardIndex) {
          cardFront.style.display = 'flex';
          cardFront.setAttribute('data-card', card);
          game.selectedCards.push(cardFront);

          if (game.selectedCards.length === 2) {
            const firstCard = game.selectedCards[0].dataset.card;
            const secondCard = game.selectedCards[1].dataset.card;

            if (firstCard === secondCard) {
              matchedCardsCount += 2;

              if (matchedCardsCount === game.cardDeck.length) {
                game.status = 'win';
                moduleElem.style.display = 'flex';
                renderResultModule();
                matchedCardsCount = 0;
              }

              game.selectedCards = [];
            } else {
              game.status = 'lost';
              moduleElem.style.display = 'flex';
              renderResultModule();
              matchedCardsCount = 0;
            }
          }
        }
      }
    });
  }

  const newGameBtn = <HTMLElement>document.getElementById('button-go');
  newGameBtn.addEventListener('click', () => {
    resetGame();
  });
};
