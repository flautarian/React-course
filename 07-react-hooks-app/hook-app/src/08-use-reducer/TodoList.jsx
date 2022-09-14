import React, { useEffect } from 'react'
import { TodoItem } from './TodoItem'

export const TodoList = ({ list, toDelete, toToggle }) => {

    useEffect(() => { }, [list]);

    return (
        <ul className='list-group'>
            {
                list.map(todo => (
                    <TodoItem key={todo.id} item={todo} toDelete={toDelete} toToggle={toToggle} />
                ))
            }
        </ul>
    )
}
