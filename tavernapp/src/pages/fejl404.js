import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { useState } from 'react';
import BottomNav from '../components/BottomNav';
import TopNav from '../components/TopNav';
export default function fejl404() {



const Jokes = [

  `How do you get a D&D player to go out with you?
  You ask them for a d8`,
  `Why did the Halfling stop dating his Warforged girlfriend?
  Because she was too high maintenance`,
  `How does the paladin protect against the heat of a Fire bolt?
  He turns up his AC`,
  `What forest animal helps the druid get that nice green colour for their robe?
  A Dyer Wolf!`,
  `What tool helps a wizard with writing the correct runes into their spellbook?
  A Spell Checker!`,
  `If the barbarian has ten gold pieces, and the rogue steals half of it, what does the rogue take?
  1d12 slashing damage.`,
  `What happens when you stand on a d4?
  Your foot takes 1d4 damage.`,
  `Where does the ranger keep their arrows?
  In the monsters!`,
  ``,
  ``,
  ``,
  ``,
  ``,
  ``,
  ``,
  ``,
  ``,
  ``,
  ``,
  ``,
  ``,
  ``,
  ``,
]

const [joke, setJoke] = useState(0);

var math = 0;


function randomNumberInRange() {
    
  var math = Math.floor(Math.random() * Jokes.length);
};

  return (
    <Box sx={{minHeight: '100vh'}}>
         <TopNav/>
        <Typography variant="h3" color="initial">Det er menneskeligt at fejle</Typography>
    
<Button> HER ER EN KNAP </Button>
    <Typography onClick={randomNumberInRange()}>
      HER ER EN JOKE
    </Typography>
      
  <BottomNav /> </Box>
  )
}
