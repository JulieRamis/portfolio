import React from 'react';
import './Contact.css';

const Contact =() =>{
    return(
        <section className="section-contact">
            <div id="link-contact"></div>
                <div className="contact">
                
                    <h2>ME CONTACTER</h2>
                    <hr></hr>
                    <div className="zone-contact">
                        <figure className="figure-contact">
                           <a href="mailto:julie.ramis1@gmail.com">
                               <img src="./mail.png" alt="mail" className="img-contact"/>
                           </a>
                           <figcaption>
                               <p>Envoyer un mail</p>
                            </figcaption>
                        </figure>

                        <figure className="figure-contact">
                            <a href="https://www.linkedin.com/in/julie-ramis/" alt="lien-linkedin">
                                <img src="./linkedin.png" alt="linkedin" className="img-contact"/>
                            </a>
                            <figcaption>
                            <p>Voir mon profil LinkedIn</p>
                            </figcaption>
                        </figure>

                        <figure className="figure-contact">
                            <a href="https://github.com/JulieRamis" alt="github">
                                <img src="./github.png" alt="github" className="img-contact"/>
                            </a>
                           <figcaption>
                           <p>Découvrir mon GitHub</p>
                            </figcaption>
                        </figure>
                    </div>
                </div>
        </section>
    )
};

export default Contact;