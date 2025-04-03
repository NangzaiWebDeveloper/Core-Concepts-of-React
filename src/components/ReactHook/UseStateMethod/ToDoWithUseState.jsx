import React, { useState } from 'react';

const ToDoWithUseState = () => {
    
    const [list, setList] = useState([]);
    const [item, setItem] = useState("");

    const handleAddToList =()=>{
        list.push(item);
        setList([...list])
    }

    const handleRemoveFromList =(index)=>{
        list.splice(index, 1);
        setList([...list])
    }

    return (
        <div>
            <table>
                <tbody>
                    {
                        list.length!==0 ? (
                            list.map((element, index)=>(
                                <tr>
                                    <td>{element}</td>
                                    <td><button onClick={()=>{handleRemoveFromList(index)}}>Remove</button></td>
                                </tr>
                            ))
                        ) : (<tr></tr>)
                    }
                </tbody>
            </table>

            <h2>{list.length}</h2>
            <input onChange={(e)=>setItem(e.target.value)} type="text" placeholder='item'/>

            <button onClick={handleAddToList}>Add</button>
        </div>
    );
};

export default ToDoWithUseState;









