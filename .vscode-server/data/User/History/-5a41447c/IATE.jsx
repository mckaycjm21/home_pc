import { useState, useEffect } from 'react'
import * as React from 'react';

function NewCard(){

    const[data, setData] = useState(null);
    useEffect(() => {
        fetch(`https://deckofcardsapi.com/api/deck/new/draw/?count=1`)
        .then((response) => response.json())
        .then((data) => {
        setData(data)})}, []);
        

    return (
        <>
            <li>{`Your card is the ${data.cards[0].value} of ${data.cards[0].suit} `}</li>
        </>
    );
}

export default NewCard;