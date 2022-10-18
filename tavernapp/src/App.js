import React from 'react';
import './App.css';
import TopNav from './components/TopNav.js';
import AddArticle from './components/AddArticle';
import Articles from './components/Articles';
import ProfilPic from './components/ProfilPic';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TopNav/>
        
      </header>
    <ProfilPic />

























      <div className='articles'>
      <Articles/>
    </div>
    <div className='form'>
      <AddArticle/>
    </div>
    </div>
    
  );
}

export default App;
