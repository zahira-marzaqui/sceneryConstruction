import { Link } from 'react-router-dom';

function About() {
    return ( 
        <>
            <section className="about-hero text-center py-3 ">
              <div className="container">
                <h1 className="display-4"> Construire l'avenir de l'entrepreneuriat</h1>
                <p className="lead">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde, expedita!</p>
              </div>
            </section>
            <section id="home-about" className="home-about section">
            <div className="container" data-aos="fade-up" data-aos-delay={100}>
              <div className="row gy-5">
                <div className="col-lg-6" data-aos="zoom-in" data-aos-delay={200}>
                  <div className="image-gallery">
                    <div className="primary-image">
                        <img src="assets/img/construction about.svg" alt="Modern Property" className="img-fluid" />
                     
                    </div>
                    
                  </div>
                </div>
                <div className="col-lg-6" data-aos="fade-left" data-aos-delay={300}>
                  <div className="content">
                    <div className="section-header">
                      {/* <span className="section-label">À propos de notre entreprise</span> */}
                      <h2>Notre mission</h2>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quibusdam dolores repellendus ratione corporis facilis esse possimus ex explicabo ipsum, sed perferendis eligendi voluptate culpa maxime beatae. Excepturi quaerat ab eaque consectetur optio repellendus doloremque, praesentium sequi deserunt porro magni culpa laborum ad ratione, nobis at rem necessitatibus molestias debitis.
                    </p>
                    <div className="achievements-list">
                      
                    </div>
                    <div className="action-section">
                      <a 
                          href="https://wa.me/212663039059" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="btn-cta"
                        >
                          <span>Allo Scenery</span>
                          <i className="bi bi-telephone" />
                        </a>

                      {/* <a href="about.html" className="btn-cta">
                        <span>Discover Our Story</span>
                        <i className="bi bi-arrow-right" />
                      </a> */}
                      <div className="contact-info">
                        {/* <div className="contact-icon">
                          <i className="bi bi-telephone" />
                        </div> */}
                        <div className="contact-details">
                          <span>Appelez-nous dès aujourd'hui </span>
                          <strong>+212663-039059</strong>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </section>
          <div className="container section-title-about" data-aos="fade-up">
            <h2>Nos Valeurs </h2>
          </div>
          <section id="about" className="about section">
            <div className="container" data-aos="fade-up" data-aos-delay={100}>
              <div className="features-showcase" data-aos="fade-up" data-aos-delay={350}>
                <div className="row gy-4">
                  <div className="col-lg-4 col-md-6">
                    <div className="feature-box-about" data-aos="flip-up" data-aos-delay={400}>
                      <div className="feature-icon">
                        <i class="bi bi-shield-check"></i>
                      </div>
                      <div className="feature-content">
                        <h4>Confiance</h4>
                        <p>Nous instaurons la confiance en appliquant des processus de vérification stricts et des opérations transparentes.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="feature-box-about" data-aos="flip-up" data-aos-delay={450}>
                      <div className="feature-icon">
                        <i class="bi bi-stars"></i>
                      </div>
                      <div className="feature-content">
                        <h4>Excellence</h4>
                        <p>Nous recherchons l’excellence dans chaque aspect de notre service, de l’expérience utilisateur à l’accompagnement.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="feature-box-about" data-aos="flip-up" data-aos-delay={500}>
                      <div className="feature-icon">
                        <i class="bi bi-lightbulb-fill"></i>
                      </div>
                      <div className="feature-content">
                        <h4>Innovation</h4>
                        <p>Notre plateforme évolue en permanence pour s'adapter aux besoins changeants du secteur de la construction.</p>
                      </div>
                    </div>
                  </div>
                  
                </div>
              </div>{/* End Features Showcase */}
              
            </div>

            {/* CTA Section */}
          <div className="cta-section mb-5" data-aos="fade-up" data-aos-delay={800}>
            <div className="row justify-content-center text-center">
              <div className="col-lg-8">
                <h3>Prêt à lancer votre projet ?</h3>
                <p>Faites appel à nos experts pour réaliser vos travaux en toute confiance.</p>
                <div className="action-buttons">
                  <Link to="/devis" className="btn btn-primary">Obtenir un devis</Link>
                  <Link to="/services" className="btn btn-secondary">Voir nos réalisations</Link>
                </div>

              </div>
            </div>
          </div>
          {/* End CTA Section */}

          </section>
          
      

        </>
    );
}

export default About;