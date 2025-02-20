import { useState, useEffect } from 'react'

function NumFacts(numReq){

    const[data, setData] = useState(null);
    useEffect((numReq) => {
        console.log(numReq)
        fetch(`http://numbersapi.com/${numReq}?json`)
        .then((response) => response.json())
        .then((data) => {
        setData(data)})}, [numReq]);
        
        let finalData = [];
        for (let key in data){
            console.log(data[key])
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