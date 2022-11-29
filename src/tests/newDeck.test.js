import newDeck from '../components/newDeck';

describe('newDeck', () => {
  const deck = newDeck();

  it ('returns correct number of cards', () => {
    expect(deck.length).toEqual(21);
  });
});
