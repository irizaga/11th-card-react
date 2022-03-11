const CARDS = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
const SUITS = ['hearts', 'spades', 'diamonds', 'clubs'];
const FULL_DECK = 'full';
const SHUFFLED_DECK = 'shuffled';
const TRICK_DECK = 'trick';

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

function newDeck(deckType) {
  const deck = populateDeck();

  switch (deckType){
    case FULL_DECK: return deck;
    case SHUFFLED_DECK: return shuffle([...deck]);
    case TRICK_DECK: return sliceDeck((shuffle([...deck])));   
  }
}

export default newDeck;
