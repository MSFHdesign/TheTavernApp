
import React from 'react';
import {Box} from '@mui/material';
import { Link } from 'react-router-dom';
import community from '../images/community.png';
import dice from '../images/dice.png';
import groups from '../images/groups.png';
import messages from '../images/messages.png';
import home from '../images/home.png';



export default function BottomNav() {
    return (

        <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-around', position: 'fixed',minWidth:'100vw', bottom: 0, left: 0, border: 'none' ,backgroundColor: 'var(--navBGcolor)', paddingTop: 1, zIndex: 10000 }}>

        <Link to="/home">
          <img src={home} alt="Home icon" style={{height: "30px"}}/>
        </Link>
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