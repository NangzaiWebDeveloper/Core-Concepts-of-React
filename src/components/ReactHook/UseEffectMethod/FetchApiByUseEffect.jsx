import React, { useEffect, useState } from 'react';

const FetchApiByUseEffect = () => {

    const [data, setData] = useState(null)

    useEffect(()=>{
        fetch("https://dummyjson.com/test")//call API by Promises style in UseEffect((), [])
        .then(response => response.json())
        .then(json => setData(json))
    }, [])

    return (
        <div>
            <p>
                {
                JSON.stringify(data)
                }
            </p>
        </div>
    );
};

export default FetchApiByUseEffect;