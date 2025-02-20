import { useState, useEffect } from 'react'
import * as React from 'react';

function NumFacts(){

    const[data, setData] = useState(null);
    useEffect(() => {
        fetch(`http://numbersapi.com/1..3,10?json`)
        .then((response) => response.json())
        .then((data) => {
        setData(data)})}, []);
        
        for(let fact in data){
            console.log(fact)
        }

    

    return (
        <ul>
        </ul>
        
    );
}

export default NumFacts;