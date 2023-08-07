import { game, resetGame } from '../index';

export const moduleElem = document.querySelector('.module') as HTMLElement;

export const renderResultModule = () => {
  const gameResultHtml = `
    <div class="info result">
      <img class="info__img" src="./static/${
        game.status === 'win' ? 'celebration' : 'dead'
      }.svg" alt="" />
      <p class="info__title result__title">${
        game.status === 'win' ? 'Вы выиграли!' : 'Вы проиграли!'
      }</p>
      <p class="info__time-title">Затраченное время:</p>
      <div class="timer">
        <div class="timer__count result__count">${game.gameTime}</div>
      </div>
      <div>
        <button type="submit" class="result__go-button button" id="button-go">
          Играть снова
        </button>
      </div>
    </div>`;

  moduleElem.innerHTML = gameResultHtml;

  const newGameButton = document.querySelector(
    '.result__go-button'
  ) as HTMLElement;

  newGameButton.addEventListener('click', () => {
    moduleElem.style.display = 'none';
    resetGame();
  });
};
