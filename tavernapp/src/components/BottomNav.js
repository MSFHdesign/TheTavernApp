
import React from 'react';
import {Box} from '@mui/material';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import community from '../images/community.png';
import dice from '../images/dice.png';
import groups from '../images/groups.png';
import messages from '../images/messages.png';

<<<<<<< Updated upstream
=======
import Communities from "../pages/Communities";

>>>>>>> Stashed changes


export default function BottomNav() {
    return (
<<<<<<< Updated upstream
=======
    
        <Router>
          <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'sticky', }}>

          <Link path="/communities" element={<Communities />} >
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
>>>>>>> Stashed changes

        <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'sticky', }}>
        <Router>
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
        </Router>
        </Box>

    )
}