import React from 'react';
import TodoItem from './TodoItem';

export default function TodoList({ listTodo, changeCompleted, changeName, deleteTask}) {


    if (listTodo.length === 0) {
        return <h1 style={{ marginTop: '2vw' }}>Nothing...</h1>;
    } else {
        return (
            <ul className={'list-group-item'}>
                {
                    listTodo.map((todo) => {
                        return (
                            <TodoItem
                                key = {todo.uuid}
                                todo = {todo}
                                changeCompleted={changeCompleted}
                                changeName = {changeName}
                                deleteTask={deleteTask} />
                        )
                    })
                }
            </ul>
        );
    }
}
