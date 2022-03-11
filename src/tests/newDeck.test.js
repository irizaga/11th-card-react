import newDeck from '../components/newDeck';

describe('Deck', () => {
  const deck = newDeck('full');
  const trickDeck = newDeck('trick')

  it ('returns correct number of cards', () => {
    expect(deck.length).toEqual(52);
    expect(trickDeck.length).toEqual(21);
  });
});
