import React, { useState } from 'react';

const ImmutableObjectUseState = () => {

    const [myObj, setMyObj] = useState({
        key1: "Value 1",
        key2: "Value 2",
        key3: "Value 3",
    })

    // EX-01:
    // ### If we want to change all key value...
    const HandleMyObjKeyValueChange = () => {
        setMyObj({
            key1: "Nangzai Value 1",
            key2: "Nangzai Value 2",
            key3: "Nangzai Value 3",
        })
    }

    // EX-02:(THIS IS IDEAL CODE)
    // ### If we want to change all key value or specific key value... 
    // const HandleMyObjKeyValueChange = () => {
    //     setMyObj(previousObj =>({
    //         ...previousObj,
    //         key1: "Abuzam Nangzai Singha value",
    //         key2: "Abuzam Nangzai Singha value",
    //         key3: "Abuzam Nangzai Singha value"
    //     }))
    // }

    return (
        <div>
            <h2>{myObj.key1}</h2>
            <h2>{myObj.key2}</h2>
            <h2>{myObj.key3}</h2>

            <button onClick={HandleMyObjKeyValueChange}>Click</button>
        </div>
    );
};

export default ImmutableObjectUseState;


//Practice here
