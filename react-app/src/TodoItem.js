import React from 'react';
import Edit from './Edit';

import trash from './images/trash.svg';
import okBefore from './images/okBefore.svg';
import okClick from './images/okClick.svg';

export default function TodoItem({ todo, changeCompleted, changeName, deleteTask }) {

    const isCompletedd = (completed) => {
        return completed ? okClick : okBefore
    }

    return (
        <li key={todo.uuid}>
            <div className="todo-border" key={todo.uuid}>
                <button className="comletedtodo-btn" onClick={() => changeCompleted(todo.uuid, todo.name, todo.done)}
                    style={{ backgroundImage: `url(${isCompletedd(todo.done)})` }} />
                <Edit 
                    id = {todo.uuid}
                    name = {todo.name}
                    done = {todo.done}
                    changeName = {changeName}
                />
                <div className="data-todo text">
                    {todo.createdAt.slice(0, 10)}
                </div>
                <button className="deltodo-btn" onClick={() => deleteTask(todo.uuid)} style={{ backgroundImage: `url(${trash})` }}>

                </button>
            </div>
        </li>
    );
}

