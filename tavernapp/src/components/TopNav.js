import React from 'react'

import {Typography, Box} from '@mui/material'

import BtnTopapp from './ModalTop.jsx';

export default function TopNav() {
  return (
    <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'sticky', }}>
        
    <Typography sx={{fontSize: '2rem', color: 'red'}} variant="h1" color="initial">
        The Tavern
    </Typography>
    <BtnTopapp/>




</Box>
  )
}
