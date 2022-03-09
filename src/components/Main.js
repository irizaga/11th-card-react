import { useState, useEffect} from "react";
import NewDeck from './NewDeck';
import Cards from './Cards';

function Main() {
  const NEW_DECK = 'full';
  const TRICK_DECK = 'trick'
  const [currentDeck, setCurrentDeck] = useState(NEW_DECK);
 
  const deck = NewDeck(currentDeck);

  useEffect(()=> {
    setCurrentDeck(TRICK_DECK);
  }, [currentDeck]);

  return (
    <>
      <div id="cards">
        <div className="first-row">
          <Cards deck={[...deck].slice(0,7)}/>
        </div><hr/>
        <div className="second-row">
          <Cards deck={[...deck].slice(7,14)}/>
        </div><hr/>
        <div className="third-row">
          <Cards deck={[...deck].slice(14,21)}/>
        </div>
      </div>
      <div className="buttons">
        <button className="trick-deck-button" onClick={() => 
          setCurrentDeck(NEW_DECK)}>New deck</button>
      </div>
    </>
  );
}

export default Main;
