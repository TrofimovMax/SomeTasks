import React from 'react';
import TodoItem from './TodoItem';

export default function TodoList({listTodo, changeCompleted, deleteTask}) {

    if (listTodo.length === 0) {
        return <h1 style={{ marginTop: "2vw" }}>Nothing...</h1>;
    } else {
        return (
            <ul className={'list-group-item'}>
                {listTodo.map(({ id, name, time, completed }) => {
                    return (
                        <TodoItem
                        id = {id}
                        name ={name}
                        time = {time}
                        completed = {completed}
                        changeCompleted = {changeCompleted}
                        deleteTask = {deleteTask}/>
                    )
                })}
            </ul>
        );
    }

}
