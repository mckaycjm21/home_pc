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
        console.log(Object.values(data));

    

    return (
        <ul>
        </ul>
        
    );
}

export default NumBatch;