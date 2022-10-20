import {useState} from 'react';
import { Button, Box, Typography, } from '@mui/material';
import SelectUnstyled from '@mui/base/SelectUnstyled';
import OptionUnstyled from '@mui/base/OptionUnstyled';

const App = () => {
  const [num, setNum] = useState(0);

  function randomNumberInRange(min, max) {
    // 👇️ get number between min (inclusive) and max (inclusive)
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  

  const handleClick = () => {
    setNum(randomNumberInRange(1, 2));
  };
 


  return (
    <Box>
      <Typography variant ='h2'>number is: {num}</Typography>
      <Button onClick={handleClick}>Generate random number</Button>
    
    <br/>

      <SelectUnstyled className='Value' defaultValue={10}> 
      <OptionUnstyled value={1}>{1}</OptionUnstyled>
      <OptionUnstyled>{2}</OptionUnstyled>
    </SelectUnstyled>

    </Box>
  );
};

export default App;
