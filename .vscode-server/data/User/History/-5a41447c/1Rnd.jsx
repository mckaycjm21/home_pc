import { useState, useEffect } from 'react'
import * as React from 'react';

function NewCard(qty){

    const[data, setData] = useState(null);
    const[deckId, setDeckId] = useState("new");

    
    useEffect(() => {
        fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=${qty}`)
        .then((response) => response.json())
        .then((data) => {
        setData(data)
        setDeckId(data.deck_id)
        console.log(data)})
    

    }, []);
        

    return (
        <>
            {data ? <li>Your card is the {data.cards[0].value} of {data.cards[0].suit} </li>: 
            <p>No Data</p>}
            {data ? <li>Your card is the {data.cards[1].value} of {data.cards[1].suit} </li>: 
            <p>No Data</p>}
        </>
    );
}

export default NewCard;