import NewDeck from '../components/NewDeck';

describe('Deck', () => {
  const deck = NewDeck('full');
  const trickDeck = NewDeck('trick')

  it ('returns correct number of cards', () => {
    expect(deck.length).toEqual(52);
    expect(trickDeck.length).toEqual(21);
  });
});
