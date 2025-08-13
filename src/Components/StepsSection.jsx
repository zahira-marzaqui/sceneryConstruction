function StepsSection() {
    return ( 
        <>
            <section id="about" className="about section">
                <div className="container" data-aos="fade-up" data-aos-delay={100}>
                    <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="hero-content text-center" data-aos="zoom-in" data-aos-delay={200}>
                        <h2>Lancez votre projet de rénovation en 3 étapes seulement !</h2>
                        <p className="hero-description">SCENERY Construction simplifie chaque étape de votre projet, de l’inspiration
                        à la finalisation, pour une rénovation sans stress.</p>
                        </div>
                        <div className="row g-4 steps-content d-flex justify-content-between">
                            <div className="col-lg-3 h-100 p-4  col-md-6 text-center">
                                <span className="hero-label">
                                    1
                                </span>
                                <img src="assets/img/construction1.svg" className="d-block img-fluid mx-auto" width={220} height={200} alt="" />
                                <h2>Partagez votre vision</h2>
                                <p>Décrivez votre projet en ajoutant vos besoins, envies et inspirations (photos, croquis, etc.).</p>
                            </div>
                            <div className="col-lg-3 h-100 p-4 col-md-6 text-center">
                                <span className="hero-label">
                                    2
                                </span>
                                <img src="assets/img/Construction-pana 2.svg" className="d-block mx-auto" width={220} height={200} alt="" />
                                <h2 className="">Recevez et comparez les devis</h2>
                                <p>Recevez et comparez des devis personnalisés de nos partenaires.</p>
                            </div>
                            <div className="col-lg-3 h-100 p-4 col-md-6 text-center">
                                <span className="hero-label">
                                    3
                                </span>
                                <img src="assets/img/Construction 3.svg" className="d-block mx-auto" width={220} height={200} alt="" />
                                <h2>Lancez votre projet</h2>
                                <p>Gérez votre chantier en ligne : signature, suivi, échanges, tout sur notre plateforme.</p>
                            </div>
                        </div>
                        {/* <div className="dual-image-layout" data-aos="fade-up" data-aos-delay={300}>
                        <div className="row g-4 align-items-center">
                            <div className="col-lg-6">
                            <div className="primary-image-wrap">
                                <img src="assets/img/real-estate/property-exterior-4.webp" alt="Luxury Property" className="img-fluid" />
                                <div className="floating-badge" data-aos="zoom-in" data-aos-delay={400}>
                                <div className="badge-content">
                                    <i className="bi bi-award" />
                                    <span>Top Rated Agency</span>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-lg-6">
                            <div className="secondary-image-wrap">
                                <img src="assets/img/real-estate/agent-3.webp" alt="Professional Agent" className="img-fluid" />
                            </div>
                            </div>
                        </div>
                        </div> */}
                    </div>
                    </div>
                    {/* <div className="features-showcase" data-aos="fade-up" data-aos-delay={350}>
                    <div className="row gy-4">
                        <div className="col-lg-3 col-md-6">
                        <div className="feature-box" data-aos="flip-up" data-aos-delay={400}>
                            <div className="feature-icon">
                            <i className="bi bi-house-door" />
                            </div>
                            <div className="feature-content">
                            <h4>Residential Sales</h4>
                            <p>Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim.</p>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                        <div className="feature-box" data-aos="flip-up" data-aos-delay={450}>
                            <div className="feature-icon">
                            <i className="bi bi-building" />
                            </div>
                            <div className="feature-content">
                            <h4>Commercial Properties</h4>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                        <div className="feature-box" data-aos="flip-up" data-aos-delay={500}>
                            <div className="feature-icon">
                            <i className="bi bi-graph-up-arrow" />
                            </div>
                            <div className="feature-content">
                            <h4>Investment Guidance</h4>
                            <p>Totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae.</p>
                            </div>
                        </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                        <div className="feature-box" data-aos="flip-up" data-aos-delay={550}>
                            <div className="feature-icon">
                            <i className="bi bi-shield-check" />
                            </div>
                            <div className="feature-content">
                            <h4>Legal Support</h4>
                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.</p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div> */}
                    {/* End Features Showcase */}
                    {/* <div className="metrics-section" data-aos="fade-up" data-aos-delay={400}>
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                        <div className="metrics-wrapper">
                            <div className="row text-center">
                            <div className="col-lg-3 col-6">
                                <div className="metric-item" data-aos="zoom-in" data-aos-delay={450}>
                                <div className="metric-icon">
                                    <i className="bi bi-trophy" />
                                </div>
                                <div className="metric-value">
                                    <span data-purecounter-start={0} data-purecounter-end={1250} data-purecounter-duration={2} className="purecounter" />+
                                </div>
                                <div className="metric-label">Successful Sales</div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-6">
                                <div className="metric-item" data-aos="zoom-in" data-aos-delay={500}>
                                <div className="metric-icon">
                                    <i className="bi bi-people" />
                                </div>
                                <div className="metric-value">
                                    <span data-purecounter-start={0} data-purecounter-end={950} data-purecounter-duration={2} className="purecounter" />+
                                </div>
                                <div className="metric-label">Happy Clients</div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-6">
                                <div className="metric-item" data-aos="zoom-in" data-aos-delay={550}>
                                <div className="metric-icon">
                                    <i className="bi bi-calendar-check" />
                                </div>
                                <div className="metric-value">
                                    <span data-purecounter-start={0} data-purecounter-end={16} data-purecounter-duration={2} className="purecounter" />
                                </div>
                                <div className="metric-label">Years in Business</div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-6">
                                <div className="metric-item" data-aos="zoom-in" data-aos-delay={600}>
                                <div className="metric-icon">
                                    <i className="bi bi-star-fill" />
                                </div>
                                <div className="metric-value">4.9</div>
                                <div className="metric-label">Average Rating</div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div> */}
                    {/* End Metrics Section */}
                    {/* <div className="testimonial-highlight" data-aos="fade-up" data-aos-delay={450}>
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                        <div className="testimonial-card">
                            <div className="quote-icon">
                            <i className="bi bi-chat-quote" />
                            </div>
                            <blockquote>
                            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet consectetur adipisci velit sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
                            </blockquote>
                            <div className="testimonial-author">
                            <div className="author-image">
                                <img src="assets/img/person/person-f-8.webp" alt="Client" className="img-fluid" />
                            </div>
                            <div className="author-info">
                                <h5>Jennifer Rodriguez</h5>
                                <span>Property Investor</span>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div> */}
                    {/* End Testimonial Highlight */}
                    {/* <div className="cta-section" data-aos="fade-up" data-aos-delay={500}>
                    <div className="row justify-content-center text-center">
                        <div className="col-lg-8">
                        <h3>Ready to Find Your Dream Property?</h3>
                        <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.</p>
                        <div className="action-buttons">
                            <a href="contact.html" className="btn btn-primary">Get Started Today</a>
                            <a href="properties.html" className="btn btn-secondary">Browse Properties</a>
                        </div>
                        </div>
                    </div>
                    </div> */}
                    {/* End CTA Section */}
                </div>
            </section>

        </>
     );
}

export default StepsSection;
