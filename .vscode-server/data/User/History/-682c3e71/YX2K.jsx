import { useState, useEffect } from 'react'

function NumFacts(numReq){

    const[data, setData] = useState(null);
    const[finalData, setFinalData]  = useState("")
    useEffect(() => {
        fetch(`http://numbersapi.com/1?json`)
        .then((response) => response.json())
        .then((data) => {
        setData(data)})}, [numReq]);
        

        for (let key in data){
            console.log(data[key])
            if (key == "text"){
                setFinalData(data[key])
                break
            }
        }

    

    return (
        <>
            <li>{finalData}</li>
        </>
        
    );
}

export default NumFacts;