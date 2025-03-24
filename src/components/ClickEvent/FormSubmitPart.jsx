import React from 'react';

const FormSubmitPart = () => {

    const handleSubmitForm =(event)=>{
        event.preventDefault();

        alert("form submitted")
    }

    return (
        <div>
            <form onSubmit={handleSubmitForm}>
                <input type="text" placeholder='Name'/>
                <button>Submit</button>
            </form>
        </div>
    );
};

export default FormSubmitPart;