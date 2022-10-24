
import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import UserNameField from './LogindComponent/UserNameField.jsx';

import '../styles/Btn.css'


const style = {
  color: 'white',
  position: 'absolute',
  width: '70%',
  height: '70%',
  top: '10%',
  left: '7%',
  bgcolor: 'var(--BgPop)',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};



export default function LoginUser() {
  
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
const BtnStyle = {
  border: '2px solid var(--btnColor)',
  color: 'var(--btnColor)',
  backgroundColor: 'var(--bgColor)',
  width: 'var(--btnWidth)',
  borderRadius: 'var(--btradius)'
}

    return (
      <div>
        <Button sx={BtnStyle} className='UserBtns btn' onClick={handleOpen}>Log ind</Button>
        <Modal
          keepMounted
          open={open}
          onClose={handleClose}
          aria-labelledby="keep-mounted-modal-title"
          aria-describedby="keep-mounted-modal-description"
        >
          <Box sx={style}>
            <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
              
            <UserNameField />





            </Typography>
          </Box>
        </Modal>
      </div>
    );
  }
  
