import React from 'react';
import TextHome from './Presentation-text';
import './Presentation-section.css';

const PresentationSection =() =>{
    return(
        
        <section className="section-presentation">
            <div id="link-presentation"></div>
                <div className="presentation">
                
                    <h2>Présentation</h2>
                    <hr></hr>
                    <div className="zone-presentation">
                
                        <TextHome />
                        <img src="./photo.png" alt="espace-de-travail" className="photo-profil" />
                    </div>
                    <div>
                        <h3>Mes passions :</h3>
                        <hr></hr>
                        <div className="zone-icon">
                            <img src="./totoro.png" alt="Manga/Anime" title="Anime/manga" className="icon"/>
                            <img src="./drawing.png" alt="Dessin" title="Dessin" className="icon"/>
                            <img src="./nintendo-switch.png" alt="jeux-vidéo" title="Jeux-vidéo" className="icon"/>
                        </div>
                    </div>
                </div>
        </section>
    )
};

export default PresentationSection;