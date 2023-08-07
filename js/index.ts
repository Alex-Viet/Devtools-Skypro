import { renderStartPage } from './components/start-page-component';
import '../css/style.css';
import { resetTimer } from './components/game-component';

type Game = {
  difficultyLevel: string;
  gameTime: string;
  cardSuits: string[];
  cardRanks: string[];
  fieldSize: number[];
  cardDeck: number[];
  selectedCards: any[];
  status: string;
};

export let game: Game = {
  difficultyLevel: '',
  gameTime: '00.00',
  cardSuits: ['diamonds', 'hearts', 'clubs', 'spades'],
  cardRanks: ['6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'],
  fieldSize: [6, 12, 18],
  cardDeck: [],
  selectedCards: [],
  status: '',
};

export const gameContainer = document.getElementById('app') as HTMLElement;

renderStartPage(gameContainer);

export function getRandomCards(fieldSize: number) {
  for (let i = 0; i < fieldSize; i += 2) {
    let n;

    do {
      n = Math.floor(Math.random() * 37);
    } while (game.cardDeck.includes(n));

    game.cardDeck[i] = n;
    game.cardDeck[i + 1] = n;
    shuffle(game.cardDeck);
  }
}

export function shuffle(array: number[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export const getCardSuit = (card: number, suit: string) => {
  if (card > 0 && card <= 9) {
    suit = game.cardSuits[3];
  } else if (card > 9 && card <= 18) {
    suit = game.cardSuits[1];
  } else if (card > 18 && card <= 27) {
    suit = game.cardSuits[0];
  } else {
    suit = game.cardSuits[2];
  }

  return suit;
};

export const getCardRank = (card: number, rank: string) => {
  if (card === 1 || card === 10 || card === 19 || card === 28) {
    rank = game.cardRanks[8];
  } else if (card === 2 || card === 11 || card === 20 || card === 29) {
    rank = game.cardRanks[7];
  } else if (card === 3 || card === 12 || card === 21 || card === 30) {
    rank = game.cardRanks[6];
  } else if (card === 4 || card === 13 || card === 22 || card === 31) {
    rank = game.cardRanks[5];
  } else if (card === 5 || card === 14 || card === 23 || card === 32) {
    rank = game.cardRanks[4];
  } else if (card === 6 || card === 15 || card === 24 || card === 33) {
    rank = game.cardRanks[3];
  } else if (card === 7 || card === 16 || card === 25 || card === 34) {
    rank = game.cardRanks[2];
  } else if (card === 8 || card === 17 || card === 26 || card === 35) {
    rank = game.cardRanks[1];
  } else {
    rank = game.cardRanks[0];
  }

  return rank;
};

export function resetGame() {
  game.cardDeck = [];
  game.selectedCards = [];
  game.difficultyLevel = '';
  game.gameTime = '00.00';
  game.status = 'level';

  resetTimer();
  renderStartPage(gameContainer);
}
