import { Box, Typography } from '@mui/material'
import React from 'react'
import BottomNav from '../components/BottomNav';
import TopNav from '../components/TopNav';
import Dices from '../components/Dices.jsx';

//Michael & Magnus

const ContainerStyle = {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',


}
export default function Dice() {
    return (
        <Box sx= {ContainerStyle}>
             <TopNav/>
                <Typography variant='h2' sx={{fontSize: 50, color: 'var(--H2Color)',pt:'60px' }}>Terningekast</Typography>
                <Dices />
                <BottomNav /> </Box>
    )
}