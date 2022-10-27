import { Box } from '@mui/system'
import React from 'react'
import Typography from '@mui/material/Typography'

import LoginUser from '../components/LoginUser.jsx';
import CreateUser from '../components/CreateUser.jsx'; 




export default function Login() {
  return (
    <Box sx={{ height: '100vh',  }}>
       
        <Typography variant="h1" color="initial" sx={{fontSize: 'var(--H1Size)', textAlign: 'center', pb: 2, color: 'var(--H1)',pt:'60px'}}>
          The Tavern
        </Typography>

          <Box sx={{ marginTop: '100px',
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--gap)',
            }}>
            <LoginUser />
            <CreateUser />
          </Box>
           </Box>






  )
}
