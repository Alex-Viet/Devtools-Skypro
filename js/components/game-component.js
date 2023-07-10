/* eslint-disable prettier/prettier */
import { gameComps } from '../index.js';
import { gameContainer } from '../index.js';

export const renderGame = () => {
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

  const cardsHtml = gameComps.cardDeck
    .map(() => {
      return gameComps.difficultyLevel === 'easy'
        ? `<div class="card-back">
          <img src="./img/card-back.svg" alt="карта" />
        </div>`
        : `<div class="card-back">
        <img src="" alt="карта" />
      </div>`;
    })
    .join('');

  const gameHtml = `
      ${headerHtml}
      <section class="game-field">
      ${cardsHtml}
      </section>`;

  gameContainer.innerHTML = gameHtml;
};
