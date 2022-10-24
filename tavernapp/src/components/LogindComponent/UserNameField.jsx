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

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
        <Typography variant='h4' > Log ind </Typography>
      <div>
      <TextField sx={{m:1, width: '90%', color: 'white'}}
        helperText="Rasmus The Reactor"
        id="demo-helper-text-misaligned"
        label="Brugernavn"
      />
        <FormControl sx={{ m: 1, width: '90%',color: 'white' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
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



        <Box sx={{display: 'inline-flex', justifyContent: 'space-between',}}>
        <Button className='UserBtns btn' sx={{ mt: 1, mr: 1, width: '50%', color: 'white'}} type="submit" variant="outlined">
         Hjælp
        </Button>
        <Link to="/home">   <Button className='UserBtns btn' sx={{ mt: 1, mr: 1,width: '50%',color: 'white' }} type="submit" variant="outlined">
          Logind
        </Button></Link>

        </Box>
        </FormControl>
        
        


      </div>
    </Box>
  );
}
