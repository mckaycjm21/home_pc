import { useState, useEffect } from 'react'
import * as React from 'react';

function NumFacts(props){

    const[data, setData] = useState(null);
    useEffect(() => {
        fetch(`http://numbersapi.com/${props.num}?json`)
        .then((response) => response.json())
        .then((data) => {
        setData(data)})}, []);
        console.log(data["text"])
        let finalData = [];
        for (let key in data){
            if (key == "text"){
                finalData.push(data[key])
            }
        }

    

    return (
        <>
            <li>{finalData}</li>
        </>
        
    );
}

export default NumFacts;