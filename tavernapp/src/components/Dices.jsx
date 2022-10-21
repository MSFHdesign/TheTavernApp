import {useState} from 'react';
import { Button, Box, Typography, } from '@mui/material';

const App = () => {
  const [num, setNum] = useState(0);

  function randomNumberInRange(min, max) {
    // 👇️ get number between min (inclusive) and max (inclusive)
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  

  const handleClick = () => {
    setNum(randomNumberInRange(1, 20));
  };
 


  return (
    <Box>
      <Typography variant ='h2'>number is: {num}</Typography>
      <Button onClick={handleClick}>Generate random number</Button>
    
    <br/>

   

    </Box>
  );
};

export default App;
