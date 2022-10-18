import { Box, Typography } from '@mui/material'
import React from 'react'


const StyledProfilPictur = {
    border: '2px solid red',
    borderRadius: '100px',
    width: '82px',
    height: '82px',

}

const UserName = {
    NameFromDefault: 'Guest',

}

export default function ProfilPic() {
  return (

    <Box sx={{display:'flex', justifyContent: 'left', alignItems: 'center'}}> 
    <Box sx={StyledProfilPictur}>
            

    </Box>
        <Typography variant="h2" color="initial" sx={{fontSize: '1.5rem', textAlign: 'center', pl: 3,}}>Velkommen <br/> {UserName.NameFromDefault} </Typography>
       
    </Box>
  )
}
