import { renderStartPage } from './components/start-page-component.js';

export let gameComps = {
  difficultyLevel: '',
  gameTime: 0,
  cardSuits: ['diamonds', 'hearts', 'clubs', 'spades'],
  cardRanks: ['6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'],
  gameFieldSize: [6, 12, 18],
  cardDeck: [],
};

export const gameContainer = document.getElementById('app');

renderStartPage(gameContainer);

function getRandomCards(max) {
  return Math.floor(Math.random() * max);
}

export function setFieldSize(fieldSize) {
  for (let i = 0; i < fieldSize; i++) {
    gameComps.cardDeck[i] = getRandomCards(fieldSize);
  }
}

export const getCardSuit = (card, suit) => {
  if (card > 0 && card <= 9) {
    suit = gameComps.cardSuits[3];
  } else if (card > 9 && card <= 18) {
    suit = gameComps.cardSuits[1];
  } else if (card > 18 && card <= 27) {
    suit = gameComps.cardSuits[0];
  } else {
    suit = gameComps.cardSuits[2];
  }

  return suit;
};

export const getCardRank = (card, rank) => {
  if (card === 1 || card === 10 || card === 19 || card === 28) {
    rank = gameComps.cardRanks[8];
  } else if (card === 2 || card === 11 || card === 20 || card === 29) {
    rank = gameComps.cardRanks[7];
  } else if (card === 3 || card === 12 || card === 21 || card === 30) {
    rank = gameComps.cardRanks[6];
  } else if (card === 4 || card === 13 || card === 22 || card === 31) {
    rank = gameComps.cardRanks[5];
  } else if (card === 5 || card === 14 || card === 23 || card === 32) {
    rank = gameComps.cardRanks[4];
  } else if (card === 6 || card === 15 || card === 24 || card === 33) {
    rank = gameComps.cardRanks[3];
  } else if (card === 7 || card === 16 || card === 25 || card === 34) {
    rank = gameComps.cardRanks[2];
  } else if (card === 8 || card === 17 || card === 26 || card === 35) {
    rank = gameComps.cardRanks[1];
  } else {
    rank = gameComps.cardRanks[0];
  }

  return rank;
};
