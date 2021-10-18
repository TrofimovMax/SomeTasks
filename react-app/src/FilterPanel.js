import React from 'react';
import arrowUp from './images/arrowUp.png';
import arrowDown from './images/arrowDown.png';

function FilterPanel(props) {
    return (
        <div className="control-panel">
                <div className="control-btns">
                    <button className="control-btn text">
                        All
                    </button>
                    <button className="control-btn text">
                        Done
                    </button>
                    <button className="control-btn text">
                        Undone
                    </button>
                </div>
                <div className="sort-panel">
                    <p className="name-sort text">
                        Sort by Date
                    </p>
                    <div className="updonw">
                        <button className="updown-btn up-btn" style={{ backgroundImage: `url(${arrowUp})` }}>

                        </button>
                        <button className="updown-btn down-btn" style={{ backgroundImage: `url(${arrowDown})` }}>

                        </button>
                    </div>
                </div>
            </div>
    );
}


export default FilterPanel