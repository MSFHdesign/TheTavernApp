import {useState} from 'react';
import { Button, Box, Typography, } from '@mui/material';

const App = () => {
  const [num, setNum] = useState(0);
  const  [dice,setDice] = useState(20);

  function randomNumberInRange(min, max) {
    // 👇️ get number between min (inclusive) and max (inclusive)
    return Math.floor(Math.random() * max) + min;
  };

  const selectDice=() =>{
    const test = document.getElementById('dice').value;
    setDice(test)
    console.log(dice);
}
  
  const handleClick = () => {
    setNum(randomNumberInRange(1, dice));
  };


  return (
    <Box>
      <label>Vælg terning</label>
      <select name="dice" id="dice" onChange={selectDice}>
      <option value="20">d20</option>
      <option value="12">d12</option>
        <option value="10">d10</option>
        <option value="8">d8</option>
        <option value="6">d6</option>
        <option value="4">d4</option>
      </select>
      <Typography variant ='h2'>number is: {num}</Typography>
      <Button onClick={handleClick}>Generate random number</Button>
    
    <br/>

    </Box>
  );
};

export default App;
