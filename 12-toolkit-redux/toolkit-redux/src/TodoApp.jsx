import React from 'react'
import { useState } from 'react';
import { Fragment } from 'react'
import { useGetTodoQuery, useGetTodosQuery } from './store/apis';

export const TodoApp = () => {


    const [todoId, setTodoId] = useState(1);

    const { data: todo, isLoading } = useGetTodoQuery( todoId );

    return (
        <Fragment>
            <h1> Todos - RTK Query</h1>

            <hr />

            {isLoading && <h4>Is Loading...</h4>}

            <pre>{ JSON.stringify( todo ) }</pre>

            <button disabled={isLoading} onClick={() => setTodoId(todoId > 1 ? todoId - 1 : 0)}>Prev todo</button>

            <button disabled={isLoading} onClick={() => setTodoId(todoId + 1)}>Next todo</button>
            {/* <ul>
                {
                    todos.map(todo => (
                        <li key={todo.id}>
                            <strong>{todo.completed ? 'Done' : 'Pending'}</strong> - {todo.title}
                        </li>
                    ))
                }
            </ul> */}


        </Fragment>
    )
}
