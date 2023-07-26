import { game } from '../index.js';
import { renderGame } from './game-component.js';

export const renderStartPage = (appElem) => {
  game.status = 'level';
  const startPageHtml = `
      <div class="info">
        <p class="info__title">
          Выбери<br />
          сложность
        </p>
        <form class="info__form">
          <div class="info__level">
            <input type="radio" name="radio" value="easy" id="dif-easy" />
            <label for="dif-easy" class="info__level-choice">1</label>
            <input type="radio" name="radio" value="medium" id="dif-med" />
            <label for="dif-med" class="info__level-choice">2</label>
            <input type="radio" name="radio" value="hard" id="dif-hard" />
            <label for="dif-hard" class="info__level-choice">3</label>
          </div>
          <div>
            <button type="submit" class="info__go-button button" id="button-go">Старт</button>
          </div>
        </form>
      </div>`;

  appElem.innerHTML = startPageHtml;

  const goButton = document.getElementById('button-go'),
    difLevelBtnElems = document.querySelectorAll('input');

  for (const difLevelBtnElem of difLevelBtnElems) {
    difLevelBtnElem.addEventListener('click', (event) => {
      event.stopPropagation();
      game.difficultyLevel = difLevelBtnElem.value;

      goButton.addEventListener('click', (event) => {
        event.preventDefault();
        event.stopPropagation();

        renderGame();
      });
    });
  }
};
