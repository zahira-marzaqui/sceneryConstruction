import About from "../about/About";
import AboutAcceuil from "../about/About-Acceuil";
import FormPublierProjet from "../Forms/FormPublierProjet";
import Presta1 from "../prestataires/Presta1";
import RealisationAcceuil from "../Realisation/Realisation-Acceuil";
import StepsSection from "../StepsSection";
import { Link } from 'react-router-dom';


function Acceuil() {
    return ( 
        <>
             {/* Hero Section */}
          <section id="hero" className="hero section">
            <div className="container" data-aos="fade-up" data-aos-delay={100}>
              <div className="hero-wrapper">
                <div className="row g-4">
                  <div className="col-lg-6">
                    <div className="hero-content" data-aos="zoom-in" data-aos-delay={200}>
                      <div className="content-header">
                        
                        {/* '#f58633' */}
                        <h1 style={{color: 'black'}}>SCENERY Construction : l’avantage qui change tout.</h1>
                        <p className="content-header-p">Grâce à la meilleure communauté de prestataires expérimentés,
                          publiez votre projet et recevez des offres compétitives !
                          </p>
                        <br />
                        <Link to="/services">
                          <span className="hero-label">
                          voir tous les services 
                          <i className="bi bi-arrow-right" />
                        </span>
                        </Link>
                        
                        

                        <div className="container py-3 main-card-container">
                          <div className="row g-4">
                            {/* Carte 1 */}
                            <div className="col-md-4 d-flex align-items-stretch card-container">
                              <div className="rounded p-2 text-center content h-100">
                                <div className="mb-3 text-orange">
                                  <i className="bi bi-house-door"></i>
                                  <h5 className="fw-bold" >Construction</h5>
                                <p>Services d'architecture experts pour la maison de vos rêves, garantissant un e construction de qualité.</p>

                                </div>
                              </div>
                            </div>

                            {/* Carte 2 */}
                            <div className="col-md-4 d-flex align-items-stretch card-container">
                              <div className="rounded p-2 text-center content h-100">
                                <div className="mb-3 text-orange">
                                  <i className="bi bi-bricks"></i>
                                  <h5 className="fw-bold" >Rénovation</h5>
                                <p>Transformez votre espace avec des services complets de rénovation intérieure et extérieure.</p>

                                </div>
                              </div>
                            </div>
                            

                            {/* Carte 3 */}
                            <div className="col-md-4 d-flex align-items-stretch card-container">
                              <div className="rounded p-2 text-center content h-100">
                                <div className="mb-3 text-orange">
                                  {/* <i className="bi bi-droplet-half"></i> */}
                                  <img src="assets/img/amenagement.png" alt="" width={30} height={30} className="m-1" />
                                  <h5 className="fw-bold" >Aménagement</h5>
                                <p>Conception et construction de piscines sur mesure pour votre espace extérieur idéal.</p>

                                </div>
                              </div>
                            </div>
                            
                          </div>
                        </div>
                      </div>
      
                    </div>
                  </div>{/* End Hero Content */}

                  {/* form */}
                  <FormPublierProjet></FormPublierProjet>
                </div>
              </div>
            </div>
            
          </section>{/* /Hero Section */}

          {/* Steps  */}
          <StepsSection></StepsSection>

          {/* about */}
          <AboutAcceuil></AboutAcceuil>

          <br/>
          <br/>

          {/* Realisation */}
            
            <RealisationAcceuil></RealisationAcceuil>

            <br/>
          <br/>
           {/* Call To Action Section */}
          <section className="call-to-action-1 call-to-action section" id="call-to-action">
            <div className="cta-bg" style={{backgroundImage: 'url("assets/img/real-estate/showcase-3.webp")'}} />
            <div className="container" data-aos="fade-up" data-aos-delay={100}>
              <div className="row justify-content-center">
                <div className="col-xl-6 col-lg-8">
                  <div className="cta-content text-center">
                    <h2>Besoin d’aide pour concrétiser votre idée  ?</h2>
                    <p>Notre mission est de transformer vos espaces selon vos envies, en alliant savoir-faire, créativité et efficacité. Chaque projet est une opportunité de révéler le potentiel de votre habitat, avec un accompagnement personnalisé à chaque étape.</p>
                    <div className="cta-buttons">
                      <a className="btn btn-primary" href="https://wa.me/212663039059" 
                          target="_blank" 
                          rel="noopener noreferrer">Contactez-nous</a>
                      <Link to="/devis" className="btn btn-outline"> Décrivez votre projet</Link>
                    </div>
                    <div className="cta-features">
                      <div className="feature-item" data-aos="fade-up" data-aos-delay={200}>
                        <i className="bi bi-telephone-fill" />
                        <span>Consultation gratuite</span>
                      </div>
                      <div className="feature-item" data-aos="fade-up" data-aos-delay={250}>
                        <i className="bi bi-clock-fill" />
                        <span>Assistance 24h/24 et 7j/7</span>
                      </div>
                      <div className="feature-item" data-aos="fade-up" data-aos-delay={300}>
                        <i className="bi bi-shield-check-fill" />
                        <span>Experts de confiance</span>
                      </div>
                    </div>
                  </div>{/* End CTA Content */}
                </div>
              </div>
            </div>
          </section>{/* /Call To Action Section */}
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>

        </>
     );
}

export default Acceuil;