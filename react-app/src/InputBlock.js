import React, { useState } from 'react';

export default function InputBlock({addTaskInList}) {
    const [nameTodo, setnameTodo] = useState('');

    function handleChange(e) {
        setnameTodo(e.target.value);
    }  
    const handleAddInTask = (e) => {
        e.preventDefault();
        addTaskInList(nameTodo);
        setnameTodo('')
    }

    return (
        <div className="container-inner">
            <input 
            className="input"
            type="text"
            name="title"
            placeholder="What do you want to do?"
            value={nameTodo}
            onChange={handleChange}/>
            <button className="btn text" onClick={handleAddInTask}>Add</button>
        </div>
    );
}   
        