import React from 'react';
import UseRef from './UseRef';

const MutableValue = () => {

    let increase = UseRef(0)

    let handleIncreaseBtn =()=>{
        increase.current++;
        console.log(increase.current);
        //in this code have some error console does not return in value.
    }

    return (
        <div>
            <button onClick={handleIncreaseBtn}>Press</button>
        </div>
    );
};

export default MutableValue;