import React from "react";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";
import CounterOnScroll from "../Hooks/CounterOnScroll";

function ExpertiseSection() {
  return (
    <>
      <div className="section">
        <div className="hero-container">
          <div className="d-flex flex-column flex-lg-row gspace-5">
            <div className="expertise-img-layout">
              <div className="image-container expertise-img">
                <AnimateOnScroll animation="fadeInUp" speed="normal">
                  <img
                    src="/assets/images/about/about1.png"
                    alt="Expertise Image"
                    className="img-fluid"
                  />
                </AnimateOnScroll>
                <div className="expertise-layout">
                  <div className="d-flex flex-column">
                    <div className="card-expertise-wrapper">
                      <AnimateOnScroll animation="fadeInDown" speed="normal">
                        <div className="card card-expertise">
                          <h4>Prêt(e) à Bâtir Votre Force Intérieure ?</h4>
                          <p>
                          Commençons par une analyse personnalisée de vos besoins (adultes, écoles, clubs).
                          </p>
                          <div className="d-flex align-items-center flex-row gspace-2 expertise-link">
                            <a href="./contact">Demander une Présentation</a>
                            <i className="fa-solid fa-circle-arrow-right"></i>
                          </div>
                        </div>
                      </AnimateOnScroll>
                    </div>
                    <div className="expertise-spacer"></div>
                  </div>
                  <div className="expertise-spacer"></div>
                </div>
              </div>
            </div>
            <div className="expertise-title">
              <AnimateOnScroll animation="fadeInRight" speed="normal">
                <div className="sub-heading">
                  <i className="fa-regular fa-circle-dot"></i>
                  <span>Notre Approche Holistique</span>
                </div>
              </AnimateOnScroll>

              <AnimateOnScroll animation="fadeInRight" speed="normal">
                <h2 className="title-heading">
                  Synergie Corps-Esprit, Résilience Durable
                </h2>
              </AnimateOnScroll>
              <p>
                Chez Synergo, nous intégrons la Psychologie, le Coaching de Vie
                et le Coaching Sportif pour un accompagnement complet. Notre
                expertise est dédiée au développement personnel et à la
                reconstruction comportementale, notamment pour l'accompagnement
                des addictions.
              </p>
              <div className="d-flex flex-column flex-md-row gspace-2">
                <div className="expertise-list">
                  <h5>Notre Triple Expertise</h5>
                  <ul className="check-list">
                    <li>
                      <a href="./single_services">
                        Coaching de Vie : Direction et Progrès Personnel
                      </a>
                    </li>
                    <li>
                      <a href="./single_services">
                        Psychologie : Équilibre Mental et Résilience
                      </a>
                    </li>
                    <li>
                      <a href="./single_services">
                        Coaching Sportif Intégré : Ancrage Corporel et Estime de
                        Soi
                      </a>
                    </li>
                    <li>
                      <a href="./single_services">
                        Outils Métaphoriques : Karaté, Boxe, Self-Défense,
                        Fitness
                      </a>
                    </li>
                    {/* <li>
                      <a href="./single_services">Brand Strategy</a>
                    </li>
                    <li>
                      <a href="./single_services">Conversion Optimization</a>
                    </li> */}
                  </ul>
                </div>

                <AnimateOnScroll animation="fadeInUp">
                  <div className="card card-expertise card-expertise-counter animate-box">
                    <div className="d-flex flex-row gspace-2 align-items-center">
                      <div className="d-flex flex-row align-items-center">
                        <CounterOnScroll
                          target={21}
                          suffix="+"
                          counterClassName="counter"
                          suffixClassName="counter-detail"
                        />
                      </div>
                      <h6>Résilience Accompagnement Intégrée</h6>
                    </div>
                    <p>
                      Nous nous engageons à bâtir un partenariat solide pour un
                      impact durable. Notre mission est de favoriser le
                      développement personnel et la résilience mentale par une
                      approche holistique.
                    </p>
                  </div>
                </AnimateOnScroll>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ExpertiseSection;
