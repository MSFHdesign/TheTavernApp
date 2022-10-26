import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import BottomNav from '../components/BottomNav';
import TopNav from '../components/TopNav';
export default function fejl404() {

  return (
    <Box sx={{minHeight: '100vh'}}>
         <TopNav/>
        <Typography variant="h3" color="initial">Det er menneskeligt at fejle</Typography>
    


            <Button onClick={() => {
    alert('DU TRYKKEDE PÅ MIG!!! :O');
  }}>
    TRYK IKKE PÅ MIG
  </Button>
      
  <BottomNav /> </Box>
  )
}
