import { renderStartPage } from './components/start-page-component.js';

export let gameComps = {
  difficultyLevel: '',
  gameTime: 0,
  cardSuits: ['Diamonds', 'Hearts', 'Clubs', 'Spades'],
  cardRanks: ['6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'],
  gameFieldSize: 36,
  cardDeck: [],
};

export const gameContainer = document.getElementById('app');

renderStartPage(gameContainer);

function getRandomCards(max) {
  return Math.floor(Math.random() * max);
}

for (let i = 0; i < gameComps.gameFieldSize; i++) {
  gameComps.cardDeck[i] = getRandomCards(gameComps.gameFieldSize);
}
