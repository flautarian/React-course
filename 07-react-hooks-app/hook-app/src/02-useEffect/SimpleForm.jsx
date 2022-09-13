import React, { Fragment, useEffect, useState } from 'react'
import { Message } from './Message';

export const SimpleForm = () => {

    const [form, setForm] = useState({
        username: "",
        email: ""
    });

    const { username, email } = form;

    const onFormChange = ({ target }) => {
        const { name, value } = target;
        setForm({
            ...form,
            [name]: value
        })
    }

    useEffect(() => {
        //console.log("form changed!");
    }, [form]);

    useEffect(() => {
        //console.log("email changed!");
    }, [email]);


    return (
        <Fragment>
            <h1>SimpleForm</h1>
            <hr />
            <input type="text"
                className='form-control'
                placeholder='username'
                name='username'
                value={username}
                onChange={onFormChange} />

            <input type="email"
                className='form-control mt-2'
                placeholder='email'
                name='email'
                value={email}
                onChange={onFormChange} />

            {
                (username === 'Facundo') && <Message />
            }
        </Fragment>
    )
}
