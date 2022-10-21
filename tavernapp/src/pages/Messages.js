import { Box, Typography } from '@mui/material'
import React from 'react'

import DisplayMessages from '../components/DisplayMessage'

import BoxAddMessage from '../components/BoxAddMessage.jsx';

const ContainerStyle = {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',


}


export default function Messages() {
    return (


        <Box sx={ContainerStyle}> 
            <Typography variant ='h2' sx={{fontSize: 50, color: '#f2f2f2'}}>
                Beskeder
            </Typography>
            
            <Box sx={{ m: 1, display: 'flex', }}>
                <DisplayMessages/>
            </Box>
            <BoxAddMessage/>
           



        </Box>


    )
}