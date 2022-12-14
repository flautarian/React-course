import React, { Fragment } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { LoginPage } from '../auth';
import { HeroesRoutes } from '../heroes';
import { Navbar } from '../ui';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';


export const AppRouter = () => {
  return (
    <Fragment>
      <Routes>
      <Route path="login/*" element={
          <PublicRoute>
            <Routes>
              <Route path="/*" element={<LoginPage/>} />
            </Routes>
          </PublicRoute>
        } />
      <Route path="/login" element={
          <PublicRoute>
            <LoginPage />
          </PublicRoute>
        } />
        <Route path="/*" element={
          <PrivateRoute>
            <HeroesRoutes />
          </PrivateRoute>
        } />
      </Routes>
    </Fragment>
  )
}
