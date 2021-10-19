import React from 'react';
import trash from './images/trash.svg';
import okBefore from './images/okBefore.svg';
import okClick from './images/okBefore.svg';


function TodoItem({nameTodo, timeTodo, done = false}) {

    let classDone = okBefore;
    if(done){
        classDone = okClick;
    }
    return (
        <div className="todo-border" >
                <button className="comletedtodo-btn" style={{ backgroundImage: `url(${classDone})` }} />
                <div className="name-todo">
                    <div className="name-todo-inner text">
                        {nameTodo}
                    </div>
                </div>

                <div className="data-todo">
                    <div className="data-todo-inner text">
                        {timeTodo}
                    </div>
                </div>
                <button className="deltodo-btn" style={{ backgroundImage: `url(${trash})` }}>

                </button>
            </div>
    );
}

export default TodoItem
