import newDeck from '../utils/Utils';

describe('functions', () => {
  const deck = newDeck();

  it ('returns correct number of cards', () => {
    expect(deck.length).toEqual(21);
  });
});
