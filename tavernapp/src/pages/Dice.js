import { Box, Typography } from '@mui/material'
import React from 'react'

import Dices from '../components/Dices.jsx';

const ContainerStyle = {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',


}
export default function Dice() {
    return (
        <Box sx= {ContainerStyle}>
                <Typography variant='h2' sx={{fontSize: 50, color: '#f2f2f2' }}>Dice generator</Typography>
                <Dices />
        </Box>
    )
}