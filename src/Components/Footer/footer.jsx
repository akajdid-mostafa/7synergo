import React from "react";

const Footer = () => {
  return (
    <div className="section-footer">
      <div className="bg-footer-wrapper">
        <div className="bg-footer">
          <div className="hero-container position-relative z-2">
            <div className="d-flex flex-column gspace-2">
              <div className="row row-cols-lg-4 row-cols-md-2 row-cols-1 grid-spacer-5">
                <div className="col col-lg-4">
                  <div className="footer-logo-container">
                    <div className="logo-container-footer">
                      <img
                        src="/assets/images/logo/logo.png"
                        alt="Logo"
                        className="site-logo img-fluid"
                      />
                    </div>
                    <h4>Bâtir la Résilience par l'Intégration & l'Action</h4>
                    <p>
                      Notre mission est de favoriser le développement personnel,
                      la résilience mentale et le bien-être physique par une
                      approche holistique. Nous sommes engagés pour l'impact
                      durable.
                    </p>
                  </div>
                </div>

                <div className="col col-lg-2">
                  <div className="footer-quick-links">
                    <h5>Quick Links</h5>
                    <ul className="footer-list">
                      <li>
                        <a href="/">Home</a>
                      </li>
                      <li>
                        <a href="/about">About Us</a>
                      </li>
                      <li>
                        <a href="/service">Service</a>
                      </li>
                      <li>
                        <a href="/case_studies">Case Studies</a>
                      </li>
                      <li>
                        <a href="/blog">Blog</a>
                      </li>
                      <li>
                        <a href="/contact">Contact Us</a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col col-lg-3">
                  <div className="footer-services-container">
                    <h5>Nos Domaines d'Action</h5>
                    <ul className="footer-list">
                      <li>
                        <a href="/single_services">Coaching de Vie</a>
                      </li>
                      <li>
                        <a href="/single_services">Psychologie Intégrée</a>
                      </li>
                      <li>
                        <a href="/single_services">Coaching Sportif</a>
                      </li>
                      <li>
                        <a href="/single_services">Modules Scolaires</a>
                      </li>
                      <li>
                        <a href="/single_services">Accompagnement Addiction</a>
                      </li>
                      <li>
                        <a href="/single_services">Performance Mentale</a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col col-lg-3">
                  <div className="footer-contact-container">
                    <h5>Contact Info</h5>
                    <ul className="contact-list">
                      <li>synergo.contact@gmail.com</li>
                      <li>+212 7 19 85 64 81</li>
                      <li>Casablanca, Maroc</li>
                    </ul>
                    <div className="d-flex flex-column gspace-1">
                      <h5>Nos Réseaux Sociaux</h5>
                      <div className="social-container">
                        <div className="social-item-wrapper">
                          <a
                            href="https://www.facebook.com/synergo.maroc"
                            className="social-item"
                          >
                            <i className="fa-brands fa-facebook"></i>
                          </a>
                        </div>
                        <div className="social-item-wrapper">
                          <a href="https://www.youtube.com/@synergo.maroc" className="social-item">
                            <i className="fa-brands fa-youtube"></i>
                          </a>
                        </div>
                        <div className="social-item-wrapper">
                          <a
                            href="https://www.instagram.com/synergo.maroc"
                            className="social-item"
                          >
                            <i className="fa-brands fa-instagram"></i>
                          </a>
                        </div>
                        <div className="social-item-wrapper">
                          <a
                            href="https://www.linkedin.com/company/synergo-maroc"
                            className="social-item"
                          >
                            <i className="fa-brands fa-linkedin"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="footer-content-spacer"></div>
            </div>

            <div className="copyright-container">
              <span className="copyright">
              © 2025 Synergo. Tous Droits Réservés.
              </span>
              <div className="d-flex flex-row gspace-2">
                <a href="#" className="legal-link">
                  Conditions d'Utilisation
                </a>
                <a href="#" className="legal-link">
                  Politique de Confidentialité
                </a>
              </div>
            </div>

            <div className="footer-spacer"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
