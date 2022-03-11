import newDeck from './newDeck';
import Cards from './Cards';

const DECK = newDeck();

function Main() {
  return (
    <>
      <div id="cards">
        <div className="first-row">
          <Cards deck={[...DECK].slice(0,7)}/>
        </div><hr/>
        <div className="second-row">
          <Cards deck={[...DECK].slice(7,14)}/>
        </div><hr/>
        <div className="third-row">
          <Cards deck={[...DECK].slice(14,21)}/>
        </div>
      </div>
    </>
  );
}

export default Main;
