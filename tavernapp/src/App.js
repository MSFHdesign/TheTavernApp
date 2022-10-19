import React from 'react';
import './App.css';
import TopNav from './components/TopNav.js';
import AddArticle from './components/AddArticle';
import Articles from './components/Articles';
import ProfilPic from './components/ProfilPic';
import BottomNav from './components/BottomNav';



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
      <AddArticle/>
    <BottomNav />
    </div>
    
  );
}

export default App;
