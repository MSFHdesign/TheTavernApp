import { Box, Typography } from '@mui/material'
import React from 'react'

const ContainerStyle = {
    display: 'flex',
    minHeight: '100vh'


}


export default function Messages() {
    return (


        <Box sx={ContainerStyle}> 
            <Typography variant ='h2' sx={{fontSize: 50}}>
                Beskeder
            </Typography>





        </Box>


    )
}