import { useState, useEffect } from 'react'
import * as React from 'react';

function NewCard(){

    const[data, setData] = useState(null);
    useEffect(() => {
        fetch(`https://deckofcardsapi.com/api/deck/new/draw/?count=1`)
        .then((response) => response.json())
        .then((data) => {
        setData(data)
        console.log(data.cards[0].image)})
        
    }, []);
     
    let finalData = []
    for(let key in data){
        finalData.push(data[key])
        console.log(finalData)

    }

    return (

            // <li>{`Your card is the ${data.cards[0].value} of ${data.cards[0].suit} `}</li>
        
    );
}

export default NewCard;