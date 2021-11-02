import React from 'react';
import Edit from './Edit';

import trash from './images/trash.svg';
import okBefore from './images/okBefore.svg';
import okClick from './images/okClick.svg';

export default function TodoItem({ id, name, time, completed, changeCompleted, changeName, deleteTask }) {

    const isCompletedd = (completed) => {
        return completed ? okClick : okBefore
    }

    return (
        <li key={id}>
            <div className="todo-border">
                <button className="comletedtodo-btn" onClick={() => changeCompleted(id)}
                    style={{ backgroundImage: `url(${isCompletedd(completed)})` }} />
                <Edit 
                    id = {id}
                    name = {name}
                    changeName = {changeName}
                />
                <div className="data-todo text">
                    {time.day}/{time.month + 1}/{time.year}
                </div>
                <button className="deltodo-btn" onClick={() => deleteTask(id)} style={{ backgroundImage: `url(${trash})` }}>

                </button>
            </div>
        </li>
    );
}

