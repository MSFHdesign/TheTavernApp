import { Box } from '@mui/material'
import React from 'react'

const background = 'https://media-exp1.licdn.com/dms/image/C4E22AQFPFDr5ynpGgA/feedshare-shrink_800/0/1659349792433?e=2147483647&v=beta&t=633YTJyVrweXf7sVTEH4Y68t4SNjsBtQelxGN8g3uKM'

const StyledProfilPictur = {
    border: '1px solid #f2f2f2',
    borderRadius: '50%',
    width: '50px',
    height: '50px',
    objectFit: 'fill',
      backgroundImage: `url(${background})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: '50px 50px',
    backgroundColor: 'white',
}




export default function ProfilPic() {
  return (

    <Box sx={{display:'flex', justifyContent: 'left', alignItems: 'center', pt: 2, pb: 2,}}> 
    <Box sx={StyledProfilPictur}>
            

    </Box>

       
    </Box>
  )
}
