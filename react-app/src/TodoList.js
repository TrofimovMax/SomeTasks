import React from 'react';
import TodoItem from './TodoItem';


function TodoList({posts}) {
    const elements = posts.map( (item) => {
        // Простой способ проверки на объект + содержится ли в нем информация
        if ( typeof item === 'object'){ 
            const {id, ...itemProps} = item;
            return (
                <li key = {id} className='list-group-item'>
                    <TodoItem {...itemProps}/>
                </li>
            )
        }
    }) 
    return (
        <ul>
            {elements}
        </ul>
    );
}

export default TodoList