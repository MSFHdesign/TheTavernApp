import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import AddMessage from '../components/AddMessage'
import Modal from '@mui/material/Modal';

import Typography from '@mui/material/Typography';

// Michael
const style3 = {
  color: 'var(--addBtnColor)',
  width: 'var(--addbtnSize)',
  height: 'var(--addbtnSize)',
  backgroundColor: 'var(--addBtnBGColor)',
  position: 'fixed',
    bottom: '8%',
    left: '40%',
  border: 'var(--addBtnBorder)',
  boxShadow: 24,
  p: 4,
  m: 0,
};

const style1 = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    height: '70%',
    bgcolor: 'black',
    color: 'white',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    mt:2,
    mb:4,
  };

export default function FloatingActionButtons() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
  return (
    <Box sx={{ '& > :not(style)':  style3 }}>
      <Fab color="primary" aria-label="add" onClick={handleOpen}>
        <AddIcon />
      </Fab>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style1}>
          
          <Typography id="keep-mounted-modal-description" sx={{ mt: 2, }}>

          <AddMessage/>

          </Typography>
        </Box>
      </Modal>
    </Box>
  );
}




