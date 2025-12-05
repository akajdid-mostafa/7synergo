import React from "react";
import ContactForm from "../Form/ContactForm";

const ContactSection = () => {
  return (
    <div className="section">
        <div className="hero-container">
            <div className="row row-cols-lg-2 row-cols-1 g-5">
                <div className="col col-lg-5">
                    <div className="contact-title-wrapper">
                        <div className="card contact-title">
                            <div className="sub-heading">
                                <i className="fa-regular fa-circle-dot"></i>
                                <span>Contactez-nous</span>
                            </div>
                            <h2 className="title-heading">Prenons Contact</h2>
                            <p>
                            Contactez-nous pour des solutions holistiques et personnalisées qui assurent votre progrès durable Corps-Esprit.
                            </p>
                            <div className="d-flex flex-column flex-md-row align-items-center text-md-start text-center gspace-2">
                                <div>
                                    <div className="icon-wrapper">
                                        <div className="icon-box">
                                            <i className="fa-solid fa-phone-volume accent-color"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-grid">
                                    <span>Numéro de Téléphone</span>
                                    <h6>+212 6 97 23 23 48</h6>
                                </div>
                            </div>
                            <div className="d-flex flex-column flex-md-row align-items-center text-md-start text-center gspace-2">
                                <div>
                                    <div className="icon-wrapper">
                                        <div className="icon-box">
                                            <i className="fa-solid fa-envelope accent-color"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-grid">
                                    <span>Adresse Email</span>
                                    <h6>7services.contact@gmail.com</h6>
                                </div>
                            </div>
                            <div className="d-flex flex-column flex-md-row align-items-center text-md-start text-center gspace-2">
                                <div>
                                    <div className="icon-wrapper">
                                        <div className="icon-box">
                                            <i className="fa-solid fa-location-dot accent-color"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-grid">
                                    <span>Adresse de l'Office</span>
                                    <h6>casablanca, maroc</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col col-lg-7">
                    <div id="success-message" className="alert success hidden">
                        <span className="check-icon">
                            <i className="fa-solid fa-2xl fa-check"></i>
                        </span>
                        <p>Merci ! Votre formulaire a été envoyé avec succès.</p>
                    </div>
                    <div id="error-message" className="alert error hidden">
                        <span className="cross-icon">
                            <i className="fa-solid fa-2xl fa-xmark"></i>
                        </span>
                        <p>Oops! Votre formulaire n'a pas été envoyé. Veuillez réessayer.</p>
                    </div>
                    <ContactForm />
                </div>
            </div>
        </div>
    </div>
  );
};

export default ContactSection;
