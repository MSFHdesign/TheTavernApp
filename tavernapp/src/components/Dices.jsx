import {useState} from 'react';
import { Button, Box, Typography, FormControl,InputLabel, MenuItem, Select} from '@mui/material';

const App = () => {
  const [num, setNum] = useState(0);

  const  [dice,setDice] = useState(20);

  function randomNumberInRange(min, max) {
    
    return Math.floor(Math.random() * max) + min;
  };
  
const handleChange = (event) => {
  setDice(event.target.value);
};

  const handleClick = () => {
    setNum(randomNumberInRange(1, dice));
  };
 


  return (
    <Box sx={{gap: 'var(--gap)'}}>
     <FormControl sx={{ m: 1, minWidth: 120, mt: 'var(--gap)' }}>
     <InputLabel sx={{color: 'white', }} id="dice" name="dice">Terning</InputLabel>
  <Select
  name="dice"
    labelId="demo-simple-select-label"
    id="dice"
    value={dice}
    label="dice"
    onChange={handleChange}
    sx={{color: 'white', backgroundColor: 'var(--BgPop)',}}
  >
      <MenuItem value="20">D20</MenuItem>
      <MenuItem value="12">D12</MenuItem>
        <MenuItem value="10">D10</MenuItem>
        <MenuItem value="8">D8</MenuItem>
        <MenuItem value="6">D6</MenuItem>
        <MenuItem value="4">D4</MenuItem>
      </Select>


      <Box sx={{display: 'flex', flexDirection: 'column',
    alignContent: 'center',
    alignItems: 'center',mt: 'var(--gap)'}}>
      <Typography variant ='h4' color='white'>D{dice} rullede:  </Typography>
      <Typography variant="h5" color="white" sx={{fontSize: '35px',mt: 'var(--gap)' }}> {num}   </Typography>

      </Box>

      <Button onClick={handleClick} sx={{border: 'var(--border)', color: 'white', mt: 'var(--gap)', backgroundColor: 'var(--BgPop)', borderRadius: '26px' }}>Kast terningen</Button>
    
    <br/>
    </FormControl>
    </Box>
  );
};

export default App;
