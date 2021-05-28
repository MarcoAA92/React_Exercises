import Button from './Button';
import React, { useState } from 'react';

const Body = () => {
    const [count, setCount] = useState(0);
    const addCount = () => {
        if(count >=11){
            setCount(count-1);
            alert("has llegado a 10", count)
        }else{
            setCount(count + 1);
        }
    
      };
      const removeCount = () => {
        if(count <= -1){
            setCount(count+1);
            alert("has llegado a 0", count)
        }else{
            setCount(count - 1);
        }
  
      }; 
    return (
        <div className="container">

          <Button color="blue" text="+" onClick={addCount}/>
          <Button color="blue" text="-" onClick={removeCount}/>
          <p>You clicked {count} times</p>
        </div>
    )
}

export default Body
