import React from 'react';

const ImmediatelyInvokedFun = () => {

    let marks = 30;

    return (
        // Number - 02 
        <div>
            {(()=>{
                if(marks >= 80 && marks <= 100){
                    return "A+"
                }
                else if(marks >= 60 && marks <= 79){
                    return "A"
                }
                else if(marks >= 40 && marks <= 59){
                    return "A-"
                }
                else if(marks >= 0 && marks <= 39){
                    return "F"
                }
                else{
                    return "This is out of context"
                }
            })()}
        </div>
    );
};

export default ImmediatelyInvokedFun;