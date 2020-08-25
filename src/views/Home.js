import React from 'react';
import Presentation from './Text';
import './Home.css';

const Home =() =>{
    return(
        <div className="home">
        <div className="overlay">
            
        </div>
        <Presentation />
        <img src="./fond.jpg" alt="espace-de-travail" />
        </div>
    )
};

export default Home;