import React, { useRef } from 'react';

const AttributeWithUseRef = () => {

    const changeImage = useRef();

    const handleChangeImage =()=>{
        changeImage.current.src = "https://placehold.co/600x400?text=Hello+World"
        changeImage.current.setAttribute("height", "200");
        changeImage.current.setAttribute("weight", "200")
    }

    return (
        <div>
            <img ref={changeImage} src="https://placehold.co/600x400" alt="" />
            <button onClick={handleChangeImage}>Submit</button>
        </div>
    );
};

export default AttributeWithUseRef;