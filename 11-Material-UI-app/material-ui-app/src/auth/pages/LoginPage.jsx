import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Grid, Typography, Link, Button, Alert } from '@mui/material';
import TextField from '@mui/material/TextField'
import { Google } from '@mui/icons-material'
import { useForm } from '../../hooks/useForm';
import { AuthLayout } from '../layout/AuthLayout';
import { startGoogleSignIn, startLoginWithEmailPassword } from '../../store/auth/thunks';
import { useDispatch, useSelector } from "react-redux";
import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

export const LoginPage = () => {


  const formValidations = {
    email: [(value) => value.includes('@'), 'Email must have @'],
    password: [(value) => value.length >= 6, 'password must have more than 6 characters'],
  }
  
  const { email, password, emailValid, passwordValid, onFormChange, onResetForm } = useForm({
    email: 'Facundo@gmail.com',
    password: 'F1234'
  }, formValidations);

  const { status, errorMessage } = useSelector(state => state.auth);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const isAuthenticating = useMemo( () => status === 'checking', [status]);

  const onSubmit = async (event) => {
    event.preventDefault();
    dispatch(startLoginWithEmailPassword({ email, password }));
  }

  const onGoogleSubmit = () => {
    dispatch(startGoogleSignIn());
  }

  return (

    <AuthLayout title='Login'>
      <form onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              id="email-login-input"
              label="Email"
              type="email"
              name='email'
              value={email}
              onChange={onFormChange}
              fullWidth
              error={!!emailValid}
              helperText={emailValid}
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              id="password-login-input"
              label="Password"
              type="password"
              name='password'
              value={password}
              onChange={onFormChange}
              fullWidth
              error={!!passwordValid}
              helperText={passwordValid}
            />
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>

            <Grid container spacing={2} item xs={12} display={!!errorMessage ? '' : 'none'}>
              <Alert severity='error'>
                {errorMessage}
              </Alert>
            </Grid>


            <Grid item xs={12} sm={6}>
              <Button variant="contained" type="submit" fullWidth sx={{ mt: 1, mb: 1 }} disabled={isAuthenticating}>
                Login
              </Button>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Button variant="contained" onClick={onGoogleSubmit} fullWidth sx={{ mt: 1, mb: 1 }} disabled={isAuthenticating}>
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>
          </Grid>

          <Grid container direction='row' justifyContent={'end'}>
            <Link component={RouterLink} color='inherit' to='/auth/register'>
              <Typography>Create Account</Typography>
            </Link>
          </Grid>
        </Grid>

      </form>
    </AuthLayout>

  )
}
