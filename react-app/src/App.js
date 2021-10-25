import React, { useState } from 'react';
import './App.css';

import InputBlock from './InputBlock';
import FilterPanel from './FilterPanel';
import Pagination from './Pagination';
import TodoList from './TodoList';

function App() {
    const [listTodo, setListTodo] = useState([]);
    const [taskTodo, setTaskTodo] = useState({});


    const addTask = ({ target }) => {
        const { name, value } = target;
        const timeUNIX = Date.now();
        const date = new Date(timeUNIX);
        setTaskTodo((prev) => ({ ...prev, id: Date.now(), [name]: value , 
            time:{day: date.getDate(), month:date.getMonth() , year:date.getFullYear() }, 
            done: false }));
    };

    const addTaskInList = (event)  => {
        event.preventDefault();
        if (!taskTodo.title) return;
        setListTodo((prev) => [taskTodo, ...prev]);
        setTaskTodo({});
    };

    const deleteTask = (taskIdToRemove) => {
        setListTodo((prev) => prev.filter((task) => task.id !== taskIdToRemove));
    };


    return (
        <div className="container">
            <p className="logo">
                ToDo
            </p>
            <InputBlock 
            addTask = {addTask}
            taskTodo={taskTodo}
            addTaskInList = {addTaskInList}
            />
            <FilterPanel />
            <div className="container-inner">
                <TodoList 
                taskTodo = {taskTodo}
                listTodo = {listTodo}
                deleteTask = {deleteTask}/>
            </div>
            <Pagination />
        </div>
    );
}

export default App;
