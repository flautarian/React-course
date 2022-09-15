import React, { Fragment } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AboutPage } from './AboutPage';
import { UserProvider } from './context/UserProvider';
import { HomePage } from './HomePage';
import { LoginPage } from './LoginPage';

export const MainApp = () => {
  return (
    <UserProvider>
      <h1>MainApp</h1>
      <hr />
      <Routes>
        <Route path='/home' element={ <HomePage/> }/>
        <Route path='/about' element={ <AboutPage/> }/>
        <Route path='/login' element={ <LoginPage/> }/>

        <Route path='/*' element={ <Navigate to="/login" /> }/>
      </Routes>
    </UserProvider>
  )
}
