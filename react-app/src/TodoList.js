import React from 'react';
import TodoItem from './TodoItem';

export default function TodoList({ listTodo, changeCompleted, changeName, deleteTask}) {


    if (listTodo.length === 0) {
        return <h6 className='logo' style={{ marginTop: '2vw'}}>Nothing...</h6>;
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
