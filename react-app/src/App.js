// import okAfter from './images/okAfter.svg';
// import okClick from './images/okClick.svg';

import './App.css';
import React from 'react';

import InputBlock from './InputBlock';
import FilterPanel from './FilterPanel';
import TodoList from './TodoList';
import Pagination from './Pagination';

function App() {

    return (
        <div className="container">
            <p className="logo">
                ToDo
            </p>
            <InputBlock />
            <FilterPanel />
            <div className="container-inner">
                    <TodoList />
            </div>
            <Pagination />
        </div>
    );
}

export default App;
