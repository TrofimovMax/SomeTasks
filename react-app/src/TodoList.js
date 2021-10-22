import React from 'react';
import trash from './images/trash.svg';
import okBefore from './images/okBefore.svg';
import okClick from './images/okBefore.svg';


export default function TodoList({ listTodo, deleteTask, done = false }) {

    let classDone = okBefore;
    if (done) {
        classDone = okClick;
    }

    if (listTodo.length === 0) {
        return <h1 style={{ marginTop: "2vw" }}>Nothing...</h1>;
    } else {
        return (
            <ul>
                {listTodo.map(({ id, title, time }) => {
                    return (
                        <li key={id} className='list-group-item'>
                            <div className="todo-border">
                                <button className="comletedtodo-btn" onClick={(done) => !done} style={{ backgroundImage: `url(${classDone})` }} />
                                <div className="name-todo">
                                    <div className="name-todo-inner text">
                                        {title}
                                    </div>
                                </div>

                                <div className="data-todo">
                                    <div className="data-todo-inner text">
                                        {time.day}/{time.month+1}/{time.year}
                                    </div>
                                </div>
                                <button className="deltodo-btn" onClick={() => deleteTask(id)} style={{ backgroundImage: `url(${trash})` }}>

                                </button>
                            </div>
                        </li>
                    )

                })}
            </ul>
        );
    }
}
