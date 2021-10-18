import React from 'react';
import trash from './images/trash.svg';
import okBefore from './images/okBefore.svg';
import value from './SearchBlock'

function TaskBorder(props) {
    return (
        <div className="task-border">
                <button className="comletedtask-btn" style={{ backgroundImage: `url(${okBefore})` }} />
                <div className="name-task">
                    <div className="name-task-inner text">
                        {value}
                    </div>
                </div>

                <div className="data-task">
                    <div className="data-task-inner text">
                        10.04.2020
                    </div>
                </div>
                <button className="deltask-btn" style={{ backgroundImage: `url(${trash})` }}>

                </button>
            </div>
    );
}

export default TaskBorder
