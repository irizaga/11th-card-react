import { useState } from "react";
import newDeck from '../utils/Utils';

function DeckBuilder() {
  const [showTrickDeck, setShowTrickDeck] = useState([]);
  const trickDeck = newDeck();
  const firstRow = [...trickDeck].slice(0, 7);
  const secondRow = [...trickDeck].slice(7, 14);
  const thirdRow = [...trickDeck].slice(14, 21);
  
  return (
    <>
      <div id='cards'>
        <div className="first-row">
          {
            firstRow.map(({ suit, card }) => (
              <div className={`singlecard ${suit}`} key={`${card}-${suit}`}>{card}</div>
            ))
          }
        </div>
        <div className="second-row">
          {
            secondRow.map(({ suit, card }) => (
              <div className={`singlecard ${suit}`} key={`${card}-${suit}`}>{card}</div>
            ))
          }
        </div>
        <div className="third-row">
          {
            thirdRow.map(({ suit, card }) => (
              <div className={`singlecard ${suit}`} key={`${card}-${suit}`}>{card}</div>
            ))
          }
        </div>
      </div>
      <div className="buttons">
        <button className="trick-deck-button" onClick={() => 
          setShowTrickDeck (!showTrickDeck) }>Pick 21 cards</button>
      </div>
    </>
  );
}

export default DeckBuilder;
