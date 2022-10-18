import { Box, Typography } from '@mui/material'
import React from 'react'


const StyledProfilPictur = {
    border: '2px solid red',
    borderRadius: '50%',
    width: '82px',
    height: '82px',

}

const UserName = {
    NameFallBack: 'Guest',
    U1: 'Rasmus The Reactor'

}

export default function ProfilPic() {
  return (

    <Box sx={{display:'flex', justifyContent: 'left', alignItems: 'center', pt: 2, pb: 2,}}> 
    <Box sx={StyledProfilPictur}>
            

    </Box>
        <Typography variant="h2" color="initial" sx={{fontSize: '1.5rem', textAlign: 'center', p: 3,}}>Velkommen <br/> {UserName.NameFallBack} </Typography>
       
    </Box>
  )
}
