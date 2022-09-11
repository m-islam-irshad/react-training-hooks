import React, { useState } from "react";


const CurrentCount = ()=>{
    const Currentvalue = 0;

    let [count , setCount] = useState(Currentvalue);

    const onButtonClick = ()=>{
        
        setCount(count + 1);
    }

    return(
        <div>
        <button onClick={onButtonClick}>Click me</button>
        <div>Current Count: {count}</div>
        </div>
    )

};


export default CurrentCount;