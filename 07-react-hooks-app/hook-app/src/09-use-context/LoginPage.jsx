import React, { Fragment } from 'react'
import { useContext } from 'react'
import { UserContext } from './context/UserContext'
import { Navbar } from './Navbar'
export const LoginPage = () => {

    const { user, setUser } = useContext(UserContext);
    return (
        <Fragment>
            <Navbar />
            <hr />
            <pre>
                {JSON.stringify(user, null, 3)}
            </pre>
            <button className='btn btn-primary mt-2'
                onClick={() => setUser({
                    id: 123,
                    email: "test@gmail.com",
                    username: "test username",
                })}>
                Set user
            </button>
        </Fragment >
    )
}
