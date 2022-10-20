import { Box, Typography } from '@mui/material'
import React from 'react'
import AddMessage from '../components/AddMessage'
import DisplayMessages from '../components/DisplayMessage'

const ContainerStyle = {
    minHeight: '100vh'


}


export default function Messages() {
    return (


        <Box sx={ContainerStyle}> 
            <Typography variant ='h2' sx={{fontSize: 50}}>
                Beskeder
            </Typography>
            <DisplayMessages/>
            <AddMessage/>



        </Box>


    )
}