

import Articles from '../components/Articles';
import ProfilPic from '../components/ProfilPic';
import ProfilName from '../components/ProfilName.jsx';

import OpenAddArticle from '../components/OpenAddArticle.jsx';

import { Box, Typography,  } from '@mui/material'




export default function Home() {
    return(
    
    <div className="App">

    <body>
  <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-evenly'}}>
  <ProfilPic /> <Box sx={{p:'0.5rem'}}/>
  <Box> 
  <Typography sx={{color: 'white'}}> Velkommen</Typography>
  <ProfilName />
  </Box>
  </Box>



  </body>





    <div className='articles'>
       <Articles/>
    </div>
        <OpenAddArticle />


  


  </div>
    )}