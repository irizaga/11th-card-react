function populateDeck() {
  const CARDS = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
  const SUITS = ['hearts', 'spades', 'diamonds', 'clubs'];

  const elements = document.querySelector("cards");
  if (elements) {
    deleteChildren(elements);
  }

  return SUITS.flatMap((suit) => CARDS.map(card => ({suit: suit, card: card})));
}

function deleteChildren(elements) {
  while (elements) { elements.remove(); }
}

function shuffle(deck) {
  let shuffledDeck = deck.sort(() => Math.random() - 0.5);
  return shuffledDeck;
}

function sliceDeck(deck) {
  let trickDeck = deck.slice(0, 21);
  return trickDeck;
}

export { populateDeck, shuffle, sliceDeck }
