import React, { useState, useEffect } from 'react';
import './App.css';

import InputBlock from './InputBlock';
import FilterPanel from './FilterPanel';
import Pagination from './Pagination';
import TodoList from './TodoList';

function App() {
    const [listTodo, setListTodo] = useState([]);
    const [filterState, setFilterState] = useState('All');
    const [timeFilterState, setTimeFilterState] = useState('Up');
    const [currentPage, setCurrentPage] = useState(1);
    const [todoPerPage] = useState(5);
    const lastTodoIndex = currentPage * todoPerPage;
    const firstTodoIndex = lastTodoIndex - todoPerPage;
    const currentTodo = listTodo.slice(firstTodoIndex, lastTodoIndex);

    const addTaskInList = (nameTodo) => {
        if (!nameTodo) return;
        const timeUNIX = Date.now();
        const date = new Date(timeUNIX);
        const newTask = {
            id: Date.now(),
            name: nameTodo,
            time: {
                day: date.getDate(),
                month: date.getMonth(),
                year: date.getFullYear()
            },
            completed: false
        };
        setListTodo((prev) => [newTask, ...prev]);
    };

    const deleteTask = (taskIdToRemove) => {
        setListTodo((prev) => prev.filter((task) => task.id !== taskIdToRemove));
    };

    const changeCompleted = (id) => {
        setListTodo(prev => prev.map(item => {
            if (item.id === id) {                               
                // console.log({...item})
                // item.completed = !item.completed
                // console.log({...item})
                // return item;
                return {...item, completed: !item.completed}
            }
            return item
        }))
    }

    const updateFilter = (name) => {
        setFilterState(name);
    }

    const updateTimeFilter = (time) => {
        setTimeFilterState(time);
    }

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    return (
        <div className="container">
            <p className="logo">
                ToDo
            </p>
            <InputBlock
                addTaskInList={addTaskInList}
            />
            <FilterPanel 
                updateFilter = {updateFilter}
                updateTimeFilter = {updateTimeFilter}
            />
            <div className="container-inner">
                <TodoList
                    listTodo={listTodo}
                    filterState = {filterState}
                    timeFilterState = {timeFilterState}
                    changeCompleted={changeCompleted}
                    deleteTask={deleteTask} />
            </div>
            <Pagination 
                todoPerPage = {todoPerPage}
                totalTodo = {listTodo.length}
                paginate = {paginate}
            />
        </div>
    );
}

export default App;
