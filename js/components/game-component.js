import { gameComps, getCardRank, getCardSuit, setFieldSize } from '../index.js';
import { gameContainer } from '../index.js';

export const renderGame = () => {
  if (gameComps.difficultyLevel === 'easy') {
    setFieldSize(gameComps.gameFieldSize[0]);
  } else if (gameComps.difficultyLevel === 'medium') {
    setFieldSize(gameComps.gameFieldSize[1]);
  } else {
    setFieldSize(gameComps.gameFieldSize[2]);
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

  const cardsHtml = gameComps.cardDeck
    .map((card) => {
      let suit = '',
        rank = '';

      return `
          <div class="card">
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
};

// const tempCardsBack = `<div class="card">
// <img src="./img/card-back.svg" alt="карта" />
// </div>`;

// const tempCardsFace = `<div class="card">
// <div class="card__front">
//   <div class="card__top">
//     <div class="card__title">${getCardRank(card, rank)}</div>
//     <img class="card__suites_small" src="./img/${getCardSuit(
//       card,
//       suit
//     )}.svg" alt="" />
//   </div>
//   <div class="card__suites">
//     <img src="./img/${getCardSuit(card, suit)}.svg" alt="" />
//   </div>
//   <div class="card__top card__top_flipped">
//     <div class="card__title">${getCardRank(card, rank)}</div>
//     <img class="card__suites_small" src="./img/${getCardSuit(
//       card,
//       suit
//     )}.svg" alt="" />
//   </div>
//   <div></div>
// </div>
// </div>`;
