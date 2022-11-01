import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import BottomNav from "../components/BottomNav";
import TopNav from "../components/TopNav";
import oops from '../images/oops2.png';
// fælles hygge-hygge projekt

export default function Fejl404() {
  const [joke, setJoke] = useState();

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
    `Which body of water do you get bonuses to sail across?
     The proficien-sea!`,
    `Why was the musician kicked out of the tavern?
     He was bard!`,
    `What do you get when you cross the wizard and the rogue?
     Time to roll initiative.`,
    `Why is a necromancer not always a bad guy?
     Sometimes they just want to raise a family in peace!`,
    `What is that mineral called that’s just out of reach and gives you a choice?
     Ether Ore.`,
    `What do you call an Ent in a blizzard?
     Shiver-me-Timbers… brrrrr….`,
    `Two ogres are flanking a gelatinous cube (or whatever…)
     ogre 1: How you get at other side of the cube?
     ogre 2: What you talking about? You at other side!`,
    `An orc asks another orc
     Orc 1: What’s the difference between an elf, and a trampoline?
     Orc 2: I dunno
     Orc 1: You take your boots off before you jump on a trampoline.`,
    `How many high elves does it take to change a light bulb?
     Just one. He holds the bulb, and the universe revolves around him.`,
    `A cleric, a druid, and a goblin walk into a bar.
     The goblin looks to other two and say “oops, I’m in the wrong joke.`,
    `The Elf shoves the beer away in disdain.
     The Human waves the fly away and drinks the beer.
     The Dwarf picks the fly up, holds it over his glass and yells, “Spit it all out you little *******!”`,
    `How do you get a bar full of Dwarves up on the roof?
     Yell “drinks on the house!”`,
    `What do you call a raging barbarian?
     Anything you like – you can’t make him listen while Raging.`,
     `What is the favorite hot beverage of a cleric? Divini-tea!`,
     `What is Dragon with no silver called? A dron.`,
     `Why are dragons amazing musicians? They know their scales.`,
     `What did the demon have to face when his girlfriend had joined the Holy Order? The fact that she fiend-zoned him.`,
     `Why are the spellcasters are most unbalanced? Because they cantrip.`,
     `What is a Goblin who has an injured leg called? A hobblin'.`,
     `How many Paladins will it take to fix a light bulb? Two. One to install the bulb, and the other to "uphold the light".`,
     `A human, a half orc, and an elf walk into a bar. The dwarf walks under it`,
     `What is an orc with two brain cells called? 

     Pregnant.`,
     `Der er ikke flere jokes ! staaaaaaaaaph! `,
     `Okay, nu lover jeg der ikke er flere...`,
     `jeg meeeener det; STOP NU! sød tak`,
     
    ];
    var math = 0;

  function randomNumberInRange() {
    math = Math.floor(Math.random() * Jokes.length);
    setJoke(Jokes[math]);
  }

  return (
    <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <TopNav />
      <Typography
        variant="h2"
        color="initial"
        sx={{ pt: 8, textAlign: "center", color: "white" }}
      >
        Hovsa!
      </Typography>
      <div className="image-box"style={{display: "flex", justifyContent: "center"}}>
      <img src={oops} alt="Spilt beer" style={{padding: "20px 0px 0px", opacity: "0.6", width: "230px"}} />
      </div>
      <Typography
        variant="h5"
        color="initial"
        sx={{ pt: 4, textAlign: "center", color: "var(--P)" }}
      >
        Et slagsmål er brudt ud på kroen! <br></br>
        Let stemningen med humor:
      </Typography>

      <Button
        sx={{
          marginTop: 4,
          border: "2px solid Green",
          backgroundColor: "transparent",
          color: "white",
          width: "200px",
          marginLeft: 12,
          marginRight: 12
        }}
        onClick={randomNumberInRange}
      >
        {" "}
        Fortæl joke{" "}
      </Button>
      <Typography color="white" sx={{ margin: 4, fontSize: "20px" }}>
        {joke}
      </Typography>
      <BottomNav />
    </Box>
  );
}
