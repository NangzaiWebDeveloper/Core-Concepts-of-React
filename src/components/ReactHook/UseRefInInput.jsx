import React, { useRef } from 'react';

const UseRefInInput = () => {

    // let firstName = useRef()
    // let lastName = useRef()
    let firstName, lastName = useRef();
    
    const handleGetUserValue =()=>{
        // let fName = firstName.current.value;
        let fName = firstName.value;
        // let lName = lastName.current.value;
        let lName = lastName.value;

        alert(fName +" "+lName)
    }

    return (
        <div>
            {/* <input ref={firstName} type="text" placeholder='First Name' /> */}
            <input ref={(a)=>firstName=a} type="text" placeholder='First Name' />
            <br />
            {/* <input ref={lastName} type="text" placeholder='Last Name' /> */}
            <input ref={(b)=>lastName=b} type="text" placeholder='Last Name' />
            <br />
            <button onClick={handleGetUserValue}>Submit</button>
        </div>
    );
};

export default UseRefInInput;