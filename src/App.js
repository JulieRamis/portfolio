import React from 'react';
import Navbar from './views/Navbar/Navbar';
import Home from './views/Home';
import PresentationSection from './views/Presentation/Presentation-section';
import Portfolio from './views/Portfolio';
import './App.css';

function App () {
  return(
    
 <main style={{marginTop: '60px'}}> 
      <Navbar />
      <Home />
      <PresentationSection />
      <Portfolio />
 </main>
  )
 
}

export default App;
