import React, { useState } from 'react';

export default function InputBlock({addTaskInList}) {
    const [nameTodo, setNameTodo] = useState('');

    function handleChange(e) {
        setNameTodo(e.target.value);
    }

    const handleAddInTask = (e) => {
        e.preventDefault();
        addTaskInList(nameTodo);
        setNameTodo('')
    }

    return (
        <form className='container-inner' onSubmit={(e)=>handleAddInTask(e) }>
            <input 
            className='input'
            type='text'
            name='title'
            placeholder='What do you want to do?'
            value={nameTodo}
            onChange={handleChange}/>
            <button className='btn text' onClick={handleAddInTask}>Add</button>
        </form>
    );
}   
        