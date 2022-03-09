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

function NewDeck(deckType) {
  const deck = populateDeck();
  const shuffled = shuffle([...deck]);
  
  switch (deckType){
    case 'full': return deck;
    case 'shuffled': return shuffled;
    case 'trick': return sliceDeck([...shuffled]);   
  }
}

export default NewDeck;
