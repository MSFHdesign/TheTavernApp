
import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import AddProfile from './AddProfiles'

import '../styles/Btn.css';

const style = {
  color: 'white',
  position: 'absolute',
  width: '70%',
  height: '70%',
  top: '10%',
  left: '7%',
  bgcolor: 'rgba(0,0,0,1)',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const BtnStyle = {
  border: 'var(--border)',
  color: 'white',
  backgroundColor: 'var(--bgColor)',
  width: 'var(--btnWidth)',
  borderRadius: 'var(--btradius)'
}


export default function CreateUser() {
  
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
    return (
      <div>
        <Button sx={BtnStyle} className='UserBtns btn' onClick={handleOpen}>Opret bruger</Button>
        <Modal
          keepMounted
          open={open}
          onClose={handleClose}
          aria-labelledby="keep-mounted-modal-title"
          aria-describedby="keep-mounted-modal-description"
        >
          <Box sx={style}>
              <AddProfile/>
          </Box>
        </Modal>
      </div>
    );
  }
  
