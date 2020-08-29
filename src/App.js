import React from 'react';
import Navbar from './views/Navbar/Navbar';
import PresentationSection from './views/Presentation-section';
import Home from './views/Home';
import './App.css';

function App () {
  return(
    
 <main style={{marginTop: '60px'}}> 
      <Navbar />
      <Home />
      <PresentationSection />
 </main>
  )
 
}

export default App;
