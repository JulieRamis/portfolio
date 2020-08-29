import React from 'react';
import TextHome from './Text';
import './Home.css';

const Home =() =>{
    return(
        <div className="home">
        <div className="overlay">
            
        </div>
        <TextHome />
        <img src="./fond.jpg" alt="espace-de-travail" />
        </div>
    )
};

export default Home;