import React from 'react'
import { Fragment } from 'react'
import { AuthProvider } from './auth'
import { AppRouter } from './router/AppRouter'

export const HeroesApp = () => {
  return (
    <AuthProvider>
        <AppRouter/>
    </AuthProvider>
  )
}
