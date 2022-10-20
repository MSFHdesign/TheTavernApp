import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import BottomNav from './components/BottomNav';
import Communities from './pages/Communities';
import Groups from './pages/Groups';
import Messages from './pages/Messages';
import Dice from './pages/Dice';
import Home from './pages/Home'
import Login from './pages/Login';
import TopNav from './components/TopNav';


function App() {
  return (
<main className='planks-bg'>
<TopNav/>
<Routes> 
    <Route path='/login' element={<Login />} />
    <Route path='/' element={<Home/>}/>
    <Route path='*' element={<Home/>}/>

    <Route path='/communities' element={<Communities/>}/>
    <Route path='/groups' element={<Groups/>}/>
    <Route path='/messages' element={<Messages/>}/>
    <Route path='/dice' element={<Dice/>}/>

    
</Routes>
<BottomNav />
</main>
  );
}

export default App;
