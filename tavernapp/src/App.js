import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';


import Home from './pages/Home'

// import Login from './components/Login.js';

function App() {
  return (

<Routes> 
    <Route path='/' element={<Home/>}/>

<<<<<<< Updated upstream
</Routes>
=======

      





        <div className='articles'>
          <Articles/>
        </div>
          <AddArticle/>
 

    
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
>>>>>>> Stashed changes
    
    
  );
}

export default App;
