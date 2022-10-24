
import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import '../styles/Btn.css'


const style = {
  position: 'absolute',
  width: '70%',
  height: '70%',
  top: '10%',
  left: '7%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function JoinCommunity() {
  
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
    return (
      <div>
        <Button className='UserBtns btn' onClick={handleOpen}>Følg</Button>
        <Modal
          keepMounted
          open={open}
          onClose={handleClose}
          aria-labelledby="keep-mounted-modal-title"
          aria-describedby="keep-mounted-modal-description"
        >
          <Box sx={style}>
            <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
            <Box sx={{display: 'inline-flex', justifyContent: 'space-between',}}>
            <Button className='UserBtns btn' sx={{ mt: 1, mr: 1, width: '50%'}} type="submit" variant="outlined" onClick={handleClose}>
            Følg
            </Button>
            <Button className='UserBtns btn' sx={{ mt: 1, mr: 1, width: '50%'}} type="submit" variant="outlined" onClick={handleClose}>
            Fortryd
            </Button>
            </Box>
            </Typography>
          </Box>
        </Modal>
      </div>
    );
  }
  
