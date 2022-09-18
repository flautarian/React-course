import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Grid, Typography, Link, Button } from '@mui/material';
import TextField from '@mui/material/TextField'
import { Google } from '@mui/icons-material'
import { useForm } from '../../hooks/useForm';
import { AuthLayout } from '../layout/AuthLayout';

export const RegisterPage = () => {

  const { form, onFormChange, formReset } = useForm({
    name: '',
    email: '',
    password: ''
  });

  const { name, email, password } = form;

  const onSubmit = () => {

  }

  return (

    <AuthLayout title='Register'>
      <form action={onSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              id=""
              label="Name"
              type="text"
              name='name'
              value={name}
              onChange={onFormChange}
              fullWidth
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              id=""
              label="Email"
              type="email"
              name='email'
              value={email}
              onChange={onFormChange}
              fullWidth
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              id=""
              label="Password"
              type="password"
              name='password'
              value={password}
              onChange={onFormChange}
              fullWidth
            />
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2 }}>
            <Grid item xs={12}>
              <Button variant="contained" fullWidth sx={{ mt: 1, mb: 1 }}>
                Create account
              </Button>
            </Grid>
          </Grid>

          <Grid container direction='row' justifyContent={'end'}>
            <Typography>Already signed?</Typography>
            <Link component={RouterLink} color='inherit' to='/auth/login' sx={{ ml: 1}}>
              <Typography>Sign in!</Typography>
            </Link>
          </Grid>
        </Grid>

      </form>
    </AuthLayout>

  )
}
