import React from "react";
import { caseStudiesData } from "../../Data/CaseStudiesData";
import CaseStudyCard from "../Card/CaseStudiesCard";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";

const CaseStudiesSection = ({ noPadding }) => {
  return (
    <div className={`section ${noPadding ? "p-0" : ""}`}>
      <div className="hero-container">
        <div className="case-studies-layout">
          <div className="card card-case-studies">
            <div className="row row-cols-lg-2 row-cols-1 grid-spacer-5">
              <div className="col">
                <AnimateOnScroll animation="fadeInLeft" speed="normal">
                  <div className="d-flex flex-column gspace-2">
                    <div className="sub-heading">
                      <i className="fa-regular fa-circle-dot"></i>
                      <span>Nos Résultats</span>
                    </div>
                    <h2 className="title-heading">
                      Comment Nous Bâtissons la Résilience
                    </h2>
                  </div>
                </AnimateOnScroll>
              </div>
              <div className="col">
                <AnimateOnScroll animation="fadeInRight" speed="normal">
                  <div className="d-flex flex-column h-100 justify-content-end gspace-2">
                    <p>
                      Nous ne faisons pas que parler de progrès—nous les
                      ancrons. Voici quelques-unes de nos études de cas les plus
                      percutantes démontrant l'impact de notre approche
                      Corps-Esprit.
                    </p>
                    <div className="link-wrapper">
                      <a href="./case_studies">Plus de Témoignages</a>
                      <i className="fa-solid fa-circle-arrow-right"></i>
                    </div>
                  </div>
                </AnimateOnScroll>
              </div>
            </div>

            {/* Cards */}
            <div className="d-flex flex-column gspace-2">
              <div className="d-flex flex-column flex-lg-row gspace-2">
                {caseStudiesData.slice(0, 2).map((item) => (
                  <CaseStudyCard key={item.id} {...item} />
                ))}
              </div>
              <div className="d-flex flex-column flex-lg-row gspace-2">
                {caseStudiesData.slice(2, 4).map((item) => (
                  <CaseStudyCard key={item.id} {...item} />
                ))}
              </div>
            </div>
          </div>
          <div className="spacer"></div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudiesSection;
