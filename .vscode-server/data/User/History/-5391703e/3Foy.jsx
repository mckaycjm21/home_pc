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
        

        let finalData = []
        for(let key in data){
            finalData.push(data[key])
            console.log(finalData)

        }

    

    return (
        <ul>
            <li>finalData[0]</li>
            <li>finalData[1]</li>
            <li>finalData[2]</li>
            <li>finalData[3]</li>
        </ul>
        
    );
}

export default NumBatch;