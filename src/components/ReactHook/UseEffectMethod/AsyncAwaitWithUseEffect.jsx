import React, { useEffect, useState } from 'react';

const AsyncAwaitWithUseEffect = () => {

    const [data, setData] = useState(null)

    //we can not directly Fetch data in useEffect by async await, if we want to fetch data by async await in useEffect()
    //then we need to write Immediately Invoke Function(IIF) "()()"".
    useEffect(() => {
        (async () => {
            let response = await fetch("https://dummyjson.com/products")
            let json = await response.json()
            setData(json)
        })()
    }, [data])

    //Fetch API by Promise
    // useEffect(() => {
    //     fetch("https://dummyjson.com/products")
    //         .then(response => response.json())
    //         .then(json => setData(json))
    // }, [data])


    return (
        <div>
            <p>{JSON.stringify(data)}</p>
        </div>
    );
};

export default AsyncAwaitWithUseEffect;

























