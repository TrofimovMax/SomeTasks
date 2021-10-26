import React from 'react';
import TodoItem from './TodoItem';

export default function TodoList({ listTodo, filterState, changeCompleted, deleteTask }) {

    const listDone = (listTodo) => {
        return listTodo.filter((item) => item.completed === true);
    }

    const listUndone = (listTodo) => {
        return listTodo.filter((item) => item.completed !== true);
    }

    if (listTodo.length === 0) {
        return <h1 style={{ marginTop: "2vw" }}>Nothing...</h1>;
    } else {
        if (filterState === 'All') {
            return (
                <ul className={'list-group-item'}>
                    {
                        listTodo.map(({ id, name, time, completed }) => {
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
        else {
            if (filterState === 'Done') {
                return (
                    <ul className={'list-group-item'}>
                        {
                            listDone(listTodo).map(({ id, name, time, completed }) => {
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
                            }
                            )
                        }
                    </ul>
                );
            }
            else {
                if (filterState === 'Undone') {
                    return (
                        <ul className={'list-group-item'}>
                            {
                                listUndone(listTodo).map(({ id, name, time, completed }) => {
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
                                }
                                )
                            }
                        </ul>
                    );
                }
            }
        }
    }
}


// listTodo.map(({ id, name, time, completed }) => {
//     if (completed) {
//         return (
//             <TodoItem
//                 key={id}
//                 id={id}
//                 name={name}
//                 time={time}
//                 completed={completed}
//                 changeCompleted={changeCompleted}
//                 deleteTask={deleteTask} />
//         )
//     }
// })