import React, { useState } from "react";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";
import { API_CONFIG, getApiUrl } from "../../config/api";

function NewsletterSection() {

    const [email, setEmail] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const validateEmail = (email) => {
        const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return pattern.test(email);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validation
        if (email.trim() === "") {
            setErrorMessage("Ce champ est requis");
            setError(true);
            setSuccess(false);
            setTimeout(() => setError(false), 3000);
            return;
        }

        if (!validateEmail(email)) {
            setErrorMessage("Format d'email invalide");
            setError(true);
            setSuccess(false);
            setTimeout(() => setError(false), 3000);
            return;
        }

        setIsSubmitting(true);
        setError(false);
        setSuccess(false);

        try {
            const response = await fetch(getApiUrl(API_CONFIG.ENDPOINTS.NEWSLETTER), {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: email.trim(),
                }),
            });

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}));
                throw new Error(errorData.error || `Erreur ${response.status}: ${response.statusText}`);
            }

            const data = await response.json();
            console.log("✅ Newsletter subscription successful:", data);

            // Success
            setSuccess(true);
            setError(false);
            setEmail("");
            // Modal will close on click or after 8 seconds
            setTimeout(() => setSuccess(false), 8000);
        } catch (error) {
            console.error("❌ Erreur lors de l'abonnement:", error);
            setErrorMessage(
                error.message || "Une erreur est survenue. Veuillez réessayer plus tard."
            );
            setError(true);
            setSuccess(false);
            setTimeout(() => setError(false), 5000);
        } finally {
            setIsSubmitting(false);
        }
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

                            {error && (
                                <div className="alert error">
                                    <span className="cross-icon">
                                        <i className="fa-solid fa-2xl fa-xmark"></i>
                                    </span>
                                    <p className="text-center">{errorMessage || "Une erreur est survenue."}</p>
                                </div>
                            )}

                            {/* Success Modal */}
                            {success && (
                                <div className="newsletter-success-modal-overlay" onClick={() => setSuccess(false)}>
                                    <div className="newsletter-success-modal" onClick={(e) => e.stopPropagation()}>
                                        <div className="newsletter-success-modal-content">
                                            <div className="newsletter-success-icon-wrapper">
                                                <div className="newsletter-success-icon-circle">
                                                    <i className="fa-solid fa-check"></i>
                                                </div>
                                                <div className="newsletter-success-icon-checkmark"></div>
                                            </div>
                                            <h3 className="newsletter-success-title">Abonnement Réussi !</h3>
                                            <p className="newsletter-success-message">
                                                Merci ! Vous êtes maintenant abonné à notre newsletter.
                                            </p>
                                            <p className="newsletter-success-submessage">
                                                Vous recevrez bientôt nos dernières actualités et conseils exclusifs.
                                            </p>
                                            <button
                                                className="newsletter-success-close-btn"
                                                onClick={() => setSuccess(false)}
                                            >
                                                <span>Fermer</span>
                                                <i className="fa-solid fa-times"></i>
                                            </button>
                                        </div>
                                    </div>
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
                                    <button
                                        className="btn btn-accent"
                                        type="submit"
                                        disabled={isSubmitting}
                                    >
                                        <span className="btn-title">
                                            <span>
                                                {isSubmitting ? "Abonnement en cours..." : "S'abonner"}
                                            </span>
                                        </span>
                                        <span className="icon-circle">
                                            <i className={`fa-solid ${isSubmitting ? "fa-spinner fa-spin" : "fa-arrow-right"}`}></i>
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