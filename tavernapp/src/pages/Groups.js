import { Box, Typography } from '@mui/material'
import React from 'react'

import DisplayGroups from '../components/DisplayGroups'



const ContainerStyle = {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',


}


export default function Groups() {
    return (


        <Box sx={ContainerStyle}> 
            <Typography variant ='h2' sx={{fontSize: 50, color: '#f2f2f2'}}>
                Groups
            </Typography>
            
            <Box sx={{ m: 1, display: 'flex', }}>
                <DisplayGroups/>
            </Box>
            
           



        </Box>


    )
}