import React, { useState } from "react";
import { API_CONFIG, getApiUrl } from "../../config/api";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    number: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessageVisible, setSuccessMessageVisible] = useState(false);
  const [errorMessageVisible, setErrorMessageVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const validateEmail = (email) => {
    const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return pattern.test(email);
  };

  const validatePhone = (phone) => {
    // Remove spaces, dashes, and parentheses for validation
    const cleaned = phone.replace(/[\s\-()]/g, "");
    // Check if it contains only digits and has at least 8 digits
    return /^[0-9]{8,15}$/.test(cleaned);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!formData.nom.trim()) {
      setErrorMessage("Veuillez entrer votre nom.");
      setErrorMessageVisible(true);
      setSuccessMessageVisible(false);
      setTimeout(() => setErrorMessageVisible(false), 3000);
      return;
    }

    if (!formData.prenom.trim()) {
      setErrorMessage("Veuillez entrer votre prénom.");
      setErrorMessageVisible(true);
      setSuccessMessageVisible(false);
      setTimeout(() => setErrorMessageVisible(false), 3000);
      return;
    }

    if (!validateEmail(formData.email)) {
      setErrorMessage("Veuillez entrer une adresse email valide.");
      setErrorMessageVisible(true);
      setSuccessMessageVisible(false);
      setTimeout(() => setErrorMessageVisible(false), 3000);
      return;
    }

    if (!formData.number.trim()) {
      setErrorMessage("Veuillez entrer votre numéro de téléphone.");
      setErrorMessageVisible(true);
      setSuccessMessageVisible(false);
      setTimeout(() => setErrorMessageVisible(false), 3000);
      return;
    }

    if (!validatePhone(formData.number)) {
      setErrorMessage("Veuillez entrer un numéro de téléphone valide.");
      setErrorMessageVisible(true);
      setSuccessMessageVisible(false);
      setTimeout(() => setErrorMessageVisible(false), 3000);
      return;
    }

    if (!formData.message.trim()) {
      setErrorMessage("Veuillez entrer votre message.");
      setErrorMessageVisible(true);
      setSuccessMessageVisible(false);
      setTimeout(() => setErrorMessageVisible(false), 3000);
      return;
    }

    setIsSubmitting(true);
    setErrorMessageVisible(false);
    setSuccessMessageVisible(false);

    try {
      const response = await fetch(getApiUrl(API_CONFIG.ENDPOINTS.CONTACT), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nom: formData.nom.trim(),
          prenom: formData.prenom.trim(),
          email: formData.email.trim(),
          number: formData.number.trim(),
          message: formData.message.trim(),
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || `Erreur ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();
      console.log("✅ Contact form submitted successfully:", data);

      // Success
      setSuccessMessageVisible(true);
      setErrorMessageVisible(false);
      setFormData({
        nom: "",
        prenom: "",
        email: "",
        number: "",
        message: "",
      });
      setTimeout(() => setSuccessMessageVisible(false), 8000);
    } catch (error) {
      console.error("❌ Erreur lors de la soumission:", error);
      setErrorMessage(
        error.message || "Une erreur est survenue. Veuillez réessayer plus tard."
      );
      setErrorMessageVisible(true);
      setSuccessMessageVisible(false);
      setTimeout(() => setErrorMessageVisible(false), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="form-layout-wrapper">
        <div className="card form-layout">
            <h3 className="title-heading">Discutons de Votre Équilibre</h3>

            {errorMessageVisible && (
            <div id="error-message" className="alert error">
                <span className="cross-icon">
                <i className="fa-solid fa-xmark"></i>
                </span>
                <p className="text-center">{errorMessage || "Oops! Une erreur est survenue."}</p>
            </div>
            )}

            {/* Success Modal */}
            {successMessageVisible && (
                <div className="newsletter-success-modal-overlay" onClick={() => setSuccessMessageVisible(false)}>
                    <div className="newsletter-success-modal" onClick={(e) => e.stopPropagation()}>
                        <div className="newsletter-success-modal-content">
                            <div className="newsletter-success-icon-wrapper">
                                <div className="newsletter-success-icon-circle">
                                    <i className="fa-solid fa-check"></i>
                                </div>
                                <div className="newsletter-success-icon-checkmark"></div>
                            </div>
                            <h3 className="newsletter-success-title">Message Envoyé !</h3>
                            <p className="newsletter-success-message">
                                Merci ! Votre message a été envoyé avec succès.
                            </p>
                            <p className="newsletter-success-submessage">
                                Nous vous répondrons dans les plus brefs délais.
                            </p>
                            <button
                                className="newsletter-success-close-btn"
                                onClick={() => setSuccessMessageVisible(false)}
                            >
                                <span>Fermer</span>
                                <i className="fa-solid fa-times"></i>
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <form
            onSubmit={handleSubmit}
            id="contactForm"
            className="form needs-validation"
            >
                <div className="row row-cols-md-2 row-cols-1 g-3">
                    <div className="col">
                        <input
                            type="text"
                            name="nom"
                            id="nom"
                            placeholder="Nom"
                            value={formData.nom}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="col">
                        <input
                            type="text"
                            name="prenom"
                            id="prenom"
                            placeholder="Prénom"
                            value={formData.prenom}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>

                <div className="row row-cols-md-2 row-cols-1 g-3">
                        <div className="col">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Adresse Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="col">
                            <input
                                type="tel"
                                name="number"
                                id="number"
                                placeholder="Numéro de téléphone"
                                value={formData.number}
                                onChange={handleChange}
                                required
                            />
                        </div>
                </div>

                <textarea
                    name="message"
                    id="message"
                    rows="5"
                    placeholder="Votre Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                ></textarea>

                <div className="form-button-container">
                        <button
                            type="submit"
                            className="btn btn-accent"
                            disabled={isSubmitting}
                        >
                            <span className="btn-title">
                                <span>
                                    {isSubmitting ? "Envoi en cours..." : "Envoyer un Message"}
                                </span>
                            </span>
                            <span className="icon-circle">
                                <i className={`fa-solid ${isSubmitting ? "fa-spinner fa-spin" : "fa-arrow-right"}`}></i>
                            </span>
                        </button>
                </div>
            </form>
        </div>
    </div>
  );
};

export default ContactForm;
