import React, { Fragment, useEffect, useReducer } from 'react'
import { useTodos } from '../hooks/useTodos';
import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';
import { todoReducer } from './todoReducer'

export const TodoApp = () => {

    const { state, todosCount, todosRemaining, deleteTodo, toggleTodo, createTodo } = useTodos([]);

    return (
        <Fragment>
            <h2>TodoApp ({todosCount})
                <small>
                    Pendent: ({todosRemaining})
                </small>
            </h2>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TodoList list={state} toDelete={deleteTodo} toToggle={toggleTodo} />
                </div>

                <div className="col-5">
                    <h4>Add todo Action:</h4>
                    <hr />
                    <TodoAdd createTodo={createTodo} />
                </div>
            </div>

        </Fragment>
    )
}
