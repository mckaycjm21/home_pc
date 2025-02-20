import { useState, useEffect } from 'react'

function NumFacts(props){

    const[data, setData] = useState(null);
    useEffect(() => {
        console.log(props.num)
        fetch(`http://numbersapi.com/1?json`)
        .then((response) => response.json())
        .then((data) => {
        setData(data)})}, []);
        
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