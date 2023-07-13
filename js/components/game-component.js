import {
  game,
  getCardRank,
  getCardSuit,
  getRandomCards,
  resetGame,
} from '../index.js';
import { gameContainer } from '../index.js';

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
          <div class="timer__count">00.00</div>
        </div>
        <button class="header__button button">Начать заново</button>
      </header>`;

  const cardsHtml = game.cardDeck
    .map((card) => {
      let suit = '',
        rank = '';

      return `
          <div class="card">
            <div class="card__back">
              <img src="./img/card-back.svg" alt="карта" />
            </div>
            <div class="card__front">
              <div class="card__top">
                <div class="card__title">${getCardRank(card, rank)}</div>
                <img class="card__suites_small" src="./img/${getCardSuit(
                  card,
                  suit
                )}.svg" alt="" />
              </div>
              <div class="card__suites">
                <img src="./img/${getCardSuit(card, suit)}.svg" alt="" />
              </div>
              <div class="card__top card__top_flipped">
                <div class="card__title">${getCardRank(card, rank)}</div>
                <img class="card__suites_small" src="./img/${getCardSuit(
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

  const cardsFront = document.querySelectorAll('.card__front');
  const cardsBack = document.querySelectorAll('.card__back');

  setTimeout(() => {
    for (const cardFront of cardsFront) {
      cardFront.style.display = 'none';
    }

    for (const cardBack of cardsBack) {
      cardBack.style.display = 'flex';
    }
  }, 5000);

  const newGameButton = document.querySelector('.button');

  newGameButton.addEventListener('click', resetGame);
};
