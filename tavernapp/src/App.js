import React from 'react';
import './App.css';
import TopNav from './components/TopNav.js';
import AddArticle from './components/AddArticle';
import Articles from './components/Articles';
import ProfilPic from './components/ProfilPic';
import ProfilName from './components/ProfilName.jsx';
import BottomNav from './components/BottomNav';


import { Box,  } from '@mui/material'

// import Login from './components/Login.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TopNav/>
        
      </header>
      <body>
    <Box sx={{display: 'flex', alignItems: 'center'}}>
    <ProfilPic /> <Box sx={{p:'1rem'}}/>
    <ProfilName />
    </Box>



    </body>





      <div className='articles'>
      <Articles/>
    </div>
      <AddArticle/>
    <BottomNav />
    </div>
    
  );
}

export default App;
