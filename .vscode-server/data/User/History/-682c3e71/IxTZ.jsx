import { useState, useEffect } from 'react'

function NumFacts(numReq){

    const[data, setData] = useState(null);
    useEffect(() => {
        fetch(`http://numbersapi.com/1?json`)
        .then((response) => response.json())
        .then((data) => {
        setData(data)})}, [numReq]);
        let test = JSON.parse(data)

        console.log(test)

    

    return (
        <>
            <li>{data}</li>
        </>
        
    );
}

export default NumFacts;