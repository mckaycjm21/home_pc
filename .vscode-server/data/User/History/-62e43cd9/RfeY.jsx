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
    let url = ""
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
            url = data.cards[0].image;
          }
      })

      return () => {

      }
      

      }, []);    

      return (
          <>
              <img id="cardId" src="{data.cards[0].image}"></img>
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

  return cardData;
}

async function handleClick(e){
    e.preventDefault();
    let card = await secondCard(deckIdPerm)
    .then((data) => data);
    let text = `Your card is the ${card.cards[0].value} of ${card.cards[0].suit} with deck ID of ${card.deck_id}`
    let ul = document.getElementById("newCard")
    let li = document.createElement("li");
    console.log(card)
    document.getElementById("cardId").src=card.cards[0].image;
    li.appendChild(document.createTextNode(text));
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
        <button onClick={handleClick}>Draw Card</button>
        <ul id = "newCard">
          <NewCard />
        </ul>
        <h2>Two cards from same deck</h2>

      </div>
  );
}

export default App;
