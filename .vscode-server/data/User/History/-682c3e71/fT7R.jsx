import { useState, useEffect } from 'react'

function NumFacts({numReq}){

    const[data, setData] = useState(null);
    useEffect((numReq) => {
        console.log(numReq)
        fetch(`http://numbersapi.com/1?json`)
        .then((response) => response.json())
        .then((data) => {
        setData(data)})}, [numReq]);
        
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