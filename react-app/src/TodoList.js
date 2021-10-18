import React from 'react';
import trash from './images/trash.svg';
import okBefore from './images/okBefore.svg';
import value from './InputBlock'

function TodoList(props) {
    return (
        <div className="todo-border">
                <button className="comletedtodo-btn" style={{ backgroundImage: `url(${okBefore})` }} />
                <div className="name-todo">
                    <div className="name-todo-inner text">
                        {value}
                    </div>
                </div>

                <div className="data-todo">
                    <div className="data-todo-inner text">
                        10.04.2020
                    </div>
                </div>
                <button className="deltodo-btn" style={{ backgroundImage: `url(${trash})` }}>

                </button>
            </div>
    );
}

export default TodoList
