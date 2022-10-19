
import React from 'react';
import {Box} from '@mui/material';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import community from '../images/community.png';
import dice from '../images/dice.png';
import groups from '../images/groups.png';
import messages from '../images/messages.png';

export default function BottomNav() {
    return (
        <Router>
        <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'sticky', }}>

        <Link to="/communities">
          <img src={community} alt="Community icon" style={{height: "50px"}}/>
        </Link>
        <Link to="/groups">
          <img src={groups} alt="Groups icon" style={{height: "50px"}}/>
        </Link>
        <Link to="/messages">
          <img src={messages} alt="Messages icon" style={{height: "50px"}}/>
        </Link>
        <Link to="/dice">
          <img src={dice} alt="Dice icon" style={{height: "50px"}}/>
        </Link>
            
        </Box>
        </Router>
    )
}