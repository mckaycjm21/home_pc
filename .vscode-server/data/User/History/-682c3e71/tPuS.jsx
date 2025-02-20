import { useState, useEffect } from 'react'

function NumFacts(numReq){

    const[data, setData] = useState(null);
    let finalData = ""
    useEffect(() => {
        fetch(`http://numbersapi.com/1?json`)
        .then((response) => response.json())
        .then((data) => {
        setData(data)})}, [numReq]);
        

        for (let key in data){
            console.log(data[key])
            if (key == "text"){
                finalData = data[key];
            }
        }

    

    return (
        <>
            <li>{data}</li>
        </>
        
    );
}

export default NumFacts;