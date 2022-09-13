import React, { Fragment, useEffect, useState } from 'react'
import { useForm } from '../hooks/useForm';
import { Message } from './Message';

export const SimpleFormWithCustomHook = () => {

    
    const {form, onFormChange, formReset} = useForm( {
        username: '',
        email: '',
        password: ''
    } );

    const { username, email, password } = form;

    useEffect(() => {
        //console.log("form changed!");
    }, [form]);

    useEffect(() => {
        //console.log("email changed!");
    }, [email]);

    useEffect(() => {
        //console.log("email changed!");
    }, [password]);


    return (
        <Fragment>
            <h1>Form With custom hook</h1>
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

            <input type="password"
                className='form-control mt-2'
                placeholder='password'
                name='password'
                value={password}
                onChange={onFormChange} />
                <button className='btn btn-primary mt-2' onClick={formReset}>Reset</button>
        </Fragment>
    )
}
