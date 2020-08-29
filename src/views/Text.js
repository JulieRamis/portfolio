import React from 'react';
import './Text.css';

const TextHome =() =>{

    return(
    <div className="text-home">
        <div>
            <h1 className="animate__animated animate__backInLeft">Julie Ramis</h1>
            <h2 className="animate__animated animate__backInRight text-dev-home">Développeuse Front-End</h2>
            <a href="#link-presentation" className="button">En savoir plus</a>
        </div>
    </div>
    )
};

export default TextHome;