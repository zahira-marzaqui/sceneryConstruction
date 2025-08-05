import About from "../about/About";
import FormPublierProjet from "../Forms/FormPublierProjet";
import Presta1 from "../prestataires/Presta1";
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
                                  <h5 className="fw-bold" >Construction maison</h5>
                                <p>Services d'architecture experts pour la maison de vos rêves, garantissant une construction de qualité.</p>

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
                                  <i className="bi bi-droplet-half"></i>
                                  <h5 className="fw-bold" >Construction de piscines</h5>
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
          <section id="home-about" className="home-about section">
            <div className="container" data-aos="fade-up" data-aos-delay={100}>
              <div className="row gy-5">
                <div className="col-lg-6" data-aos="zoom-in" data-aos-delay={200}>
                  <div className="image-gallery">
                    <div className="primary-image">
                        <img src="assets/img/construction about.svg" alt="Modern Property" className="img-fluid" />
                      {/* <div className="experience-badge">
                        <div className="badge-content">
                          <div className="number"><span data-purecounter-start={0} data-purecounter-end={15} data-purecounter-duration={1} className="purecounter" />+</div>
                          <div className="text">Years<br />Experience</div>
                        </div>
                      </div> */}
                    </div>
                    
                  </div>
                </div>
                <div className="col-lg-6" data-aos="fade-left" data-aos-delay={300}>
                  <div className="content">
                    <div className="section-header">
                      <span className="section-label">About Our Company</span>
                      <h2>Construire l'avenir de l'entrepreneuriat</h2>
                    </div>
                    <p>Nous révolutionnons la façon dont les entrepreneurs se connectent aux opportunités, rendant l'industrie de la construction plus efficace et transparente.</p>
                    <div className="achievements-list">
                      <div className="achievement-item">
                        <div className="achievement-icon">
                          <i className="bi bi-house-door" />
                        </div>
                        <div className="achievement-content">
                          <h4><span data-purecounter-start={0} data-purecounter-end={3200} data-purecounter-duration={2} className="purecounter" />+ Properties Sold</h4>
                          <p>Successfully completed transactions</p>
                        </div>
                      </div>
                      <div className="achievement-item">
                        <div className="achievement-icon">
                          <i className="bi bi-people" />
                        </div>
                        <div className="achievement-content">
                          <h4><span data-purecounter-start={0} data-purecounter-end={98} data-purecounter-duration={1} className="purecounter" />% Client Satisfaction</h4>
                          <p>Happy customers recommend us</p>
                        </div>
                      </div>
                    </div>
                    <div className="action-section">
                      <Link to="/about" className="btn-cta">
                      <span>Discover Our Story</span>
                        <i className="bi bi-arrow-right" />
                      </Link>
                      {/* <a href="about.html" className="btn-cta">
                        <span>Discover Our Story</span>
                        <i className="bi bi-arrow-right" />
                      </a> */}
                      <div className="contact-info">
                        <div className="contact-icon">
                          <i className="bi bi-telephone" />
                        </div>
                        <div className="contact-details">
                          <span>Call us today</span>
                          <strong>+212678907510</strong>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>{/* /Home About Section */}

          {/* prestataire de l'acceuil */}
          {/* <Presta1></Presta1> */}

        </>
     );
}

export default Acceuil;