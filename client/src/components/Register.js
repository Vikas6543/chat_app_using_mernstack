import React, { useState } from 'react';
import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import LoadingSpinner from './LoadingSpinner';
import Axios from 'axios';
import { toast } from 'react-toastify';

const Register = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  toast.configure();

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!userName || !email || !password) {
      toast.error('Please fill all the fields', {
        position: 'top-right',
        autoClose: 3000,
      });
      setLoading(false);
      return;
    }
    try {
      setLoading(true);
      const { data } = await Axios.post(
        'http://localhost:5000/users/register',
        {
          userName,
          email,
          password,
        }
      );
      localStorage.setItem('user', JSON.stringify(data));
      setLoading(false);
      navigate('/chats');
    } catch (error) {
      toast.error(error.response.data.message, {
        position: 'top-right',
        autoClose: 3000,
      });
      setLoading(false);
    }
  };

  return (
    <Container maxWidth='xs'>
      <Box component='form' marginTop={{ xs: '5rem', sm: '3rem' }}>
        <Paper elevation={3} sx={{ p: { sm: '3rem', xs: '2rem' } }}>
          <Typography variant='h4' align='center'>
            Register
          </Typography>
          <TextField
            margin='normal'
            fullWidth
            id='name'
            label='Username'
            name='name'
            size='small'
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <TextField
            margin='normal'
            fullWidth
            id='email'
            label='Email Address'
            name='email'
            autoComplete='email'
            size='small'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FormControl
            size='small'
            margin='normal'
            variant='outlined'
            fullWidth
          >
            <InputLabel htmlFor='outlined-adornment-password'>
              Password
            </InputLabel>
            <OutlinedInput
              id='outlined-adornment-password'
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              endAdornment={
                <InputAdornment sx={{ cursor: 'pointer' }} position='end'>
                  {showPassword ? (
                    <i
                      onClick={handleShowPassword}
                      className='fa-solid fa-eye'
                    ></i>
                  ) : (
                    <i
                      onClick={handleShowPassword}
                      className='fa-solid fa-eye-slash'
                    ></i>
                  )}
                </InputAdornment>
              }
              label='Password'
            />
          </FormControl>
          <Button
            type='submit'
            fullWidth
            variant='contained'
            sx={{ mt: 3, mb: 2 }}
            onClick={submitHandler}
          >
            {loading ? <LoadingSpinner /> : 'Register'}
          </Button>
          <Grid container>
            <Grid item xs>
              <Link to='#'>Forgot password?</Link>
            </Grid>
            <Grid item>
              <Link to='/'>
                Already have an account? <strong>Login</strong>
              </Link>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </Container>
  );
};

export default Register;
