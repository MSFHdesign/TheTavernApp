import { Box } from '@mui/material'
import React from 'react'


const StyledProfilPictur = {
    border: '2px solid red',
    borderRadius: '50%',
    width: '50px',
    height: '50px',


}




export default function ProfilPic() {
  return (

    <Box sx={{display:'flex', justifyContent: 'left', alignItems: 'center', pt: 2, pb: 2,}}> 
    <Box sx={StyledProfilPictur}>
            

    </Box>

       
    </Box>
  )
}
