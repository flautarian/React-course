import React, { Fragment, useEffect, useState } from 'react'

export const TodoAdd = ({ createTodo }) => {

    const [form, setForm] = useState({
        desc: "",
        done: false
    });

    const { desc, done } = form;

    const onFormChange = ({ target }) => {
        const { name, value, checked, type } = target;
        setForm({
            ...form,
            [name]: type === "checkbox" ? checked : value
        })
    }

    useEffect(() => { }, [form]);

    const onNewTodo = (event) => {
        event.preventDefault();
        const todo = {
            id: new Date().getTime(),
            desc,
            done,
        }
        createTodo(todo);
    }

    return (
        <Fragment>
            <form onSubmit={(event) => onNewTodo(event)}>
                <input
                    type="text"
                    placeholder='What to do?'
                    className='form-control'
                    value={desc}
                    name='desc'
                    onChange={onFormChange} ></input>
                Done: 
                <input className='mt-2' type="checkbox" name='done' value={done} onChange={onFormChange} ></input>
                <br/>
                <button type='submit' className='btn btn-outline-primary mt-2'>Add Todo</button>
            </form>
        </Fragment>
    )
}
