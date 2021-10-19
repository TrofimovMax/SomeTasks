import React, { useState } from 'react';
import './App.css';

import InputBlock from './InputBlock';
import FilterPanel from './FilterPanel';
import TodoItem from './TodoItem';
import Pagination from './Pagination';
import TodoList from './TodoList';

function App() {
    const [todoArr, setTodoArr] = useState('');

    const data = [
        {nameTodo: 'Going to learn React', timeTodo: '10.04.2020',  done: true, id: 1},
        {nameTodo: 'Do something', timeTodo: '10.04.2020', done: false, id: 2},
        {nameTodo: 'I tryed to learn it', timeTodo: '10.04.2020', done: false, id: 3}
    ]

    return (
        <div className="container">
            <p className="logo">
                ToDo
            </p>
            <InputBlock />
            <FilterPanel />
            <div className="container-inner">
                    <TodoList posts={data}/>
            </div>
            <Pagination />
        </div>
    );
}

export default App;
