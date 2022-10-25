import { Box, Button, Typography } from '@mui/material'
import React from 'react'

export default function fejl404() {

  return (
    <Box sx={{minHeight: '100vh'}}>
        <Typography variant="h3" color="initial">Det er menneskeligt at fejle</Typography>
    


            <Button onClick={() => {
    alert('DU TRYKKEDE PÅ MIG!!! :O');
  }}>
    TRYK IKKE PÅ MIG
  </Button>
      
    </Box>
  )
}
