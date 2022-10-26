import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';

import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Typography, Button } from '@mui/material';

import './styleFormForbtn.css'

import {Link} from 'react-router-dom'

export default function InputAdornments() {


    const [values, setValues] = React.useState({
    password: 'DET ER KODEN!1!1',
    showPassword: false,
  });

  
 
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const StyleBtns = {
    m:1,
    width: '90%',
    color: 'white',
    backgroundColor: 'rgba(250,250,250,0.4)',
    border: 'none',
  

    
  }

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', color: 'white', }}>
        <Typography variant='h4' sx={{color: 'white'}} > Log ind </Typography>
     <form>
      <TextField sx={StyleBtns}
        helperText="Rasmus The Reactor"
        id="demo-helper-text-misaligned"
        label="Brugernavn"
        placeholder='RasmusTheReactor'
      />
        <FormControl sx={StyleBtns} variant="outlined">
          <InputLabel sx={{color: 'white', }} htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput sx={{
        '& > :not(style)': { color: 'white', border: 'var(--border)'
        }, '&:active': {color: 'white'}
      }}
           id="outlined-password-input"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton sx={{color: 'white'}}
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />



      
        </FormControl>
        
        <Box sx={{
          display: 'flex', justifyContent: 'space-between', marginTop: '50px'
          }}>
        <Link to='/404'> <Button className='UserBtns btn' sx={{border: 'var(--border)', mt: 1, mr: 1, width: '50%', color: 'var(--btnColor)'}} type="submit" variant="outlined">
         Glemt? 
        </Button> </Link>
        <Link to="/home">   <Button className='UserBtns btn' sx={{ mt: 1, mr: 1,width: '50%',color: 'white', backgroundColor: 'var(--btnColor)', border: 'var(--border)' }} type="submit" variant="outlined">
          Logind
        </Button></Link>

        </Box>

</form>
   
    </Box>
  );
}
