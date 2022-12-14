import { Box, Typography } from '@mui/material'
import React from 'react'
import TopNav from '../components/TopNav';
import DisplayMessages from '../components/DisplayMessage'
import BottomNav from '../components/BottomNav';
import BoxAddMessage from '../components/BoxAddMessage.jsx';
// Michael & Magnus
const ContainerStyle = {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 'var(--Gap)'

}


export default function Messages() {
    return (


        <Box sx={ContainerStyle}>  <TopNav/>
            <Typography variant ='h2' sx={{fontSize: 50, color: 'var(--H2Color)',pt:'60px',}}>
                Beskeder
            </Typography>
            
            <Box sx={{ m: 1, display: 'flex', borderRadius:'26px',pb:'calc(var(--addbtnSize) + 10%)' }}>
                <DisplayMessages/>
            </Box>
            <BoxAddMessage/>
           



            <BottomNav /> </Box>


    )
}