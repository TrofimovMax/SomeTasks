import React from 'react';
import TodoItem from './TodoItem';

export default function TodoList({ listTodo, filterState, timeFilterState, changeCompleted, deleteTask, filterList}) {


    if (listTodo.length === 0) {
        return <h1 style={{ marginTop: '2vw' }}>Nothing...</h1>;
    } else {
        return (
            <ul className={'list-group-item'}>
                {
                    filterList(listTodo,filterState, timeFilterState).map(({ id, name, time, completed }) => {
                        return (
                            <TodoItem
                                key={id}
                                id={id}
                                name={name}
                                time={time}
                                completed={completed}
                                changeCompleted={changeCompleted}
                                deleteTask={deleteTask} />
                        )
                    })
                }
            </ul>
        );
    }
}
