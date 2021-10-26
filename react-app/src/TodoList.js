import React from 'react';
import TodoItem from './TodoItem';

export default function TodoList({ listTodo, filterState, timeFilterState, changeCompleted, deleteTask }) {

    const filterList = (filterState, timeFilterState) => {
        const str = filterState + timeFilterState;
        switch (str) {
            case 'DoneUp':
                return listTodo.filter((item) => item.completed === true);
            case 'UndoneUp':
                return listTodo.filter((item) => item.completed !== true);
            case 'DoneDown':
                return listTodo.filter((item) => item.completed === true).reverse();
            case 'UndoneDown':
                return listTodo.filter((item) => item.completed !== true).reverse();
            case 'AllDown':
                return listTodo.slice().reverse();
            default:
              return listTodo;
          }
    }

    if (listTodo.length === 0) {
        return <h1 style={{ marginTop: '2vw' }}>Nothing...</h1>;
    } else {
        return (
            <ul className={'list-group-item'}>
                {
                    filterList(filterState, timeFilterState).map(({ id, name, time, completed }) => {
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
