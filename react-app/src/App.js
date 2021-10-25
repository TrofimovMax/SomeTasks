import React, { useState } from 'react';
import './App.css';

import InputBlock from './InputBlock';
import FilterPanel from './FilterPanel';
import Pagination from './Pagination';
import TodoList from './TodoList';

function App() {
    const [listTodo, setListTodo] = useState([]);
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
            completed: true
        };
        setListTodo((prev) => [newTask, ...prev]);
    };

    const deleteTask = (taskIdToRemove) => {
        setListTodo((prev) => prev.filter((task) => task.id !== taskIdToRemove));
    };

    const changeCompleted = (id) => {
        console.log(id);
        setListTodo(prev => prev.map((item) => {
            if (item.id === id) {
                item.completed = !item.completed
            }
            return item
        }))
    }
    console.table(listTodo);


    return (
        <div className="container">
            <p className="logo">
                ToDo
            </p>
            <InputBlock
                addTaskInList={addTaskInList}
            />
            <FilterPanel />
            <div className="container-inner">
                <TodoList
                    listTodo={listTodo}
                    changeCompleted={changeCompleted}
                    deleteTask={deleteTask} />
            </div>
            <Pagination />
        </div>
    );
}

export default App;
