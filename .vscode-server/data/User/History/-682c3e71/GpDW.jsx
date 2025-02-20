import { useState, useEffect } from 'react'

function NumFacts(numReq){

    const[data, setData] = useState(null);
    console.log(numReq.numReq)
    useEffect(() => {
        fetch(`http://numbersapi.com/${numReq}?json`)
        .then((response) => response.json())
        .then((data) => {
        setData(data)})}, [numReq]);
        console.log(data)

    

    return (
        <>
            <li>{data}</li>
        </>
        
    );
}

export default NumFacts;