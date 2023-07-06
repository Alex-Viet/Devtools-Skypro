import { renderStartPage } from './components/start-page-component.js';

export let gameComps = {
  difficultyLevel: '',
};

const gameContainer = document.getElementById('app');

renderStartPage(gameContainer);
