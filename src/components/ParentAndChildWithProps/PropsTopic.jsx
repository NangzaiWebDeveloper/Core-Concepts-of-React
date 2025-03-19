// topic "props"----
// the term "props" is an abbreviation for "properties";
// used for "passing data" from one component to another;
// props are being passed in a "uni-directional flow" means one way from parent to child component;
// props data is "read only", which means that data coming from parent should not be changed by child component;

import React from 'react';

const PropsTopic = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
        </div>
    );
};

export default PropsTopic;