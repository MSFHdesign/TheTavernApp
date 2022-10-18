import React from 'react'

import { Typography } from '@mui/material'


const UserName = {
    NameFallBack: 'Guest',
    U1: 'Rasmus The Reactor'

}
export default function ProfilName() {
  return (
      <Typography variant="p" color="initial" sx={{fontSize: '1.5rem', maxWidth: '100%'}}>{UserName.U1}</Typography>
           
  )
}
