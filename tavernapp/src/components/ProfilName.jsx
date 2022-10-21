import React from 'react'

import { Typography } from '@mui/material'


const UserName = {
    NameFallBack: 'Guest',
    U1: 'Rasmus_The_Reactor'

}
export default function ProfilName() {
  return (
      <Typography variant="p" color="initial" sx={{fontSize: '1.5rem', maxWidth: '100%', color: 'white'}}>{UserName.U1}</Typography>
           
  )
}
