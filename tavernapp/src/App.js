import React from 'react';
import './App.css';
import AddArticle from './components/AddArticle';
import Articles from './components/Articles';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        
        <h1>The Tavern</h1>
    
      </header>
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
