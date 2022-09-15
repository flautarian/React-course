import React, { Fragment, useContext } from 'react'
import { Link } from 'react-router-dom';
import { UserContext } from './context/UserContext';
import { Navbar } from './Navbar';

export const AboutPage = () => {
  const { user } = useContext(UserContext);
  return (
    <Fragment>
      <h2>About</h2>
      <pre aria-label='pre'>
        {JSON.stringify(user, null, 3)}
      </pre>
    </Fragment>
  )
}
