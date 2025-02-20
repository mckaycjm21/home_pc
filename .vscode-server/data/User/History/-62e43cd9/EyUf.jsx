import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NumFacts from './component/NumFacts.jsx'
import NumBatch from './component/NumBatch.jsx'




function App() {

  let deckIdPerm = ""

  function NewCard(){

    const [data, setData] = useState(null);
    const [deckId, setDeckId] = useState("new");

      useEffect(() => {

          fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
          .then((response) => response.json())
          .then((data) => {
          setData(data)
          if(deckId == "new")
          {
            setDeckId(data.deck_id)
            deckIdPerm = data.deck_id
            console.log(deckIdPerm)
          }
      })

      return () => {

      }
      

      }, []);
          

      return (
          <>
              {data ? <li>Your card is the {data.cards[0].value} of {data.cards[0].suit} with deck ID of {data.deck_id} </li>: 
              <p>No Data</p>}
          </>
      );
  } 



async function secondCard(deckId) {
  let cardData = await fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
  .then((response) => response.json())
  .then((data) => {
    return data
  })
  console.log(cardData)

  return `Your card is the ${cardData.cards[0].value} of ${cardData.cards[0].suit} with deck ID of ${cardData.deck_id}`;
}

async function handleClick(e){
    e.preventDefault();
    let card = await secondCard(deckIdPerm)
    .then((data) => data);
    console.log(card)
    let ul = document.getElementById("newCard")
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(card));
    ul.appendChild(li);
  }

  
  return (
      <div>
        <h2>Number Facts (Individual Requests)</h2>
        <ul>
          <NumFacts num= {1} />
          <NumFacts num= {1} />
          <NumFacts num= {1} />
          <NumFacts num= {1} />
        </ul>
        <h2>Number Fact (Batch Request)</h2>
          <NumBatch />
        <h2>Card Draw</h2>
        <ul id = "newCard">
          <NewCard />
        </ul>
        <button onClick={handleClick}>Draw Card</button>
        <h2>Two cards from same deck</h2>

      </div>
  );
}

export default App;
