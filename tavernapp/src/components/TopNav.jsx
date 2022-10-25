import React from 'react';
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';
import { Box} from '@mui/material';

import BtnTopapp from './ModalTop.jsx';

export default function TopNav() {
  return (
    <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'fixed',minWidth:'100vw', top:'0px', zIndex: '1000',backgroundColor: 'rgba(250,250,250,0.8)', padding: 1}}>
      <Link to="/">
          <img src={logo} alt="The Tavern Logo" style={{width: "100px"}}/>
      </Link>
        
    {/* <Typography sx={{fontSize: '2rem', color: 'red'}} variant="h1" color="initial">
        The Tavern
    </Typography> */}
    <BtnTopapp/>




</Box>
  )
}
