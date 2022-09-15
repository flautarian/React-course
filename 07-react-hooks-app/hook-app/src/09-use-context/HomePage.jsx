import React, { Fragment, useContext } from 'react'
import { Link } from 'react-router-dom';
import { UserContext } from './context/UserContext';
import { Navbar } from './Navbar';

export const HomePage = () => {
    const { user } = useContext(UserContext);
    return (
        <Fragment>
            <Navbar />
            <h2>Home <small>username: {user?.username}</small></h2>
        </Fragment>
    )
}
