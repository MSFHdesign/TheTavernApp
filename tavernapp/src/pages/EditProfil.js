import { Box } from '@mui/system'
import React from 'react'
import Typography from '@mui/material/Typography'

import PicEdit from '../components/PicEdit.jsx';



export default function EditProfil() {
  return (
    <Box sx={{minHeight: '100vh'}}>
        <Typography sx={{fontSize: 50, color: 'var(--H2Color)', paddingTop: 10,}}> Rediger profil</Typography>


        <Box sx= {{}}>
          <PicEdit />

        </Box>
    </Box>
  )
}
