// # useRef() Caching Expensive Computations :
// 01. When you need to re-use the result multiple times within a component, but you don't want to re-compute
//     the value every time the component re-render.
// 02. let's say you have a component that fetches data from an API. The API call might take a few seconds to 
//     complete, so you don't want to re-fetch the data every time the component renders. Instead, you can use
//     useRef() to cache the result of the API call.

// import React, { useRef } from 'react';

// const ExpensiveComputation = () => {

//     // store or hold "API data" 
//     const holdApiData = useRef(null) 

//     const myPera = useRef(null)

//     // call "API data"
//     const fetchData = async ()=>{
//         const response = await fetch("https://dummyjson.com/products");
//         holdApiData.current = await response.json()
//     }

//     // show API data 
//     const showApiData =()=>{
//         myPera.current.innerText =JSON.stringify(holdApiData.current)
//     }

//     return (
//         <div>
//             <p ref={myPera}></p>
//             <button onClick={fetchData}>Call API</button>
//             <button onClick={showApiData}>Show data</button>
//         </div>
//     );
// };

// export default ExpensiveComputation;





//Practice here:
