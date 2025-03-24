import React from 'react';

const ClickEventFunction = () => {
    const clickBtn =()=>{
        alert("hello hello")
    }
    return (
        <div>
            <button onClick={clickBtn}>Click</button>
            {/* <button onClick={()=>{alert("hello Nangzai")}}>Press</button> */}
            {/* <button onClick={alert("hello Abuzam")}>Submit</button> */}
        </div>
    );
};

export default ClickEventFunction;