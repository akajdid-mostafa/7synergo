import React from "react";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";

function PricingPlanSection(){
    return(
        <div className="section">
            <div className="hero-container">
                <div className="d-flex flex-column justify-content-center text-center gspace-5">
                    <AnimateOnScroll animation="fadeInUp" speed="normal">
                        <div className="d-flex flex-column gspace-2">
                            <div className="sub-heading align-self-center">
                                <i className="fa-regular fa-circle-dot"></i>
                                <span>Nos Services Fondamentaux</span>
                            </div>
                            <h2 className="title-heading heading-container heading-container-short">
                            Plans d'Accompagnement Flexibles pour Chaque Besoin
                            </h2>
                        </div>
                    </AnimateOnScroll>
                    <div className="row row-cols-lg-3 row-cols-1 grid-spacer-2">
                        <div className="col">
                            <div className="pricing-container">
                                <AnimateOnScroll animation="fadeInLeft" speed="normal">
                                    <div className="card card-pricing-title">
                                        <div className="spacer" />
                                        <div className="content">
                                            <h3 className="title-heading">Trouvons la Stratégie d'Équilibre Idéale !</h3>
                                            <div className="link-wrapper">
                                            <a href="./contact">Demander une Présentation</a>
                                            <i className="fa-solid fa-arrow-circle-right"></i>
                                            </div>
                                        </div>
                                    </div>
                                </AnimateOnScroll>

                                <AnimateOnScroll animation="fadeInUp" speed="normal">
                                    <div className="card card-pricing">
                                        <h4>Fondation Corps-Esprit</h4>
                                        <p>Parfait pour l'accompagnement individuel et la récupération</p>
                                        <div className="d-flex flex-row gspace-1 align-items-center h-100">
                                            <h3>$250</h3>
                                            <p>/Mois</p>
                                        </div>
                                        <a href="#" className="btn btn-accent">
                                            <div className="btn-title">
                                                <span>Voir les Détails</span>
                                            </div>
                                            <div className="icon-circle">
                                                <i className="fa-solid fa-arrow-right"></i>
                                            </div>
                                        </a>
                                        <ul className="check-list">
                                            <li><a href="./single_services">Bilan Psychologique & Coaching de Vie</a></li>
                                            <li><a href="./single_services">Séances de Coaching Sportif (1 plateforme/semaine)</a></li>
                                            <li><a href="./single_services">Suivi de Performance et Résilience</a></li>
                                        </ul>
                                    </div>
                                </AnimateOnScroll>
                            </div>
                        </div>
                        <div className="col">
                            <AnimateOnScroll animation="fadeInUp" speed="slow">
                                <div className="card card-pricing pricing-highlight">
                                    <div className="spacer" />
                                    <h4>Performance Mentale Intégrée</h4>
                                    <p>Idéal pour les clubs et académies sportives qui veulent optimiser la performance.</p>
                                    <div className="d-flex flex-row gspace-1 align-items-center">
                                        <h3>$799</h3>
                                        <p>/Mois</p>
                                    </div>
                                    <a href="#" className="btn btn-accent">
                                        <div className="btn-title">
                                            <span>Voir les Détails</span>
                                        </div>
                                        <div className="icon-circle">
                                            <i className="fa-solid fa-arrow-right"></i>
                                        </div>
                                    </a>

                                    <div className="core-benefits">
                                        <div className="benefit">
                                            <i className="fa-solid fa-brain"></i>
                                            <a href="#">Coaching Mental pour les Athlètes (1 séance/semaine)</a>
                                        </div>
                                        <div className="benefit">
                                            <i className="fa-brands fa-accessible-icon"></i>
                                            <a href="#">Gestion de la Pression & de l'Anxiété de Compétition</a>
                                        </div>
                                        <div className="benefit">
                                            <i className="fa-solid fa-bug"></i>
                                            <a href="#">Ateliers de Concentration et de Fixation d'Objectifs</a>
                                        </div>
                                    </div>

                                    <ul className="check-list">
                                        <li><a href="#">Programme Synergie Complet</a></li>
                                        <li><a href="#">Gestion des Ateliers Sportifs</a></li>
                                        <li><a href="#">Responsable de Projet Attitré</a></li>
                                        <li><a href="#">Modules Émotionnels & Adaptation</a></li>
                                        <li><a href="#">Soutien à l'Intégrité Familiale</a></li>
                                        <li><a href="#">Rapports d'Évaluation Périodiques</a></li>
                                    </ul>
                                </div>
                            </AnimateOnScroll>
                        </div>
                        <div className="col">
                            <div className="pricing-container">
                                <AnimateOnScroll animation="fadeInRight" speed="normal">
                                    <div className="card pricing-highlight-box">
                                        <div className="d-flex flex-column gspace-2 w-100">
                                            <h5>Votre Équilibre, Notre Priorité !</h5>
                                            <div className="d-flex flex-column gspace-2">
                                                <div className="pricing-highlights">
                                                    <a href="#">Approche Intégrée Corps-Esprit</a>
                                                    <i className="fa-solid fa-arrow-circle-right"></i>
                                                </div>
                                                <div className="pricing-highlights">
                                                    <a href="#">Stratégies Prouvées pour une Résilience Durable</a>
                                                    <i className="fa-solid fa-arrow-circle-right"></i>
                                                </div>
                                                <div className="pricing-highlights">
                                                    <a href="#">Solutions Évolutives pour Chaque Public (Âge et Besoins)</a>
                                                    <i className="fa-solid fa-arrow-circle-right"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="spacer" />
                                    </div>
                                </AnimateOnScroll>

                                <AnimateOnScroll animation="fadeInUp" speed="normal">
                                    <div className="card card-pricing">
                                        <h4>Partenariat Éducation</h4>
                                        <p>Solution complète pour les Établissements Scolaires (Primaire, Collège, Lycée).</p>
                                        <div className="d-flex flex-row gspace-1 align-items-center h-100">
                                            <h3>$1499</h3>
                                            <p>/Mois</p>
                                        </div>
                                        <a href="#" className="btn btn-accent">
                                            <div className="btn-title">
                                                <span>Voir les Détails</span>
                                            </div>
                                            <div className="icon-circle">
                                                <i className="fa-solid fa-arrow-right"></i>
                                            </div>
                                        </a>
                                        <ul className="check-list">
                                            <li><a href="./single_services">Modules Parascolaires sur Mesure (Karaté, Self-Défense, etc.)</a></li>
                                            <li><a href="./single_services">Ateliers de Gestion Émotionnelle pour chaque Niveau</a></li>
                                            <li><a href="./single_services">Rapports de Suivi sur le Développement Global des Élèves</a></li>
                                        </ul>
                                    </div>
                                </AnimateOnScroll>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default PricingPlanSection;