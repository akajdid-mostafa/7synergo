import React, { useState } from "react";
import { getApiUrl, API_CONFIG } from "../../config/api";

const InscriptionForm = () => {
  const [formData, setFormData] = useState({
    // Section I: Informations Personnelles
    nomPrenom: "",
    dateNaissance: "",
    email: "",
    telephone: "",
    profession: "",
    contactUrgenceNom: "",
    contactUrgenceLien: "",
    contactUrgenceTel: "",

    // Section II: Santé et Antécédents Médicaux
    autorisationMedicale: "",
    autorisationMedicaleDetails: "",
    problemesSante: "",
    problemesSanteDetails: "",
    medicaments: "",
    medicamentsDetails: "",
    blessuresChroniques: "",
    blessuresChroniquesDetails: "",
    allergies: "",
    allergiesDetails: "",
    enceinteAllaitement: "",
    niveauEnergie: "5",

    // Section III: Objectifs Physiques et Habitudes
    objectifPrincipal: "",
    objectifPrincipalDelai: "",
    objectifSecondaire1: "",
    objectifSecondaire1Delai: "",
    objectifSecondaire2: "",
    objectifSecondaire2Delai: "",
    niveauActivite: "",
    frequenceSport: "",
    activitesPhysiques: "",
    motivation: "",
    obstacles: "",
    habitudesAlimentaires: "",

    // Section IV: Préparation Psychologique et Mentale
    attentesPsychologie: "",
    relationCorps: "",
    difficultesMotivation: "",
    facteurStress: "",
    pourquoiProfond: "",
    gestionEchec: "",

    // Section V: Engagements
    dateSignature: "",
    signature: false,
  });

  const [currentSection, setCurrentSection] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validateSection = (section) => {
    switch (section) {
      case 1:
        return (
          formData.nomPrenom &&
          formData.dateNaissance &&
          formData.email &&
          formData.telephone
        );
      case 2:
        return formData.autorisationMedicale !== "";
      case 3:
        return formData.objectifPrincipal && formData.niveauActivite;
      case 4:
        return formData.attentesPsychologie && formData.pourquoiProfond;
      default:
        return true;
    }
  };

  const nextSection = () => {
    if (validateSection(currentSection)) {
      setCurrentSection((prev) => Math.min(prev + 1, 5));
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      setErrorMessage("Veuillez remplir tous les champs obligatoires de cette section.");
      setTimeout(() => setErrorMessage(""), 3000);
    }
  };

  const prevSection = () => {
    setCurrentSection((prev) => Math.max(prev - 1, 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.signature) {
      setErrorMessage("Veuillez accepter les conditions pour continuer.");
      setTimeout(() => setErrorMessage(""), 3000);
      return;
    }

    setIsSubmitting(true);
    setErrorMessage("");

    // Préparer les données avec la date de signature
    const submissionData = {
      ...formData,
      dateSignature: new Date().toISOString(),
    };

    // Afficher toutes les données dans la console pour test
    console.log("========================================");
    console.log("📋 DONNÉES DU FORMULAIRE D'INSCRIPTION");
    console.log("========================================");
    console.log("Données complètes:", submissionData);
    console.log("----------------------------------------");
    console.log("Section I - Informations Personnelles:");
    console.log("- Nom et Prénom:", submissionData.nomPrenom);
    console.log("- Date de Naissance:", submissionData.dateNaissance);
    console.log("- Email:", submissionData.email);
    console.log("- Téléphone:", submissionData.telephone);
    console.log("- Profession:", submissionData.profession);
    console.log("- Contact Urgence:", submissionData.contactUrgenceNom, submissionData.contactUrgenceLien, submissionData.contactUrgenceTel);
    console.log("----------------------------------------");
    console.log("Section II - Santé et Antécédents:");
    console.log("- Autorisation Médicale:", submissionData.autorisationMedicale);
    console.log("- Problèmes de Santé:", submissionData.problemesSante, submissionData.problemesSanteDetails);
    console.log("- Médicaments:", submissionData.medicaments, submissionData.medicamentsDetails);
    console.log("- Blessures Chroniques:", submissionData.blessuresChroniques, submissionData.blessuresChroniquesDetails);
    console.log("- Allergies:", submissionData.allergies, submissionData.allergiesDetails);
    console.log("- Enceinte/Allaitement:", submissionData.enceinteAllaitement);
    console.log("- Niveau d'Énergie:", submissionData.niveauEnergie);
    console.log("----------------------------------------");
    console.log("Section III - Objectifs et Habitudes:");
    console.log("- Objectif Principal:", submissionData.objectifPrincipal, "| Délai:", submissionData.objectifPrincipalDelai);
    console.log("- Objectif Secondaire 1:", submissionData.objectifSecondaire1, "| Délai:", submissionData.objectifSecondaire1Delai);
    console.log("- Objectif Secondaire 2:", submissionData.objectifSecondaire2, "| Délai:", submissionData.objectifSecondaire2Delai);
    console.log("- Niveau d'Activité:", submissionData.niveauActivite);
    console.log("- Fréquence Sport:", submissionData.frequenceSport);
    console.log("- Activités Physiques:", submissionData.activitesPhysiques);
    console.log("- Motivation:", submissionData.motivation);
    console.log("- Obstacles:", submissionData.obstacles);
    console.log("- Habitudes Alimentaires:", submissionData.habitudesAlimentaires);
    console.log("----------------------------------------");
    console.log("Section IV - Préparation Psychologique:");
    console.log("- Attentes Psychologie:", submissionData.attentesPsychologie);
    console.log("- Relation avec le Corps:", submissionData.relationCorps);
    console.log("- Difficultés Motivation:", submissionData.difficultesMotivation);
    console.log("- Facteur de Stress:", submissionData.facteurStress);
    console.log("- Pourquoi Profond:", submissionData.pourquoiProfond);
    console.log("- Gestion de l'Échec:", submissionData.gestionEchec);
    console.log("----------------------------------------");
    console.log("Section V - Engagements:");
    console.log("- Signature Acceptée:", submissionData.signature);
    console.log("- Date de Signature:", submissionData.dateSignature);
    console.log("========================================");
    console.log("📤 Envoi des données à l'API...");
    console.log("========================================");

    try {
      const response = await fetch(getApiUrl(API_CONFIG.ENDPOINTS.INSCRIPTION), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submissionData),
      });

      if (response.ok) {
        const responseData = await response.json().catch(() => ({}));
        console.log("✅ Réponse de l'API (succès):", responseData);
        console.log("Status:", response.status);
        setSuccessMessage(true);
        // Réinitialiser le formulaire après 3 secondes
        setTimeout(() => {
          setFormData({
            nomPrenom: "",
            dateNaissance: "",
            email: "",
            telephone: "",
            profession: "",
            contactUrgenceNom: "",
            contactUrgenceLien: "",
            contactUrgenceTel: "",
            autorisationMedicale: "",
            autorisationMedicaleDetails: "",
            problemesSante: "",
            problemesSanteDetails: "",
            medicaments: "",
            medicamentsDetails: "",
            blessuresChroniques: "",
            blessuresChroniquesDetails: "",
            allergies: "",
            allergiesDetails: "",
            enceinteAllaitement: "",
            niveauEnergie: "5",
            objectifPrincipal: "",
            objectifPrincipalDelai: "",
            objectifSecondaire1: "",
            objectifSecondaire1Delai: "",
            objectifSecondaire2: "",
            objectifSecondaire2Delai: "",
            niveauActivite: "",
            frequenceSport: "",
            activitesPhysiques: "",
            motivation: "",
            obstacles: "",
            habitudesAlimentaires: "",
            attentesPsychologie: "",
            relationCorps: "",
            difficultesMotivation: "",
            facteurStress: "",
            pourquoiProfond: "",
            gestionEchec: "",
            dateSignature: "",
            signature: false,
          });
          setCurrentSection(1);
          setSuccessMessage(false);
        }, 3000);
      } else {
        const errorData = await response.json().catch(() => ({}));
        console.error("❌ Erreur API - Status:", response.status);
        console.error("❌ Réponse d'erreur:", errorData);
        throw new Error("Erreur lors de l'envoi du formulaire");
      }
    } catch (error) {
      console.error("❌ Erreur lors de la soumission:", error);
      console.log("ℹ️ Note: Les données ont été affichées dans la console ci-dessus pour test.");
      setErrorMessage("Une erreur est survenue. Veuillez réessayer plus tard.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="form-layout-wrapper">
      <div className="card form-layout">
        <h3 className="title-heading">Fiche d'Initiation et de Suivi - Programme de Transformation Physique 7Synergo</h3>
        <p className="text-center" style={{ marginBottom: "30px" }}>
          Bienvenue ! Cette fiche est essentielle pour nous permettre de personnaliser votre Programme de Transformation Physique et d'assurer un suivi optimal.
        </p>

        {/* Progress Bar */}
        <div style={{ marginBottom: "30px" }}>
          <div style={{ 
            display: "flex", 
            justifyContent: "space-between", 
            marginBottom: "10px",
            fontSize: "14px",
            color: "var(--text-color)"
          }}>
            <span>Section {currentSection} sur 5</span>
            <span>{Math.round((currentSection / 5) * 100)}%</span>
          </div>
          <div style={{
            width: "100%",
            height: "8px",
            backgroundColor: "var(--accent-color-3)",
            borderRadius: "4px",
            overflow: "hidden"
          }}>
            <div style={{
              width: `${(currentSection / 5) * 100}%`,
              height: "100%",
              backgroundColor: "var(--accent-color)",
              transition: "width 0.3s ease"
            }}></div>
          </div>
        </div>

        {successMessage && (
          <div className="alert success" style={{ marginBottom: "20px" }}>
            <span className="check-icon">
              <i className="fa-solid fa-check"></i>
            </span>
            <p className="text-center">Merci ! Votre formulaire a été envoyé avec succès.</p>
          </div>
        )}

        {errorMessage && (
          <div className="alert error" style={{ marginBottom: "20px" }}>
            <span className="cross-icon">
              <i className="fa-solid fa-xmark"></i>
            </span>
            <p className="text-center">{errorMessage}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="form needs-validation">
          {/* Section I: Informations Personnelles */}
          {currentSection === 1 && (
            <div className="form-section">
              <h4 className="accent-color" style={{ marginBottom: "20px" }}>
                I. Informations Personnelles
              </h4>
              
              <div className="row row-cols-md-2 row-cols-1 g-3">
                <div className="col">
                  <input
                    type="text"
                    name="nomPrenom"
                    placeholder="Nom et Prénom *"
                    value={formData.nomPrenom}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col">
                  <input
                    type="date"
                    name="dateNaissance"
                    placeholder="Date de Naissance *"
                    value={formData.dateNaissance}
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
                    placeholder="Adresse E-mail *"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col">
                  <input
                    type="tel"
                    name="telephone"
                    placeholder="Téléphone *"
                    value={formData.telephone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <input
                type="text"
                name="profession"
                placeholder="Profession"
                value={formData.profession}
                onChange={handleChange}
              />

              <h5 style={{ marginTop: "20px", marginBottom: "15px" }}>
                Personne à contacter en cas d'urgence
              </h5>

              <div className="row row-cols-md-3 row-cols-1 g-3">
                <div className="col">
                  <input
                    type="text"
                    name="contactUrgenceNom"
                    placeholder="Nom"
                    value={formData.contactUrgenceNom}
                    onChange={handleChange}
                  />
                </div>
                <div className="col">
                  <input
                    type="text"
                    name="contactUrgenceLien"
                    placeholder="Lien (ex: Conjoint, Parent)"
                    value={formData.contactUrgenceLien}
                    onChange={handleChange}
                  />
                </div>
                <div className="col">
                  <input
                    type="tel"
                    name="contactUrgenceTel"
                    placeholder="Téléphone"
                    value={formData.contactUrgenceTel}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Section II: Santé et Antécédents Médicaux */}
          {currentSection === 2 && (
            <div className="form-section">
              <h4 className="accent-color" style={{ marginBottom: "20px" }}>
                II. Santé et Antécédents Médicaux
              </h4>

              <div className="form-group" style={{ marginBottom: "20px" }}>
                <label style={{ marginBottom: "10px", display: "block" }}>
                  Avez-vous une autorisation médicale pour la pratique sportive ? *
                </label>
                <div style={{ display: "flex", gap: "20px" }}>
                  <label style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer" }}>
                    <input
                      type="radio"
                      name="autorisationMedicale"
                      value="oui"
                      checked={formData.autorisationMedicale === "oui"}
                      onChange={handleChange}
                      required
                    />
                    <span>Oui</span>
                  </label>
                  <label style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer" }}>
                    <input
                      type="radio"
                      name="autorisationMedicale"
                      value="non"
                      checked={formData.autorisationMedicale === "non"}
                      onChange={handleChange}
                      required
                    />
                    <span>Non</span>
                  </label>
                </div>
                {formData.autorisationMedicale === "oui" && (
                  <textarea
                    name="autorisationMedicaleDetails"
                    placeholder="Détails (si Oui)"
                    rows="3"
                    value={formData.autorisationMedicaleDetails}
                    onChange={handleChange}
                    style={{ marginTop: "10px" }}
                  />
                )}
              </div>

              <div className="form-group" style={{ marginBottom: "20px" }}>
                <label style={{ marginBottom: "10px", display: "block" }}>
                  Souffrez-vous de problèmes cardiaques, respiratoires ou articulaires ?
                </label>
                <div style={{ display: "flex", gap: "20px" }}>
                  <label style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer" }}>
                    <input
                      type="radio"
                      name="problemesSante"
                      value="oui"
                      checked={formData.problemesSante === "oui"}
                      onChange={handleChange}
                    />
                    <span>Oui</span>
                  </label>
                  <label style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer" }}>
                    <input
                      type="radio"
                      name="problemesSante"
                      value="non"
                      checked={formData.problemesSante === "non"}
                      onChange={handleChange}
                    />
                    <span>Non</span>
                  </label>
                </div>
                {formData.problemesSante === "oui" && (
                  <textarea
                    name="problemesSanteDetails"
                    placeholder="Détails (si Oui)"
                    rows="3"
                    value={formData.problemesSanteDetails}
                    onChange={handleChange}
                    style={{ marginTop: "10px" }}
                  />
                )}
              </div>

              <div className="form-group" style={{ marginBottom: "20px" }}>
                <label style={{ marginBottom: "10px", display: "block" }}>
                  Prenez-vous actuellement des médicaments ?
                </label>
                <div style={{ display: "flex", gap: "20px" }}>
                  <label style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer" }}>
                    <input
                      type="radio"
                      name="medicaments"
                      value="oui"
                      checked={formData.medicaments === "oui"}
                      onChange={handleChange}
                    />
                    <span>Oui</span>
                  </label>
                  <label style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer" }}>
                    <input
                      type="radio"
                      name="medicaments"
                      value="non"
                      checked={formData.medicaments === "non"}
                      onChange={handleChange}
                    />
                    <span>Non</span>
                  </label>
                </div>
                {formData.medicaments === "oui" && (
                  <textarea
                    name="medicamentsDetails"
                    placeholder="Détails (si Oui)"
                    rows="3"
                    value={formData.medicamentsDetails}
                    onChange={handleChange}
                    style={{ marginTop: "10px" }}
                  />
                )}
              </div>

              <div className="form-group" style={{ marginBottom: "20px" }}>
                <label style={{ marginBottom: "10px", display: "block" }}>
                  Avez-vous des blessures ou douleurs chroniques (dos, genoux, etc.) ?
                </label>
                <div style={{ display: "flex", gap: "20px" }}>
                  <label style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer" }}>
                    <input
                      type="radio"
                      name="blessuresChroniques"
                      value="oui"
                      checked={formData.blessuresChroniques === "oui"}
                      onChange={handleChange}
                    />
                    <span>Oui</span>
                  </label>
                  <label style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer" }}>
                    <input
                      type="radio"
                      name="blessuresChroniques"
                      value="non"
                      checked={formData.blessuresChroniques === "non"}
                      onChange={handleChange}
                    />
                    <span>Non</span>
                  </label>
                </div>
                {formData.blessuresChroniques === "oui" && (
                  <textarea
                    name="blessuresChroniquesDetails"
                    placeholder="Détails (si Oui)"
                    rows="3"
                    value={formData.blessuresChroniquesDetails}
                    onChange={handleChange}
                    style={{ marginTop: "10px" }}
                  />
                )}
              </div>

              <div className="form-group" style={{ marginBottom: "20px" }}>
                <label style={{ marginBottom: "10px", display: "block" }}>
                  Avez-vous des allergies alimentaires ou autres ?
                </label>
                <div style={{ display: "flex", gap: "20px" }}>
                  <label style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer" }}>
                    <input
                      type="radio"
                      name="allergies"
                      value="oui"
                      checked={formData.allergies === "oui"}
                      onChange={handleChange}
                    />
                    <span>Oui</span>
                  </label>
                  <label style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer" }}>
                    <input
                      type="radio"
                      name="allergies"
                      value="non"
                      checked={formData.allergies === "non"}
                      onChange={handleChange}
                    />
                    <span>Non</span>
                  </label>
                </div>
                {formData.allergies === "oui" && (
                  <textarea
                    name="allergiesDetails"
                    placeholder="Détails (si Oui)"
                    rows="3"
                    value={formData.allergiesDetails}
                    onChange={handleChange}
                    style={{ marginTop: "10px" }}
                  />
                )}
              </div>

              <div className="form-group" style={{ marginBottom: "20px" }}>
                <label style={{ marginBottom: "10px", display: "block" }}>
                  Êtes-vous enceinte ou allaitez-vous ?
                </label>
                <div style={{ display: "flex", gap: "20px" }}>
                  <label style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer" }}>
                    <input
                      type="radio"
                      name="enceinteAllaitement"
                      value="enceinte"
                      checked={formData.enceinteAllaitement === "enceinte"}
                      onChange={handleChange}
                    />
                    <span>Enceinte</span>
                  </label>
                  <label style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer" }}>
                    <input
                      type="radio"
                      name="enceinteAllaitement"
                      value="allaitement"
                      checked={formData.enceinteAllaitement === "allaitement"}
                      onChange={handleChange}
                    />
                    <span>Allaitement</span>
                  </label>
                  <label style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer" }}>
                    <input
                      type="radio"
                      name="enceinteAllaitement"
                      value="non"
                      checked={formData.enceinteAllaitement === "non"}
                      onChange={handleChange}
                    />
                    <span>Non</span>
                  </label>
                </div>
              </div>

              <div className="form-group">
                <label style={{ marginBottom: "10px", display: "block" }}>
                  Votre niveau d'énergie général (sur une échelle de 1 à 10) : {formData.niveauEnergie}
                </label>
                <input
                  type="range"
                  name="niveauEnergie"
                  min="1"
                  max="10"
                  value={formData.niveauEnergie}
                  onChange={handleChange}
                  style={{ width: "100%" }}
                />
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", color: "var(--text-color)", marginTop: "5px" }}>
                  <span>1 (Très faible)</span>
                  <span>10 (Excellent)</span>
                </div>
              </div>
            </div>
          )}

          {/* Section III: Objectifs Physiques et Habitudes */}
          {currentSection === 3 && (
            <div className="form-section">
              <h4 className="accent-color" style={{ marginBottom: "20px" }}>
                III. Objectifs Physiques et Habitudes
              </h4>

              <h5 style={{ marginBottom: "15px" }}>A. Objectifs</h5>

              <div style={{ marginBottom: "20px" }}>
                <label style={{ marginBottom: "10px", display: "block" }}>Objectif Principal *</label>
                <textarea
                  name="objectifPrincipal"
                  placeholder="Description détaillée (Ex: Perdre 5kg, courir 10km, tonifier les bras)"
                  rows="3"
                  value={formData.objectifPrincipal}
                  onChange={handleChange}
                  required
                />
                <input
                  type="text"
                  name="objectifPrincipalDelai"
                  placeholder="Délai souhaité"
                  value={formData.objectifPrincipalDelai}
                  onChange={handleChange}
                  style={{ marginTop: "10px" }}
                />
              </div>

              <div style={{ marginBottom: "20px" }}>
                <label style={{ marginBottom: "10px", display: "block" }}>Objectif Secondaire 1</label>
                <textarea
                  name="objectifSecondaire1"
                  placeholder="Description détaillée"
                  rows="3"
                  value={formData.objectifSecondaire1}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="objectifSecondaire1Delai"
                  placeholder="Délai souhaité"
                  value={formData.objectifSecondaire1Delai}
                  onChange={handleChange}
                  style={{ marginTop: "10px" }}
                />
              </div>

              <div style={{ marginBottom: "20px" }}>
                <label style={{ marginBottom: "10px", display: "block" }}>Objectif Secondaire 2</label>
                <textarea
                  name="objectifSecondaire2"
                  placeholder="Description détaillée"
                  rows="3"
                  value={formData.objectifSecondaire2}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="objectifSecondaire2Delai"
                  placeholder="Délai souhaité"
                  value={formData.objectifSecondaire2Delai}
                  onChange={handleChange}
                  style={{ marginTop: "10px" }}
                />
              </div>

              <h5 style={{ marginTop: "30px", marginBottom: "15px" }}>B. Habitudes Sportives</h5>

              <div className="row row-cols-md-2 row-cols-1 g-3">
                <div className="col">
                  <label style={{ marginBottom: "10px", display: "block" }}>
                    Niveau d'activité physique actuel *
                  </label>
                  <select
                    name="niveauActivite"
                    value={formData.niveauActivite}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Sélectionnez...</option>
                    <option value="sedentaire">Sédentaire</option>
                    <option value="modere">Modéré</option>
                    <option value="actif">Actif</option>
                  </select>
                </div>
                <div className="col">
                  <label style={{ marginBottom: "10px", display: "block" }}>
                    Fréquence sportive (par semaine)
                  </label>
                  <input
                    type="text"
                    name="frequenceSport"
                    placeholder="Ex: 3 fois par semaine"
                    value={formData.frequenceSport}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <textarea
                name="activitesPhysiques"
                placeholder="Quelles activités physiques pratiquez-vous ?"
                rows="3"
                value={formData.activitesPhysiques}
                onChange={handleChange}
                style={{ marginTop: "20px" }}
              />

              <textarea
                name="motivation"
                placeholder="Qu'est-ce qui vous motive le plus à faire de l'exercice ?"
                rows="3"
                value={formData.motivation}
                onChange={handleChange}
                style={{ marginTop: "20px" }}
              />

              <textarea
                name="obstacles"
                placeholder="Qu'est-ce qui vous empêche le plus souvent de faire de l'exercice ?"
                rows="3"
                value={formData.obstacles}
                onChange={handleChange}
                style={{ marginTop: "20px" }}
              />

              <h5 style={{ marginTop: "30px", marginBottom: "15px" }}>C. Habitudes Alimentaires</h5>
              <textarea
                name="habitudesAlimentaires"
                placeholder="Décrivez brièvement une journée type de repas (Petit-déjeuner, Déjeuner, Dîner, Collations)"
                rows="5"
                value={formData.habitudesAlimentaires}
                onChange={handleChange}
              />
            </div>
          )}

          {/* Section IV: Préparation Psychologique et Mentale */}
          {currentSection === 4 && (
            <div className="form-section">
              <h4 className="accent-color" style={{ marginBottom: "20px" }}>
                IV. Préparation Psychologique et Mentale (L'approche 7Synergo)
              </h4>
              <p style={{ marginBottom: "20px", fontStyle: "italic" }}>
                Cette section est cruciale pour l'approche synergique de 7Synergo.
              </p>

              <textarea
                name="attentesPsychologie"
                placeholder="Qu'attendez-vous de l'intégration de la psychologie dans votre transformation physique ? *"
                rows="4"
                value={formData.attentesPsychologie}
                onChange={handleChange}
                required
                style={{ marginBottom: "20px" }}
              />

              <textarea
                name="relationCorps"
                placeholder="Comment décririez-vous votre relation actuelle avec votre corps ?"
                rows="4"
                value={formData.relationCorps}
                onChange={handleChange}
                style={{ marginBottom: "20px" }}
              />

              <textarea
                name="difficultesMotivation"
                placeholder="Avez-vous déjà eu des difficultés à maintenir votre motivation sur le long terme ? Si oui, lesquelles ?"
                rows="4"
                value={formData.difficultesMotivation}
                onChange={handleChange}
                style={{ marginBottom: "20px" }}
              />

              <textarea
                name="facteurStress"
                placeholder="Quel est votre principal facteur de stress dans la vie quotidienne ?"
                rows="4"
                value={formData.facteurStress}
                onChange={handleChange}
                style={{ marginBottom: "20px" }}
              />

              <textarea
                name="pourquoiProfond"
                placeholder="Quel est votre 'Pourquoi' profond pour cette transformation (au-delà de l'apparence physique) ? *"
                rows="4"
                value={formData.pourquoiProfond}
                onChange={handleChange}
                required
                style={{ marginBottom: "20px" }}
              />

              <textarea
                name="gestionEchec"
                placeholder="Comment gérez-vous l'échec ou les revers ?"
                rows="4"
                value={formData.gestionEchec}
                onChange={handleChange}
              />
            </div>
          )}

          {/* Section V: Engagements et Signature */}
          {currentSection === 5 && (
            <div className="form-section">
              <h4 className="accent-color" style={{ marginBottom: "20px" }}>
                V. Engagements et Signature
              </h4>

              <div style={{
                backgroundColor: "var(--accent-color-3)",
                padding: "20px",
                borderRadius: "10px",
                marginBottom: "20px"
              }}>
                <p style={{ marginBottom: "15px" }}>
                  Je certifie que les informations fournies ci-dessus sont exactes et complètes. 
                  Je comprends que la réussite de mon programme dépend de mon engagement et de 
                  ma collaboration avec l'équipe 7Synergo.
                </p>

                <label style={{ display: "flex", alignItems: "center", gap: "10px", cursor: "pointer" }}>
                  <input
                    type="checkbox"
                    name="signature"
                    checked={formData.signature}
                    onChange={handleChange}
                    required
                    style={{ width: "20px", height: "20px" }}
                  />
                  <span>J'accepte les conditions et je certifie l'exactitude des informations *</span>
                </label>
              </div>

              <div className="row row-cols-md-2 row-cols-1 g-3">
                <div className="col">
                  <label style={{ marginBottom: "10px", display: "block" }}>Date</label>
                  <input
                    type="date"
                    name="dateSignature"
                    value={formData.dateSignature || new Date().toISOString().split('T')[0]}
                    onChange={handleChange}
                    readOnly
                  />
                </div>
                <div className="col">
                  <label style={{ marginBottom: "10px", display: "block" }}>Signature du Client</label>
                  <input
                    type="text"
                    placeholder="Votre nom complet"
                    value={formData.nomPrenom}
                    readOnly
                    style={{ opacity: 0.7 }}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="form-button-container" style={{ 
            display: "flex", 
            gap: "15px", 
            justifyContent: "space-between",
            marginTop: "30px"
          }}>
            {currentSection > 1 && (
              <button
                type="button"
                onClick={prevSection}
                className="btn btn-secondary"
                style={{ flex: "1" }}
              >
                <span className="btn-title">
                  <i className="fa-solid fa-arrow-left" style={{ marginRight: "8px" }}></i>
                  <span>Précédent</span>
                </span>
              </button>
            )}

            {currentSection < 5 ? (
              <button
                type="button"
                onClick={nextSection}
                className="btn btn-accent"
                style={{ flex: currentSection === 1 ? "1" : "1", marginLeft: currentSection === 1 ? "0" : "auto" }}
              >
                <span className="btn-title">
                  <span>Suivant</span>
                </span>
                <span className="icon-circle">
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
              </button>
            ) : (
              <button
                type="submit"
                className="btn btn-accent"
                disabled={isSubmitting}
                style={{ flex: "1", marginLeft: "auto" }}
              >
                <span className="btn-title">
                  <span>{isSubmitting ? "Envoi en cours..." : "Envoyer le Formulaire"}</span>
                </span>
                <span className="icon-circle">
                  <i className="fa-solid fa-check"></i>
                </span>
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default InscriptionForm;

