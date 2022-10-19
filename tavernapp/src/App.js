import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
<<<<<<< Updated upstream
import TopNav from './components/TopNav.js';
import AddArticle from './components/AddArticle';
import Articles from './components/Articles';
import ProfilPic from './components/ProfilPic';
import ProfilName from './components/ProfilName.jsx';
import BottomNav from './components/BottomNav';
import Messages from './pages/Messages';
import Communities from './pages/Communities';
import Groups from './pages/Groups';
import Dice from './pages/Dice';
import { Routes, Route } from 'react-router-dom';
=======
>>>>>>> Stashed changes


import Home from './pages/Home'

// import Login from './components/Login.js';

function App() {
  return (
<<<<<<< Updated upstream
    <div className="App">
      <header className="App-header">
        <TopNav/>
        
      </header>
      <body>
        <Box sx={{display: 'flex', alignItems: 'center'}}>
        <ProfilPic /> <Box sx={{p:'1rem'}}/>
        <ProfilName />
        </Box>
=======
>>>>>>> Stashed changes

<Routes> 
    <Route path='/' element={<Home/>}/>

<<<<<<< Updated upstream

      





        <div className='articles'>
          <Articles/>
        </div>
          <AddArticle/>
  =======

    
        <BottomNav>
          <Routes>
                  <Route path='/communities' element={<Communities />} />
                  <Route path='/groups' element={<Groups />} />
                  <Route path='/messages' element={<Messages />} />
                  <Route path='/dice' element={<Dice />} />
          </Routes>
        </BottomNav>
      </body>


    </div>
=======
</Routes>
    
>>>>>>> Stashed changes
    
    
  );
}

export default App;
