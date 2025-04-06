import React from 'react';
import { useState } from 'react';

const FormManageByUseState = () => {

    const [formObj, setFormObj] = useState({ fName: "", lName: "", city: "", gender: "" })

    const handleInputChange = (element, value) => {
        setFormObj(previousObj => (
            {
                ...previousObj,
                [element]: value

            }
        ))
    }

    const handleSubmitForm =(e)=>{
        e.preventDefault();
        console.log(formObj);
    }

    return (
        <div>
            <form onSubmit={handleSubmitForm}>
                <input onChange={(e) => { handleInputChange("fName", e.target.value) }} value={formObj.fName} type="text" placeholder='First Name' />
                <br />
                <input onChange={(e) => { handleInputChange("lName", e.target.value) }} value={formObj.lName} type="text" placeholder='Last Name' />
                <br />
                <select onChange={(e) => { handleInputChange("city", e.target.value) }} value={formObj.city}>
                    <option value="">Choose city</option>
                    <option value="">Dhaka</option>
                    <option value="">Sylhet</option>
                </select>
                <br />
                <p>Gender :
                    <input onChange={() => { handleInputChange("gender", "Male") }} checked={formObj.gender === "Male"} type="radio" placeholder='' />Male
                    <input onChange={() => { handleInputChange("gender", "Female") }} checked={formObj.gender === "Female"} type="radio" placeholder='' />Female
                </p>
                <button>Submit</button>
            </form>
        </div>
    );
};

export default FormManageByUseState;

