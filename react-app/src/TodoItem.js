import React from 'react';
import trash from './images/trash.svg';
import okBefore from './images/okBefore.svg';
import okClick from './images/okBefore.svg';


export default function TodoItem({ title, time, id, done = false, deleteTask }) {

    let classDone = okBefore;
    if (done) {
        classDone = okClick;
    }
    return (
        <div className="todo-border" key={id}>
            <button className="comletedtodo-btn" style={{ backgroundImage: `url(${classDone})` }} />
            <div className="name-todo">
                <div className="name-todo-inner text">
                    {title}
                </div>
            </div>

            <div className="data-todo">
                <div className="data-todo-inner text">
                    {time}
                </div>
            </div>
            <button className="deltodo-btn" style={{ backgroundImage: `url(${trash})` }}>

            </button>
        </div>
    );
}

