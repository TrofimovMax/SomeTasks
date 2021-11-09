import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './App.css';

import InputBlock from './InputBlock';
import FilterPanel from './FilterPanel';
import Pagination from './Pagination';
import TodoList from './TodoList';

function App() {
    const [listTodo, setListTodo] = useState([]);
    const [filterState, setFilterState] = useState('');
    const [timeFilterState, setTimeFilterState] = useState('asc');

    const baseURL = 'https://todo-api-learning.herokuapp.com/v1/task/6';

    useEffect(() => {
        const getTodos = async () => {
            const getURL = `https://todo-api-learning.herokuapp.com/v1/tasks/6?filterBy=${filterState}&order=${timeFilterState}`;
            try{
                const resp = await axios.get(getURL);
                const allTodo = resp.data;
                setListTodo(allTodo);
            } 
            catch(e){
                alert(e);
            }
        }
        getTodos()
    }, [filterState, timeFilterState]);

    const addTaskInList = async (nameTodo) => {
        if (!nameTodo) return;
        try{
            const newTask = {
                name: nameTodo,
                done: false
            };
            const response = await axios.post(baseURL, newTask)
            setListTodo((prev) => [response.data, ...prev]);
        } 
        catch(e){
            alert(e);
        }
    };

    const deleteTask = async (taskIdToRemove) => {
        try{
            const response = await axios.delete(`${baseURL}/${taskIdToRemove}`);
            setListTodo((prev) => prev.filter((task) => task.uuid !== taskIdToRemove));
        }
        catch(e){
            alert(e);
        }
    };

    const changeCompleted = async (id, name, done) => {
        try{
            const response = await axios.patch(`${baseURL}/${id}`, {
                name: name,
                done: !done
            })
            setListTodo(prev => prev.map(item => {
                if (item.uuid === response.data.uuid) {
                    return response.data
                }
                return item
            }))
        }
        catch(e){
            alert(e);
        }
    }

    const changeName = async (idEdit, editedName, editDone) => {
        try{
            const response = await axios.patch(`${baseURL}/${idEdit}`, {
                name: editedName,
                done: editDone
            })
            setListTodo(prev => prev.map(item => {
                if (item.uuid === idEdit) {
                    return { ...item, name: response.data.name }
                }
                return item
            }))
        }
        catch(e){
            alert(e);
        }
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

    const createCurrentTodo = (filteredList, lastTodoIndex, firstTodoIndex) => {
        return filteredList.slice(firstTodoIndex, lastTodoIndex);
    }

    const [currentPage, setCurrentPage] = useState(1);
    const TODO_PER_PAGE = 5;
    const lastTodoIndex = currentPage * TODO_PER_PAGE;
    const firstTodoIndex = lastTodoIndex - TODO_PER_PAGE;
    const currentTodo = createCurrentTodo(listTodo, lastTodoIndex, firstTodoIndex);

    return (
        <div className='container'>
            <p className='logo'>
                ToDo
            </p>
            <InputBlock
                addTaskInList={addTaskInList}
            />
            <FilterPanel
                updateFilter={updateFilter}
                updateTimeFilter={updateTimeFilter}
            />
            <div className='container-inner'>
                <TodoList
                    listTodo={currentTodo}
                    changeCompleted={changeCompleted}
                    changeName={changeName}
                    deleteTask={deleteTask}
                    />
            </div>
            <Pagination
                TODO_PER_PAGE={TODO_PER_PAGE}
                totalTodo={listTodo.length}
                paginate={paginate}
            />
        </div>
    );
}

export default App;
