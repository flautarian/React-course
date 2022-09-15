import React, { useEffect, useReducer } from 'react';
import { todoReducer } from '../08-use-reducer/todoReducer';


const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodos = ({ initialState }) => {

    const [state, dispatch] = useReducer(todoReducer, initialState, init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(state));
    }, [state])

    const deleteTodo = (id) => {
        let todoAction = {
            type: "remove",
            id,
        }
        dispatch(todoAction);
    }

    const toggleTodo = (id) => {
        let todoAction = {
            type: "toggleDone",
            id,
        }
        dispatch(todoAction);
    }

    const createTodo = (todo) => {
        let todoAction = {
            type: "add",
            payload: todo,
        }
        dispatch(todoAction);
    }

    return {
        state, 
        todosCount : state.length, 
        todosRemaining: state.filter(todo => !todo.done).length,
        deleteTodo,
        toggleTodo,
        createTodo
    }
}
