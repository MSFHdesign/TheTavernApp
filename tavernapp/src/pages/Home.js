

import Articles from '../components/Articles';
import ProfilPic from '../components/ProfilPic';
import ProfilName from '../components/ProfilName.jsx';
import BottomNav from '../components/BottomNav';
import OpenAddArticle from '../components/OpenAddArticle.jsx';
import TopNav from '../components/TopNav';
import { Box, Typography,  } from '@mui/material'




export default function Home() {
    return(
    
    <Box className="App" sx={{minHeight: '100vh',pb:'calc(var(--addbtnSize) + 20%)',}}> <TopNav/>

    <body>
  <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', }}>
  <ProfilPic /> <Box sx={{p:'0.5rem'}}/>
  <Box> 
  <Typography sx={{fontSize: 50, color: 'var(--H2Color)'}}> Velkommen</Typography>
  <ProfilName />
  </Box>




  <BottomNav /></Box>



  </body>





    <Box className='articles' >
       <Articles/>
    </Box>
        <OpenAddArticle />


  


  </Box>
    )}