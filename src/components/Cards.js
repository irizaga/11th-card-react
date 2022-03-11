function Cards({deck}) {
  
  return (
    <>
      { 
        deck.map(({ suit, card }) => (
          <div className={`singlecard ${suit}`} key={`${card}-${suit}`}>{card}</div>
        ))  
      }
    </>
  )
}

export default Cards;
