import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ProfilPic from './ProfilPic'
import { Link } from 'react-router-dom';
import ProfilName from './ProfilName';

const style = {
  position: 'absolute',
  top: '7%',
  right: '10%',
 
  width: '50%',
  bgcolor: 'brown',
  border: 'red',
  boxShadow: 10,
  p: 4,
};

const btnStyled = {
color: 'red',
};


const liStyled ={
    color: 'red',
    '&:hover': {
        backgroundColor: 'red',
        color: 'white',
    }
}

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} sx={btnStyled}><AccountCircleIcon /></Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" sx={{textAlign: 'center', display: 'flex', alignItems: 'center'}}>
          <ProfilPic /> 
          <Box sx={{p:'0.2rem'}}/>
            <ProfilName /> 
          </Typography>
          <Typography id="modal-modal-description" sx={liStyled}>
          <Link to="/login">  LOG UD!</Link>
          </Typography>
          <Typography id="modal-modal-description" sx={liStyled}>
            Rediger profil 
          </Typography>
          <Typography id="modal-modal-description" sx={liStyled}>
            Support 
          </Typography>

        </Box>
      </Modal>
    </div>
  );
}
