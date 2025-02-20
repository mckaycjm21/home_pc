import { useState, useEffect } from 'react'
import * as React from 'react';

function NumBatch(){

    const[data, setData] = useState(null);
    const[dataFinal, setDataFinal] = useState(null);
    useEffect(() => {
        fetch(`http://numbersapi.com/1..3,10?json`)
        .then((response) => response.json())
        .then((data) => {
        setData(data)})}, []);
        console.log(data)
        
        for(let key in data){
            setData(data[key])

        }

    

    return (
        <ul>
        </ul>
        
    );
}

export default NumBatch;