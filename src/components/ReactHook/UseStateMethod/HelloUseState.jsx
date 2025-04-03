// React hook: useState() method....
// 1. The state is a build in React object that is used to contain data or information about the component.
// 2. A state can be modified based on user action or network changes.
// 3. Every time the state of an object changes, React re-renders the component to the browser.


import React, { useState } from 'react';

const HelloUseState = () => {

    const [count, setCount] = useState(0) //initial value = 0 ; count = 0

    const increase = () => {//added number
        setCount(count + 1)
    }

    return (
        <div>
            <h1>Number : {count}</h1>
            <button onClick={increase}>Add Number +</button>
            
            <button onClick={()=>setCount(count - 1)}>Subtract Number -</button>
        </div>
    );
};

export default HelloUseState;