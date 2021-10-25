import React from 'react';
import trash from './images/trash.svg';
import okBefore from './images/okBefore.svg';
import okClick from './images/okClick.svg';


export default function TodoList({listTodo, changeCompleted, deleteTask}) {

    const isCompletedd = (completed) => {
        return completed ? okClick : okBefore
    }

    if (listTodo.length === 0) {
        return <h1 style={{ marginTop: "2vw" }}>Nothing...</h1>;
    } else {
        return (
            <ul className={'list-group-item'}>
                {listTodo.map(({ id, name, time, completed }) => {
                    return (
                        <li key={id}>
                            <div className="todo-border">
                                <button className="comletedtodo-btn" onClick={() => changeCompleted(id)} 
                                style={{ backgroundImage: `url(${isCompletedd(completed)})`}} />
                                <div className="name-todo text">
                                    {name}   
                                </div>
                                <div className="data-todo text">
                                    {time.day}/{time.month+1}/{time.year}
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
