import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './App.css';

import InputBlock from './InputBlock';
import FilterPanel from './FilterPanel';
import Pagination from './Pagination';
import TodoList from './TodoList';

function App() {
    const [listTodo, setListTodo] = useState([]);
    const [filterState, setFilterState] = useState('All');
    const [timeFilterState, setTimeFilterState] = useState('Up');

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
                return { ...item, completed: !item.completed }
            }
            return item
        }))
    }

    const changeName = (id, editedName) => {
        setListTodo(prev => prev.map(item => {
            if (item.id === id) {
                return { ...item, name: editedName }
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

    const filterList = (listTodo, filterState, timeFilterState) => {
        const str = filterState + timeFilterState;
        switch (str) {
            case 'DoneUp':
                return listTodo.filter((item) => item.completed === true);
            case 'UndoneUp':
                return listTodo.filter((item) => item.completed !== true);
            case 'DoneDown':
                return listTodo.slice().reverse().filter((item) => item.completed === true);
            case 'UndoneDown':
                return listTodo.slice().reverse().filter((item) => item.completed !== true);
            case 'AllDown':
                return listTodo.slice().reverse();
            default:
                return listTodo;
        }
    }

    const createCurrentTodo = (filteredList, lastTodoIndex, firstTodoIndex) => {
        if(timeFilterState === 'Up'){
            return filteredList.slice(firstTodoIndex, lastTodoIndex);
        }
        else{
            return filteredList.slice(firstTodoIndex, lastTodoIndex).reverse();
        }   
    }

    const [currentPage, setCurrentPage] = useState(1);
    const TODO_PER_PAGE = 5;
    const lastTodoIndex = currentPage * TODO_PER_PAGE;
    const firstTodoIndex = lastTodoIndex - TODO_PER_PAGE;
    const filteredList = filterList(listTodo, filterState, timeFilterState);
    const currentTodo = createCurrentTodo(filteredList, lastTodoIndex, firstTodoIndex);

    useEffect(() => {
        const apiUrl = 'https://todo-api-learning.herokuapp.com/v1/tasks/2';
        axios.get(apiUrl).then((resp) => {
          const allTodo = resp.data;
          setListTodo(allTodo);
        });
      }, [setListTodo]);

    return (
        <div className="container">
            <p className="logo">
                ToDo
            </p>
            <InputBlock
                addTaskInList={addTaskInList}
            />
            <FilterPanel
                updateFilter={updateFilter}
                updateTimeFilter={updateTimeFilter}
            />
            <div className="container-inner">
                <TodoList
                    listTodo={currentTodo}
                    filterState={filterState}
                    timeFilterState={timeFilterState}
                    changeCompleted={changeCompleted}
                    changeName={changeName}
                    deleteTask={deleteTask}
                    filterList={filterList} />
            </div>
            <Pagination
                TODO_PER_PAGE={TODO_PER_PAGE}
                totalTodo={filteredList.length}
                paginate={paginate}
            />
        </div>
    );
}

export default App;
