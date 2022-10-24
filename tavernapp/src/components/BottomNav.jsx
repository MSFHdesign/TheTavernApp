
import React from 'react';
import {Box} from '@mui/material';
import { Link } from 'react-router-dom';
import community from '../images/community.png';
import dice from '../images/dice.png';
import groups from '../images/groups.png';
import messages from '../images/messages.png';



export default function BottomNav() {
    return (

        <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-around', position: 'fixed',minWidth:'100vw', bottom: 0, border: '1px solid white' ,backgroundColor: '#f2f2f2', paddingTop: 1, zIndex: 10000 }}>

        <Link to="/communities">
          <img src={community} alt="Community icon" style={{height: "30px"}}/>
        </Link>
        <Link to="/groups">
          <img src={groups} alt="Groups icon" style={{height: "30px"}}/>
        </Link>
        <Link to="/messages">
          <img src={messages} alt="Messages icon" style={{height: "30px"}}/>
        </Link>
        <Link to="/dice">
          <img src={dice} alt="Dice icon" style={{height: "30px"}}/>
        </Link>

        </Box>

    )
}