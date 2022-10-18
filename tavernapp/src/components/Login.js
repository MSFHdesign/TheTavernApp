import { Box } from '@mui/system'
import React from 'react'
import Typography from '@mui/material/Typography'

import LoginUser from './LoginUser.jsx';
import CreateUser from './CreateUser.jsx'; 


export default function Login() {
  return (
    <Box sx={{ height: '100vh', }}>
        <Typography variant="h1" color="initial" sx={{fontSize: '3rem', textAlign: 'center', pt: 2, pb: 2,}}>The Tavnern</Typography>
        

            <LoginUser />
            <CreateUser />





    </Box>






  )
}
