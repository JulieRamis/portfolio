import React from 'react';
import Navbar from './views/Navbar/Navbar';
import Home from './views/Home/Home';
import PresentationSection from './views/Presentation/Presentation-section';
import Portfolio from './views/Portfolio/Portfolio';
import Contact from './views/Contact/Contact'
import Footer from './views/Footer/Footer';
import './App.css';

function App () {
  return(
    
 <main style={{marginTop: '60px'}}> 
      <Navbar />
      <Home />
      <PresentationSection />
      <Portfolio />
      <Contact />
      <Footer />
 </main>
  )
 
}

export default App;
