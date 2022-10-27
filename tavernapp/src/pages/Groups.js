import { Box, Typography } from '@mui/material'
import React from 'react'
import AddGroups from '../components/AddGroups'
import DisplayGroups from '../components/DisplayGroups'
import TopNav from '../components/TopNav';

import BottomNav from '../components/BottomNav';
const ContainerStyle = {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',


}


export default function Groups() {
    return (


        <Box sx={ContainerStyle}>  <TopNav/>
            <Typography variant ='h2' sx={{fontSize: 50, color: 'var(--H2Color)',pt:'60px'}}>
                Groups
            </Typography>
            
            <Box sx={{ m: 1, display: 'flex', }}>
                <DisplayGroups/>
            </Box>
            <Box sx={{ m: 1, display: 'flex', }}>
                <AddGroups/>
                <BottomNav /> </Box>
           



        </Box>


    )
}