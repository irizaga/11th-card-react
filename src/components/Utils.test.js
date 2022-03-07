import { populateDeck, shuffle, sliceDeck } from './Utils';

describe('functions', () => {
  const fullDeck = populateDeck();
  const shuffled = shuffle(fullDeck);
  const trickDeck = sliceDeck(shuffled);

  it ('returns correct number of cards', () => {
    expect(fullDeck.length).toEqual(52);
    expect(shuffled.length).toEqual(52);
    expect(trickDeck.length).toEqual(21);
  });
});
