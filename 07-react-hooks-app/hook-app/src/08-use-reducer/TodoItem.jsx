import React from 'react'

export const TodoItem = ({item, toDelete, toToggle}) => {

    const onRemoveTodo = (target) => {
        toDelete(item.id);
    }

    const onToogleDone = (target) => {
        toToggle(item.id);
    }

    return (
        <li className='list-group-item d-flex justify-content-between'>
            <span className='align-self-center'>{item.desc}</span>
            <div>
                <button className='btn btn-danger' onClick={ onRemoveTodo }>Delete</button>
                { item.done && <button className='btn btn-success' onClick={ onToogleDone }>Done</button>}
                { !item.done && <button className='btn btn-warning' onClick={ onToogleDone }>To do</button>}
            </div>
        </li>
    )
}
