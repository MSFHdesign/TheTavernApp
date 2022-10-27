import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

import Communities from './pages/Communities';
import Groups from './pages/Groups';
import Messages from './pages/Messages';
import Dice from './pages/Dice';
import Home from './pages/Home'
import Login from './pages/Login';

import Fejl404 from './pages/fejl404';
import EditProfil from './pages/EditProfil';

function App() {
  return (
<main className='planks-bg'>

<Routes> 
    <Route path='/' element={<Login />} />
    <Route path='/home' element={<Home/>}/>
    <Route path='*' element={<Login/>}/>
    <Route path='/404' element ={<Fejl404/>} />
    <Route path='/communities' element={<Communities/>}/>
    <Route path='/groups' element={<Groups/>}/>
    <Route path='/messages' element={<Messages/>}/>
    <Route path='/dice' element={<Dice/>}/>
    <Route path='/editprofil' element={<EditProfil />} />
</Routes>

</main>
  );
}

export default App;
