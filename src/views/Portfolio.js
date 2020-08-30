import React from 'react';
import './Portfolio.css';

const Portfolio =() =>{
    return(
        <section className="section-portfolio">
            <div id="link-portfolio"></div>
                <div className="portfolio">
                
                    <h2>MES PROJETS</h2>
                    <hr></hr>
                    <div className="zone-portfolio">
                        <figure>
                            <img src="p1.png" alt="projet-1-web-agency" />
                            <a href="http://webagency.julieramis.fr/">
                                <figcaption>
                                <h3>Intégration maquette</h3>
                                <p>html/css</p>
                                </figcaption>
                            </a>
                        </figure>
                        <figure>
                            <img src="p2.png" alt="projet-2-ireki" />
                            <a href="http://ireki.julieramis.fr/">
                                <figcaption>
                                <h3>Site office du tourisme</h3>
                                <p>Wordpress</p>
                                </figcaption>
                            </a>
                        </figure>
                        <figure>
                            <img src="p3.png" alt="projet-3-location-de-velo" />
                            <a href="http://vloc.julieramis.fr/">
                                <figcaption>
                                <h3>Site de location de vélo</h3>
                                <p>JavaScript/Bootstrap</p>
                                </figcaption>
                            </a>
                        </figure>
                        <figure>
                            <img src="p4.png" alt="projet-4-blog" />
                            <a href="https://blog-forteroche.julieramis.fr/">
                                <figcaption>
                                <h3>Blog pour un écrivain</h3>
                                <p>PHP</p>
                                </figcaption>
                            </a>
                        </figure>
                        <figure>
                            <img src="p5.png" alt="projet-5-smartcooking" />
                            <a href="https://smartcooking.julieramis.fr/">
                                <figcaption>
                                <h3>Site planning repas</h3>
                                <p>Symfony</p>
                                </figcaption>
                            </a>
                        </figure>
                    </div>
                </div>
        </section>
    )
};

export default Portfolio;