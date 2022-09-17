import React, { Fragment } from 'react'
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export const LoginPage = () => {

  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  const lastPath = localStorage.getItem('lastPath') || '/';

  const onLogin = () => {
    login('Facundo Giacconi');
    navigate(lastPath, { replace: true });
  }

  return (
    <Fragment>

      <div className='container mt-5'>
        <h1>LoginPage</h1>
        <hr />

        <button className='btn btn-primary' onClick={onLogin}>
          Login
        </button>

      </div>
    </Fragment>
  )
}
