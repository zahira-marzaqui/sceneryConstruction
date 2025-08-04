function Contact() {
    return ( 
        <>
            <section id="contact-2" className="contact-2 section">
                    {/* Map Section */}
                    <div className="map-container mb-5">
                        <iframe src="https://maps.app.goo.gl/tfCxjetUb6fbk7xQ7" width="100%" height={500} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                    </div>
                    <div className="container" data-aos="fade-up" data-aos-delay={100}>
                        {/* Contact Info */}
                        <div className="row g-4 mb-5" data-aos="fade-up" data-aos-delay={300}>
                        <div className="col-md-6">
                            <div className="contact-info-card">
                            <div className="icon-box">
                                <i className="bi bi-geo-alt" />
                            </div>
                            <div className="info-content">
                                <h4>Location</h4>
                                <p>482 Pine Street, Seattle, Washington 98101</p>
                            </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="contact-info-card">
                            <div className="icon-box">
                                <i className="bi bi-telephone" />
                            </div>
                            <div className="info-content">
                                <h4>Phone &amp; Email</h4>
                                <p>+1 (206) 555-0192</p>
                                <p>connect@example.com</p>
                            </div>
                            </div>
                        </div>
                        </div>
                        {/* Contact Form */}
                        <div className="row justify-content-center mb-5" data-aos="fade-up" data-aos-delay={200}>
                        <div className="col-lg-10">
                            <div className="contact-form-wrapper">
                            <h2 className="text-center mb-4">Send a Message</h2>
                            <form action="forms/contact.php" method="post" className="php-email-form">
                                <div className="row g-3">
                                <div className="col-md-6">
                                    <div className="form-group">
                                    <input type="text" className="form-control" name="name" placeholder="Your Name" required />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                    <input type="email" className="form-control" name="email" placeholder="Email Address" required />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-group">
                                    <input type="text" className="form-control" name="subject" placeholder="Subject" required />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-group">
                                    <textarea className="form-control" name="message" placeholder="Your Message" rows={6} required defaultValue={""} />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="loading">Loading</div>
                                    <div className="error-message" />
                                    <div className="sent-message">Your message has been sent. Thank you!</div>
                                </div>
                                <div className="col-12 text-center">
                                    <button type="submit" className="btn-submit">SEND MESSAGE</button>
                                </div>
                                </div>
                            </form>
                            </div>
                        </div>
                        </div>
                    </div>
            </section>{/* /Contact 2 Section */}

        </>
     );
}

export default Contact;