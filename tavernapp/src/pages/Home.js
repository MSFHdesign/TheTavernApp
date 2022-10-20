

import Articles from '../components/Articles';
import ProfilPic from '../components/ProfilPic';
import ProfilName from '../components/ProfilName.jsx';

import OpenAddArticle from '../components/OpenAddArticle.jsx';

import { Box,  } from '@mui/material'



export default function Home() {
    return(
    
    <div className="App">

    <body>
  <Box sx={{display: 'flex', alignItems: 'center'}}>
  <ProfilPic /> <Box sx={{p:'1rem'}}/>
  <ProfilName />
  </Box>



  </body>





    <div className='articles'>
       <Articles/>
    </div>
        <OpenAddArticle />


  


  </div>
    )}