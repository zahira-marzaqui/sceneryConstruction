import Form from "./Form";

function FormPartenaire() {
    return ( 
        <>
            <div className="ProjetFormWrapper">
                <div className="ProjetForm container d-flex justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
                    <div className="col-lg-6">
                    <div className="hero-visual" data-aos="fade-left" data-aos-delay={400}>
                        <div className="visual-container">
                        <div className="featured-property">
                            <div className="search-container" data-aos="fade-up" data-aos-delay={300}>
                            <div className="search-header">
                                <h3>
                                    Devenir partenaire
                                </h3>
                            </div>

                            <div className="property-search-form">
                                <Form></Form>

                                <button
                                type="button"
                                className="search-btn"
                                
                                >
                              <span>
                                  Envoyer
                                </span>
                                </button>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </>
     );
}

export default FormPartenaire;