function Contact() {
    return ( 
        <>
            <section id="contact-2" className="contact-2 section">
                {/* Section Carte */}
                <div className="map-container mb-5">
                    <iframe 
                        src="https://maps.app.goo.gl/tfCxjetUb6fbk7xQ7" 
                        width="100%" 
                        height={500} 
                        style={{border: 0}} 
                        allowFullScreen 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade" 
                    />
                </div>

                <div className="container" data-aos="fade-up" data-aos-delay={100}>
                    {/* Infos de Contact */}
                    <div className="row g-4 mb-5" data-aos="fade-up" data-aos-delay={300}>
                        <div className="col-md-6">
                            <div className="contact-info-card">
                                <div className="icon-box">
                                    <i className="bi bi-geo-alt" />
                                </div>
                                <div className="info-content">
                                    <h4>Adresse</h4>
                                    <p>App 6, 3ème étage, Imm FM16, Agadir 80000</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="contact-info-card">
                                <div className="icon-box">
                                    <i className="bi bi-telephone" />
                                </div>
                                <div className="info-content">
                                    <h4>Téléphone</h4>
                                    <p>+212663-039059</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Formulaire de Contact */}
                    <div className="row justify-content-center mb-5" data-aos="fade-up" data-aos-delay={200}>
                        <div className="col-lg-10">
                            <div className="contact-form-wrapper">
                                <h2 className="text-center mb-4">Envoyer un message</h2>
                                <form action="forms/contact.php" method="post" className="php-email-form">
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="name" placeholder="Votre nom" required />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input type="email" className="form-control" name="email" placeholder="Adresse e-mail" required />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="subject" placeholder="Sujet" required />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group">
                                                <textarea className="form-control" name="message" placeholder="Votre message" rows={6} required defaultValue={""} />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="loading">Chargement...</div>
                                            <div className="error-message" />
                                            <div className="sent-message">Votre message a été envoyé. Merci !</div>
                                        </div>
                                        <div className="col-12 text-center">
                                            <button type="submit" className="btn-submit">ENVOYER</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Contact;
