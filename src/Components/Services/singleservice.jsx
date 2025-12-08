import React from "react";
import { services } from "../../Data/ServiceData";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";

const SingleServiceSection = () => {
    return (
        <div className="section pb-0">
            <div className="hero-container">
                <div className="d-flex flex-column gspace-5">
                    <div className="image-container">
                        <img
                        src="/assets/images/dummy-img-600x400.jpg"
                        alt="Service Image"
                        className="single-service-img"
                        />
                        <div className="single-service-title-layout">
                            <div>
                                <div className="single-service-spacer"></div>
                                <div className="single-service-title-wrapper">
                                    <div className="single-service-title">
                                        <AnimateOnScroll animation="fadeInRight" speed="slow">
                                            <div className="sub-heading">
                                                <i className="fa-regular fa-circle-dot"></i>
                                                <span>Notre Expertise</span>
                                            </div>
                                        </AnimateOnScroll>
                                        <AnimateOnScroll animation="fadeInRight" speed="normal">
                                            <h3 className="title-heading">
                                                Programme Intégré de Coaching de Vie, Psychologie & Sport
                                            </h3>
                                        </AnimateOnScroll>
                                        <p>
                                            Transformez votre vie avec notre approche holistique qui combine coaching de vie, psychologie et coaching sportif. Un programme personnalisé pour atteindre vos objectifs physiques, mentaux et émotionnels de manière durable.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="single-service-spacer"></div>
                        </div>
                    </div>

                    <div className="row row-cols-lg-2 row-cols-1 grid-spacer-5">
                        <div className="col col-lg-8">
                            <div className="d-flex flex-column gspace-2">
                                <h4>Vue d'Ensemble</h4>
                                <p>
                                    Chez Synergo, nous vous accompagnons dans votre transformation personnelle grâce à un programme intégré qui fusionne le coaching de vie, la psychologie et le coaching sportif. Notre approche personnalisée s'adapte à vos besoins spécifiques, que vous souhaitiez améliorer votre condition physique, surmonter des défis personnels, ou développer votre confiance en vous. Nos experts travaillent ensemble pour créer une synergie puissante qui transforme votre vie de manière durable.
                                </p>
                                <div className="row row-cols-md-2 row-cols-1 grid-spacer-2 grid-spacer-md-3">
                                    <div className="col">
                                        <div className="image-container">
                                        <img
                                            src="/assets/images/dummy-img-600x400.jpg"
                                            alt="Service Image"
                                            className="img-fluid"
                                        />
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="image-container">
                                        <img
                                            src="/assets/images/dummy-img-600x400.jpg"
                                            alt="Service Image"
                                            className="img-fluid"
                                        />
                                        </div>
                                    </div>
                                </div>

                                <div className="card service-included">
                                    <h4>Ce Qui Est Inclus</h4>
                                    <div className="underline-accent-short"></div>
                                    <p>
                                        Notre programme complet inclut un accompagnement personnalisé dans trois domaines complémentaires pour une transformation holistique de votre vie.
                                    </p>
                                    <div className="row row-cols-md-2 row-cols-1 grid-spacer-2">
                                        <div className="col">
                                            <ul className="check-list">
                                                <li>Coaching de Vie Personnalisé</li>
                                                <li>Accompagnement Psychologique</li>
                                                <li>Programme Sportif Sur Mesure</li>
                                                <li>Suivi et Évaluation Régulière</li>
                                            </ul>
                                        </div>
                                        <div className="col">
                                            <ul className="check-list">
                                                <li>Stratégies de Motivation</li>
                                                <li>Gestion du Stress et des Émotions</li>
                                                <li>Définition d'Objectifs Clairs</li>
                                                <li>Support Continu et Disponible</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <h4>Pourquoi Choisir Synergo pour Votre Transformation?</h4>
                                <p>
                                    Synergo combine l'expertise en coaching de vie, psychologie et coaching sportif pour offrir une approche holistique unique. Notre programme intégré vous accompagne dans votre transformation personnelle et physique avec un suivi personnalisé et des résultats durables.
                                </p>

                                <div className="row row-cols-2">
                                    <div className="col">
                                        <div className="d-flex flex-column gspace-2">
                                            <div className="d-flex flex-column flex-md-row align-items-center text-center text-md-start gspace-1">
                                                <i className="fa-regular fa-2x fa-circle-check accent-color"></i>
                                                <div className="d-flex flex-column gspace-0">
                                                    <h5>Résultats Mesurables</h5>
                                                    <p>Objectifs clairs et suivi de progression</p>
                                                </div>
                                            </div>
                                            <div className="d-flex flex-column flex-md-row align-items-center text-center text-md-start gspace-1">
                                                <i className="fa-regular fa-2x fa-circle-check accent-color"></i>
                                                <div className="d-flex flex-column gspace-0">
                                                    <h5>Équipe Dédiée</h5>
                                                    <p>Experts en coaching, psychologie et sport</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="d-flex flex-column gspace-2">
                                            <div className="d-flex flex-column flex-md-row align-items-center text-center text-md-start gspace-1">
                                                <i className="fa-regular fa-2x fa-circle-check accent-color"></i>
                                                <div className="d-flex flex-column gspace-0">
                                                    <h5>Approche Personnalisée</h5>
                                                    <p>Programme sur mesure adapté à vos besoins</p>
                                                </div>
                                            </div>
                                            <div className="d-flex flex-column flex-md-row align-items-center text-center text-md-start gspace-1">
                                                <i className="fa-regular fa-2x fa-circle-check accent-color"></i>
                                                <div className="d-flex flex-column gspace-0">
                                                    <h5>Suivi & Analyse</h5>
                                                    <p>Évaluation continue pour des résultats durables</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col col-lg-4">
                            <div className="d-flex flex-column flex-md-row flex-lg-column justify-content-between gspace-5">
                                <div className="card service-recent">
                                <h4>Services Récents</h4>
                                <div className="underline-accent-short"></div>
                                <ul className="single-service-list">
                                    {services.map((service) => (
                                        <li key={service.id}>
                                        <a href={service.link} className="hover:underline">
                                            {service.title}
                                        </a>
                                        </li>
                                    ))}
                                </ul>
                                </div>
                                <div className="cta-service-banner">
                                    <div className="spacer"></div>
                                    <h3 className="title-heading">Transformez Votre Vie avec Synergo !</h3>
                                    <p>
                                        Découvrez notre programme innovant qui fusionne coaching de vie, psychologie et coaching sportif. Rejoignez-nous pour une transformation complète et durable !
                                    </p>
                                    <div className="link-wrapper">
                                        <a href="about">En Savoir Plus</a>
                                        <i className="fa-solid fa-circle-arrow-right"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleServiceSection;