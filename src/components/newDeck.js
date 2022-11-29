const CARDS = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
const SUITS = ['hearts', 'spades', 'diamonds', 'clubs'];

function populateDeck() {
  return SUITS.flatMap((suit) => CARDS.map(card => ({suit: suit, card: card})));
}

function shuffle(deck) {
  let shuffledDeck = deck.sort(() => Math.random() - 0.5);
  return shuffledDeck;
}

function sliceDeck(deck) {
  let trickDeck = deck.slice(0, 21);
  return trickDeck;
}

function newDeck() {
  const deck = populateDeck();

  return sliceDeck((shuffle([...deck]))); 
}

export default newDeck;
