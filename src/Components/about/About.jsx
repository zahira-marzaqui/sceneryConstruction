function About() {
    return ( 
        <>
            <section id="home-about" className="home-about section">
    <div className="container" data-aos="fade-up" data-aos-delay={100}>
      <div className="row gy-5">
        <div className="col-lg-6" data-aos="zoom-in" data-aos-delay={200}>
          <div className="image-gallery">
            <div className="primary-image">
              <img src="assets/img/Construction.png" alt="Modern Property" className="img-fluid" />
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
              <a href="about.html" className="btn-cta">
                <span>Discover Our Story</span>
                <i className="bi bi-arrow-right" />
              </a>
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
        </>
    );
}

export default About;