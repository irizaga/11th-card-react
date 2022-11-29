import { useState } from 'react';
import newDeck from './newDeck';
import Cards from './Cards';

const TRICK_DECK = newDeck();
const ROUNDS = 3;
const FIRST_ROW = 'first';
const SECOND_ROW = 'second';
const THIRD_ROW = 'third';

function Main() {
  const [deck, setDeck] = useState([...TRICK_DECK]);
  const [round, setRound] = useState(1);
  let firstRow = [];
  let secondRow = []
  let thirdRow = [];
  let fixedDeck = [...deck]

  while(fixedDeck.length > 0) {
    firstRow.push(fixedDeck.shift());
    secondRow.push(fixedDeck.shift());
    thirdRow.push(fixedDeck.shift());
  }
  
  return (
    <>
      <div id="cards">
        <div className="first-row"><p>1</p>
          <Cards deck={firstRow}/>
        </div><hr/>
        <div className="second-row"><p>2</p>
          <Cards deck={secondRow}/>
        </div><hr/>
        <div className="third-row"><p>3</p>
          <Cards deck={thirdRow}/>
        </div>
      </div>

      {
      (round > ROUNDS) ?
        <div className="trick-text">
          <p>Your card is:</p>
          {secondRow.map((card, index) => {
            if (index === 3) {
              return (<p className='picked-card' 
              key={`${card.card}-${card.suit}`}> {card.card} of {card.suit}</p>)
            } else { 
              return 
            }
          })}
        </div>
        : 
        <div className="trick-text">
          <p>In which row is your card?</p>
        </div>
      }

      <div className='buttons'>
        <button className='select-row-button' onClick={() => Trick(FIRST_ROW)}>Row 1</button>
        <button className='select-row-button' onClick={() => Trick(SECOND_ROW)}>Row 2</button>
        <button className='select-row-button' onClick={() => Trick(THIRD_ROW)}>Row 3</button>
      </div>
    </>
  );

  function Trick(row) {
    if (round > ROUNDS) return;

    let mergedDeck = [];

    if (row === FIRST_ROW) {
      mergedDeck = [...secondRow, ...firstRow, ...thirdRow];
    } else if (row === SECOND_ROW) {
      mergedDeck = [...thirdRow, ...secondRow, ...firstRow];
    } else {
      mergedDeck = [...firstRow, ...thirdRow, ...secondRow];
    }

    setDeck(mergedDeck);
    setRound(round + 1);
  }
}
export default Main;
