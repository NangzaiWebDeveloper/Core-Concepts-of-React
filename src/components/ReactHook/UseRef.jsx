// useRef :
// 1.The useRef hook allows you to persist values between renders; 
// 2.it can be used to store a mutable value that does not cause a re-render when updated;
// 3.It can be used to access a DOM element directly.

import React from 'react';
import { useRef } from 'react';

const UseRef = () => {

    const updateText = useRef()

    //innerText By useRef():
    // const handleUpdateText =()=>{
    //     updateText.current.innerText = "Abuzam Nangzai Singha"
    // }

    //innerHTML By useRef():
    const handleUpdateText =()=>{
        updateText.current.innerHTML = "<ul><li>Nangzai</li><li>Joy</li></ul>"
    }

    return (
        <div>
            <h1 ref={updateText}></h1>
            <button onClick={handleUpdateText}>Button</button>
        </div>
    );
};

export default UseRef;