import { useState } from "react";
import { populateDeck, shuffle, sliceDeck } from './Utils';

function DeckBuilder() {
  const deck = populateDeck();
  const shuffledDeck = shuffle([...deck]);
  const trickDeck = sliceDeck([...shuffledDeck]);

  const [showDeck, setShowDeck] = useState(true);
  const [showShuffled, setShowShuffled] = useState(false);
  const [showTrickDeck, setShowTrickDeck] = useState(false)

  return (
    <>
      <div id='cards'>
        { 
          showDeck && deck.map(({ suit, card }) => (
            <div className={`singlecard ${suit}`} key={`${card}-${suit}`}>{card}</div>
          ))  
        }
        {
          showShuffled && shuffledDeck.map(({ suit, card }) => (
            <div className={`singlecard ${suit}`} key={`${card}-${suit}`}>{card}</div>
          ))
        }
        {
          showTrickDeck && trickDeck.map(({ suit, card }) => (
            <div className={`singlecard ${suit}`} key={`${card}-${suit}`}>{card}</div>
          ))
        }
      </div>
      <div className="buttons">
        <button className="full-deck-button" onClick={() => { setShowDeck(true); 
          setShowShuffled(false); setShowTrickDeck (false); }}>Full deck</button>
        <button className="shuffle-deck-button" onClick={() => { setShowDeck(false); 
          setShowShuffled(true); setShowTrickDeck (false); }}>Shuffle deck</button>
        <button className="trick-deck-button" onClick={() => { setShowDeck(false); 
          setShowShuffled(false); setShowTrickDeck (true); }}>Pick 21 cards</button>
      </div>
    </>
  );
}

export default DeckBuilder;
