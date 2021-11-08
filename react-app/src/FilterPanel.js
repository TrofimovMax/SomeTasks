import React from 'react';
import arrowUp from './images/arrowUp.png';
import arrowDown from './images/arrowDown.png';

function FilterPanel({updateFilter, updateTimeFilter}) {
    return (
        <div className='container-inner'>
            <div className='btns'>
                <button className='btn text' onClick={() => updateFilter('All')}>
                    All
                </button>
                <button className='btn text' onClick={() => updateFilter('Done')}>
                    Done
                </button>
                <button className='btn text' onClick={() => updateFilter('Undone')}>
                    Undone
                </button>
            </div>
            <div className='sort-panel'>
                <p className='name-sort text'>
                    Sort by Date
                </p>
                <div className='updonw'>
                    <button className='updown-btn up-btn' 
                    onClick={() => updateTimeFilter('Up')}
                    style={{ backgroundImage: `url(${arrowUp})` }}/>

                    <button className='updown-btn down-btn'
                    onClick={() => updateTimeFilter('Down')} 
                    style={{ backgroundImage: `url(${arrowDown})` }}/>
                </div>
            </div>
        </div>
    );
}


export default FilterPanel