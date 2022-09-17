import React, { Fragment } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { LoginPage } from '../auth';
import { HeroesRoutes } from '../heroes';
import { Navbar } from '../ui';


export const AppRouter = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="/*" element={<HeroesRoutes />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<Navigate to="/marvel" />} />
      </Routes>
    </Fragment>
  )
}
