import React, { useState } from "react";
import axios from "axios";

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Envoi en cours...");

        try {
            const response = await axios.post("http://localhost:5000/api/contact", formData);
            if (response.data.success) {
                setStatus("✅ Votre message a été envoyé avec succès !");
                setFormData({ name: "", email: "", subject: "", message: "" });
            } else {
                setStatus("❌ Une erreur est survenue. Réessayez.");
            }
        } catch (error) {
            setStatus("❌ Erreur serveur. Réessayez plus tard.");
        }
    };

    return ( 
        <>
            <section id="contact-2" className="contact-2 section">
                {/* Section Carte */}
                <div className="map-container mb-5">
                    {/* <iframe 
                        src="https://maps.app.goo.gl/tfCxjetUb6fbk7xQ7" 
                        width="100%" 
                        height={500} 
                        style={{border: 0}} 
                        allowFullScreen 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade" 
                    /> */}
                    {/* <iframe
                        src="https://www.openstreetmap.org/export/embed.html?bbox=-9.625%2C30.39%2C-9.53%2C30.46&layer=mapnik&marker=30.42%2C-9.58"
                        width="100%"
                        height="500"
                        style={{ border: 0 }}
                        /> */}

                       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3440.8266008317923!2d-9.557135226158312!3d30.412661201034062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdb3b7b4151b5a03%3A0x7b1f0b101eda403f!2sSCENERY%20construction%20-%20R%C3%A9novation%20Habitat%20Agadir!5e0!3m2!1sfr!2sus!4v1755795097267!5m2!1sfr!2sus"
                        width="100%" 
                        height={500} 
                        style={{border: 0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> 
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
                                <form onSubmit={handleSubmit} className="php-email-form">
                                    <div className="row g-3">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="name" placeholder="Votre nom" value={formData.name} onChange={handleChange} required />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input type="email" className="form-control" name="email" placeholder="Adresse e-mail" value={formData.email} onChange={handleChange} required />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group">
                                                <input type="text" className="form-control" name="subject" placeholder="Sujet" value={formData.subject} onChange={handleChange} required />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group">
                                                <textarea className="form-control" name="message" placeholder="Votre message" value={formData.message} onChange={handleChange} rows={6} required />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="loading">Chargement...</div>
                                            <div className="error-message" />
                                            <div className="sent-message">Votre message a été envoyé. Merci !</div>
                                        </div>
                                        <div className="col-12 text-center">
                                            <button type="submit" className="btn-submit">ENVOYER</button>
                                            <p className="mt-3">{status}</p>
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
