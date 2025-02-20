import { useState, useEffect } from 'react'
import * as React from 'react';

function NewCard(){

    let dataPerm= {};
    useEffect(() => {
        fetch(`https://deckofcardsapi.com/api/deck/new/draw/?count=1`)
        .then((response) => response.json())
        .then((data) => {
        dataPerm = data})}, []);
     
    console.log(dataPerm)

    }

    return (
            <></>
            // <li>{`Your card is the ${data.cards[0].value} of ${data.cards[0].suit} `}</li>
        
    );
}

export default NewCard;