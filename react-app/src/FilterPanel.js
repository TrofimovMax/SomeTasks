import React from 'react';
import arrowUp from './images/arrowUp.png';
import arrowDown from './images/arrowDown.png';

function FilterPanel({filterAllTask,filterDoneTask, filterUnDoneTask}) {
    return (
        <div className="container-inner">
            <div className="btns">
                <button className="btn text" onClick={() => filterAllTask()}>
                    All
                </button>
                <button className="btn text" onClick={() => filterDoneTask()}>
                    Done
                </button>
                <button className="btn text" onClick={() => filterUnDoneTask()}>
                    Undone
                </button>
            </div>
            <div className="sort-panel">
                <p className="name-sort text">
                    Sort by Date
                </p>
                <div className="updonw">
                    <button className="updown-btn up-btn" 
                    style={{ backgroundImage: `url(${arrowUp})` }}/>

                    <button className="updown-btn down-btn" 
                    style={{ backgroundImage: `url(${arrowDown})` }}/>
                </div>
            </div>
        </div>
    );
}


export default FilterPanel