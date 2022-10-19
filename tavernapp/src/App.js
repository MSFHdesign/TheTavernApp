import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';


import Home from './pages/Home'
import Login from './pages/Login';

// import Login from './components/Login.js';

function App() {
  return (

<Routes> 
    <Route path='/' element={<Home/>}/>
    <Route path='*' element={<Home/>}/>
    <Route path='/login' element={<Login />} />


</Routes>
    
    
  );
}

export default App;
