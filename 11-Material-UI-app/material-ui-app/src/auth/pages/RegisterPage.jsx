import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Grid, Typography, Link, Button, Alert } from '@mui/material';
import TextField from '@mui/material/TextField'
import { useForm } from '../../hooks/useForm';
import { AuthLayout } from '../layout/AuthLayout';
import { useDispatch, useSelector } from 'react-redux';
import { startCreatingUserWithEmailPassword } from '../../store/auth/thunks';
import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

export const RegisterPage = () => {

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const formValidations = {
    email: [(value) => value.includes('@'), 'Email must have @'],
    displayName: [(value) => value.length >= 1, 'name is mandatory'],
    password: [(value) => value.length >= 6, 'password must have more than 6 characters'],
  }

  const { displayName, email, password, isFormValid, displayNameValid, passwordValid, emailValid, onFormChange, onResetForm } = useForm({
    email: '',
    password: '',
    displayName: '',
  }, formValidations);

  const { status, errorMessage } = useSelector(state => state.auth);
  const isCheckingAuth = useMemo(() => status === 'checking', [status]);

  const onSubmit = (event) => {
    event.preventDefault();
    if (!isFormValid) return;
    dispatch(startCreatingUserWithEmailPassword({ email, password, displayName }));
  }

  return (

    <AuthLayout title='Register'>
      <form onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              id=""
              label="Name"
              type="text"
              name='displayName'
              value={displayName}
              onChange={onFormChange}
              fullWidth
              error={!!displayNameValid}
              helperText={displayNameValid}
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
              error={!!emailValid}
              helperText={emailValid}
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

            <Grid container spacing={2} sx={{ mb: 2 }}>
              <Grid item xs={12}>
                <Button type='submit' variant="contained" fullWidth sx={{ mt: 1, mb: 1 }} disabled={isCheckingAuth}>
                  Create account
                </Button>
              </Grid>
            </Grid>

            <Grid container direction='row' justifyContent={'end'}>
              <Typography>Already signed?</Typography>
              <Link component={RouterLink} color='inherit' to='/auth/login' sx={{ ml: 1 }}>
                <Typography>Sign in!</Typography>
              </Link>
            </Grid>
          </Grid>
        </Grid>


      </form>
    </AuthLayout>

  )
}
