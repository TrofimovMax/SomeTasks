import React from 'react';
import TodoItem from './TodoItem';

export default function TodoList({ listTodo, filterState, timeFilterState, changeCompleted, changeName, deleteTask}) {


    if (listTodo.length === 0) {
        return <h1 style={{ marginTop: '2vw' }}>Nothing...</h1>;
    } else {
        return (
            <ul className={'list-group-item'} key = 'list-group-item'>
                {
                    listTodo.map((todo) => {
                        return (
                            <TodoItem
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
