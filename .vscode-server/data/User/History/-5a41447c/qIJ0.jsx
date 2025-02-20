import { useState, useEffect } from 'react'
import * as React from 'react';

function NewCard(){

    const[data, setData] = useState(null);
    useEffect(() => {
        fetch(`https://deckofcardsapi.com/api/deck/new/draw/?count=1`)
        .then((response) => response.json())
        .then((data) => {
        setData(data)})
    
    return () => console.log(data)
    }, []);
        

    return (
        <>
            {/* <li>{`Your card is the ${data.cards[0].value} of ${data.cards[0].suit} `}</li> */}
        </>
    );
}

export default NewCard;





import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setMessage('Hello after 1 second!');
      setCount(count + 1);
    }, 1000);

    // Cleanup function
    return () => {
      clearTimeout(timeoutId);
      setMessage('Timeout cleared!');
    };
  }, [count]); // Dependency array

  return (
    <div>
      <p>Count: {count}</p>
      <p>Message: {message}</p>
    </div>
  );
}
export default MyComponent;