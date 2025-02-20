import { useState, useEffect } from 'react'
import * as React from 'react';

function NumBatch(){

    const[data, setData] = useState(null);
    useEffect(() => {
        fetch(`http://numbersapi.com/1..3,10?json`)
        .then((response) => response.json())
        .then((data) => {
        setData(data)})}, []);
        console.log(data)
        

    

    return (
        <ul>
            {data.map((key, fact) => (
                <li>{fact}</li>
            ))}
        </ul>
        
    );
}

export default NumBatch;