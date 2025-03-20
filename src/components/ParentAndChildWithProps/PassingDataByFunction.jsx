import React from 'react';

const PassingDataByFunction = (props) => {
    return (
        <div>
            <button onClick={props.childClickBtn}>Button</button>
        </div>
    );
};

export default PassingDataByFunction;