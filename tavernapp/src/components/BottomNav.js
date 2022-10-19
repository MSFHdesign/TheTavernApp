
import React from 'react';
import {Box} from '@mui/material';

export default function BottomNav() {
    return (
        <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'sticky', }}>
            <img src="images/community.png" alt="Communities" style={{height: "50px"}}/>
            <img src="images/groups.png" alt="Groups"style={{height: "50px"}}/>
            <img src="images/messages.png" alt="Messages"style={{height: "50px"}}/>
            <img src="images/dice.png" alt="Dice"style={{height: "50px"}}/>
            
        </Box>
    )
}