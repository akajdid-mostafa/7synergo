import React, { useState } from "react";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";

function NewsletterSection() {

    const [email, setEmail] = useState("");
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const validateEmail = (email) => {
        const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return pattern.test(email);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (email.trim() === "") {
            setErrorMessage("This field is required");
            setError(true);
            setSuccess(false);
            return;
        }

        if (!validateEmail(email)) {
            setErrorMessage("Invalid email format");
            setError(true);
            setSuccess(false);
            return;
        }

        setSuccess(true);
        setError(false);
        setEmail("");

        setTimeout(() => setSuccess(false), 3000);
    };

    return (
        <div className="section">
            <div className="hero-container">
                <div className="newsletter-wrapper">
                    <div className="newsletter-layout">
                        <div className="spacer"></div>
                        <div className="d-flex flex-column gspace-5 position-relative z-2">
                            <AnimateOnScroll animation="fadeInLeft" speed="normal">
                                <div className="d-flex flex-column gspace-2">
                                    <h3 className="title-heading">Gardez une Longueur d'Avance sur Votre Équilibre</h3>
                                    <p>
                                    Recevez des conseils exclusifs, des stratégies de résilience et des outils pour l'équilibre Corps-Esprit. Abonnez-vous !
                                    </p>
                                </div>
                            </AnimateOnScroll>

                            {success && (
                                <div className="alert success">
                                    <span className="check-icon">
                                        <i className="fa-solid fa-2xl fa-check"></i>
                                    </span>
                                    <p className="text-center">Merci ! Votre formulaire a été envoyé avec succès.</p>
                                </div>
                            )}

                            {error && (
                                <div className="alert error">
                                    <span className="cross-icon">
                                        <i className="fa-solid fa-2xl fa-xmark"></i>
                                    </span>
                                    <p className="text-center">{errorMessage}</p>
                                </div>
                            )}

                            <AnimateOnScroll animation="fadeInRight" speed="normal">
                                <form
                                    id="newsletterForm"
                                    onSubmit={handleSubmit}
                                    className="needs-validation"
                                    noValidate
                                >
                                    <div className="input-container">
                                        <input
                                            type="email"
                                            name="newsletter-email"
                                            id="newsletter-email"
                                            placeholder="Entrez votre meilleur email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className={error ? "error-border" : ""}
                                            required
                                        />
                                        {error && (
                                            <div className="error-text">{errorMessage}</div>
                                        )}
                                    </div>
                                    <button className="btn btn-accent" type="submit">
                                        <span className="btn-title">
                                            <span>S'abonner</span>
                                        </span>
                                        <span className="icon-circle">
                                            <i className="fa-solid fa-arrow-right"></i>
                                        </span>
                                    </button>
                                </form>
                            </AnimateOnScroll>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewsletterSection;