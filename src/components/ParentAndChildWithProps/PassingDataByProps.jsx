import React from 'react';

// if we hold to be this is "Child component";

// EX-1
const PassingDataByProps = ({item}) => {
    return (
        <div>
            <h2>Name: {item.name}</h2>
            <p>Hometown : {item.hometown}</p>
        </div>
    );
};



// EX-2:
// const PassingDataByProps = (props) => {
//     return (
//         <div>
//             <h2>Name: {props.item["name"]}</h2>
//             <p>Hometown : {props.item["hometown"]}</p>
//         </div>
//     );
// };

export default PassingDataByProps;