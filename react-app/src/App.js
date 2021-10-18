// import okAfter from './images/okAfter.svg';
// import okClick from './images/okClick.svg';

import './App.css';
import React from 'react';

import InputBlock from './InputBlock';
import FilterPanel from './FilterPanel';
import TaskBorder from './TaskBorder';
import NavPanel from './NavPanel';

function App() {

    return (
        <div className="container">
            <p className="logo">
                ToDo
            </p>
            <InputBlock />
            <div className="control-panel">
                <FilterPanel />
                <div className="task-borders">
                    <TaskBorder />
                </div>
            </div>
            <NavPanel />
        </div>
    );
}

export default App;
