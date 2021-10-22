import React from 'react';

export default function InputBlock({addTask, taskTodo, addTaskInList}) {
    return (
        <div className="container-inner">
            <input 
            className="input"
            type="text"
            name="title"
            placeholder="What do you want to do?"
            value={taskTodo.title || ""}
            onChange={addTask}/>
            <button className="btn text" onClick={addTaskInList}>Add</button>
        </div>
    );
}

        
        
        