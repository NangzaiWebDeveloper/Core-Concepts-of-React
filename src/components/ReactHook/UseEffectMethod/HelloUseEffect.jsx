// useEffect() method is a part of React Hook :

// 01. The useEffect hook allows you to perform side effects in your components.
// 02. useEffect accepts two arguments. The second argument is optional dependency array.
// 03. useEffect mostly used for Data Fetching.


import React, { useEffect, useState } from 'react';

const HelloUseEffect = () => {

    const [count, setCount] = useState(0)

    //if [count]dependency is exist that means hole code is re-render again.
    //if []dependency is not exist that means hole code is not re-rendering again.
    useEffect(()=>{ 
        console.log("Count change:", count)
    },[count]) //[] this is "Dependency".

    
    const handleIncreaseNumber =()=>{
        setCount(count+1)
    }

    return (
        <div>
            <h1>Number : {count}</h1>
            <button onClick={handleIncreaseNumber}>Increase Btn</button>
        </div>
    );
};

export default HelloUseEffect;