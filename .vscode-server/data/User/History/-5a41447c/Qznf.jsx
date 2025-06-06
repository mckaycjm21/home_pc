import { useState, useEffect } from 'react'
import * as React from 'react';

function NewCard(props){

    const[data, setData] = useState(null);
    const[deckId, setDeckId] = useState("new");

    
    useEffect(() => {
        fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=${props.qty}`)
        .then((response) => response.json())
        .then((data) => {
        setData(data)
        setDeckId(data.deck_id)
        console.log(data)})
    

    }, []);
        

    return (
        <>
            {data.map((info) => {

            {info ? <li>Your card is the {info.cards[0].value} of {data.cards[0].suit} </li>: 
            <p>No Data</p>}

            })}

        </>
    );
}

export default NewCard;