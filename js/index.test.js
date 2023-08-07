const { shuffle, getRandomCards, game } = require('./index');
const { it, expect, describe } = require('@jest/globals');

describe('shuffle', () => {
  it('should return an array with the same length as the input array', () => {
    const input = [1, 2, 3, 4, 5];
    const output = shuffle(input);
    expect(output.length).toBe(input.length);
  });

  it('should contain all the elements from the input array', () => {
    const input = [1, 2, 3, 4, 5];
    const output = shuffle(input);
    input.forEach((element) => {
      expect(output).toContain(element);
    });
  });
});

describe('getRandomCards', () => {
  it('should set cardDeck array length equal to fieldSize', () => {
    const fieldSize = 4;
    getRandomCards(fieldSize, game);
    expect(game.cardDeck).toHaveLength(fieldSize);
  });

  it('should set all elements in cardDeck array to be numbers between 0 and 36', () => {
    const fieldSize = 6;
    getRandomCards(fieldSize, game);
    game.cardDeck.forEach((card) => {
      expect(card).toBeGreaterThanOrEqual(0);
      expect(card).toBeLessThanOrEqual(36);
    });
  });
});
