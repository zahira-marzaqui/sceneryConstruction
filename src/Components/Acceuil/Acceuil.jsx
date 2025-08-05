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
          <About></About>

          {/* prestataire de l'acceuil */}
          {/* <Presta1></Presta1> */}

        </>
     );
}

export default Acceuil;