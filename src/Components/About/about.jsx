import React from "react";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";

function AboutSection() {
  return (
    <div className="section">
      <div className="hero-container">
        <div className="d-flex flex-column flex-lg-row gspace-5">
          <div className="about-img-layout">
            <div className="image-container about-img">
              <AnimateOnScroll animation="fadeInUp" speed="normal">
                <img
                  src="/assets/images/about.jpg"
                  alt="About Us Image"
                  className="img-fluid"
                />
              </AnimateOnScroll>

              <div className="about-layout">
                <div className="d-flex flex-column">
                  <div className="card-about-wrapper">
                    <AnimateOnScroll animation="fadeInDown" speed="normal">
                      <div className="card card-about">
                        <div className="d-flex flex-row align-items-center">
                          <span className="counter" data-target="31"></span>
                          <span className="counter-detail">+</span>
                        </div>
                        <h6>Années d'Expertise en Développement Personnel</h6>
                      </div>
                    </AnimateOnScroll>
                  </div>
                  <div className="about-spacer"></div>
                </div>
                <div className="about-spacer"></div>
              </div>
            </div>
          </div>
          <div className="about-title">
            <div className="d-flex flex-column gspace-2">
              <AnimateOnScroll animation="fadeInRight" speed="normal">
                <div className="sub-heading">
                  <i className="fa-regular fa-circle-dot"></i>
                  <span>Notre ADN</span>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll animation="fadeInRight" speed="normal">
                <h2 className="title-heading">
                  Qui Nous Sommes & Ce Qui Nous Anime
                </h2>
              </AnimateOnScroll>

              <p>
                Chez Synergo, nous sommes spécialisés dans l'élaboration de
                stratégies holistiques qui favorisent la résilience mentale et
                le bien-être physique. Notre approche assure votre progrès
                personnel et votre équilibre dans le temps.
              </p>
              <p>
                Découvrez notre équipe passionnée, nos valeurs fondées sur la
                discipline et le respect , ainsi que la mission qui nous anime :
                l'impact durable.
              </p>

              <div className="d-flex flex-column flex-md-row gspace-1 gspace-md-5">
                <div className="about-list">
                  <ul className="check-list">
                    <li>
                      <a href="./single_services">Coaching de Vie Intégré</a>
                    </li>
                    <li>
                      <a href="./single_services">Psychologie Appliquée</a>
                    </li>
                    <li>
                      <a href="./single_services">Coaching Sportif</a>
                    </li>
                  </ul>
                </div>

                <div className="about-list">
                  <ul className="check-list">
                    <li>
                      <a href="./single_services">Soutien pour l'Addiction</a>
                    </li>
                    <li>
                      <a href="./single_services">Modules pour Écoles</a>
                    </li>
                    <li>
                      <a href="./single_services">Performance Mentale</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
