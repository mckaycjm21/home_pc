import { useState, useEffect } from 'react'
import * as React from 'react';

function NewCard(){

    const[data, setData] = useState(null);
    const[deckId, setDeckId] = useState("new");
    useEffect(() => {
        fetch(`https://deckofcardsapi.com/api/deck/new/${deckId}/?count=1`)
        .then((response) => response.json())
        .then((data) => {
        setData(data)
        setDeckId(data.deck_id)
        console.log(deckId)})
    
    return () => setData("")
    }, []);
        

    return (
        <>
            {data ? <li>Your card is the {data.cards[0].value} of {data.cards[0].suit} </li>: 
            <p>No Data</p>}
        </>
    );
}

export default NewCard;