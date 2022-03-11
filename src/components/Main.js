import { useState } from "react";
import newDeck from './newDeck';
import Cards from './Cards';

const NEW_DECK = 'full';
const SHUFFLED_DECK = 'shuffled';
const TRICK_DECK = 'trick';

function Main() {
  const [currentDeck, setCurrentDeck] = useState(NEW_DECK);

  return (
    <>
      <div id="cards">
        <Cards deck={newDeck(currentDeck)}/> 
      </div>
      <div className="buttons">
        <button className="full-deck-button" onClick={() => 
          setCurrentDeck(NEW_DECK)}>Full deck</button>
        <button className="shuffle-deck-button" onClick={() => 
          setCurrentDeck(SHUFFLED_DECK)}>Shuffle</button>
        <button className="trick-deck-button" onClick={() => 
          setCurrentDeck(TRICK_DECK)}>Pick 21 cards</button>
      </div>
    </>
  );
}

export default Main;
