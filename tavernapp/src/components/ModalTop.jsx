import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const style = {
  position: 'absolute',
  top: '7%',
  right: '0%',
 
  width: '50%',
  bgcolor: 'background.paper',
  border: 'red',
  boxShadow: 24,
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
          <Typography id="modal-modal-title" variant="h6" component="h2" sx={{textAlign: 'center'}}>
            Profil
          </Typography>
          <Typography id="modal-modal-description" sx={liStyled}>
            LOG UD! 
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
