// import okAfter from './images/okAfter.svg';
// import okClick from './images/okClick.svg';

import './App.css';
import React from 'react';

import SearchBlock from './SearchBlock';
import FilterPanel from './FilterPanel';
import TaskBorder from './TaskBorder';
import NavPanel from './NavPanel';

// const SearchBlock = React.lazy(() => import('./SearchBlock'));
// const FilterPanel = React.lazy(() => import('./FilterPanel'));
// const TaskBorder = React.lazy(() => import('./TaskBorder'));
// const NavPanel = React.lazy(() => import('./NavPanel'));

function App() {

    return (
        <div className="container">
            <p className="logo">
                ToDo
            </p>
            <SearchBlock />
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
