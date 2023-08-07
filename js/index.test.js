const { shuffle } = require('./index');
const { it, expect, describe } = require('@jest/globals');

describe('shuffle', () => {
  it('should shuffle the array', () => {
    const array = [1, 2, 3, 4, 5];

    const shuffledArray = shuffle(array);

    expect(shuffledArray).not.toEqual(array);
  });

  it('should return an array with the same length', () => {
    const array = [1, 2, 3, 4, 5];

    const shuffledArray = shuffle(array);

    expect(shuffledArray.length).toEqual(array.length);
  });

  it('should not modify the original array', () => {
    const array = [1, 2, 3, 4, 5];

    shuffle(array);

    expect(array).toEqual([1, 2, 3, 4, 5]);
  });
});
