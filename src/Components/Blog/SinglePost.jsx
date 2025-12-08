import React from "react";
import { blogs } from "../../Data/BlogPostData";

const BlogPostSection = () => {
  return (
    <div className="section">
        <div className="hero-container">
            <div className="row row-cols-lg-2 row-cols-1 grid-spacer-5">
                <div className="col col-lg-4 order-2 order-lg-1">
                    <div className="d-flex flex-column flex-md-row flex-lg-column gspace-5">
                        <div className="card recent-post">
                            <h4>Articles Récents</h4>
                            {blogs.map((blog) => (
                                <div
                                    className="d-flex flex-row w-100 gspace-1"
                                    key={blog.id}
                                >
                                    <div className="image-container">
                                    <img
                                        src={blog.image}
                                        alt={blog.title}
                                        className="img-fluid"
                                    />
                                    </div>
                                    <div className="d-grid">
                                        <div className="d-flex flex-row gspace-1 align-items-center">
                                            <i className="fa-solid fa-calendar accent-color"></i>
                                            <span className="meta-data-post">{blog.date}</span>
                                        </div>
                                        <a href={blog.link} className="blog-link-post">
                                            {blog.title}
                                        </a>
                                    </div>
                                </div>
                                ))}
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
                <div className="col col-lg-8 order-1 order-lg-2">
                    <div className="d-flex flex-column gspace-2">
                        <div className="post-image">
                            <img
                            src="/assets/images/dummy-img-600x400.jpg"
                            alt="Recent Post"
                            className="img-fluid"
                            />
                        </div>
                        <h3>Comment Transformer Votre Vie avec le Coaching Intégré</h3>
                        <div className="underline-muted-full"></div>
                        <div className="d-flex flex-row align-items-center justify-content-between">
                            <div className="d-flex flex-row align-items-center gspace-2">
                                <div className="d-flex flex-row gspace-1 align-items-center">
                                    <i className="fa-solid fa-calendar accent-color"></i>
                                    <span className="meta-data-post">March 27, 2025</span>
                                </div>
                                <div className="d-flex flex-row gspace-1 align-items-center">
                                    <i className="fa-solid fa-folder accent-color"></i>
                                    <span className="meta-data-post">Coaching</span>
                                </div>
                            </div>
                            <div className="d-flex flex-row gspace-1 align-items-center">
                                <i className="fa-solid fa-user accent-color"></i>
                                <span className="meta-data">Synergo</span>
                            </div>
                        </div>

                    <div>
                        <p>
                            Dans le monde d'aujourd'hui, transformer sa vie nécessite une approche holistique qui combine le bien-être physique,
                            mental et émotionnel. Le programme Synergo fusionne le coaching de vie, la psychologie et le coaching sportif pour
                            offrir une solution complète. Dans cet article, nous explorons comment cette approche intégrée peut vous aider à
                            atteindre vos objectifs personnels et professionnels de manière durable.
                        </p>
                        <p>
                            Le coaching de vie vous accompagne dans la clarification de vos objectifs et la mise en place d'actions concrètes.
                            La psychologie vous aide à comprendre et surmonter les blocages mentaux et émotionnels. Le coaching sportif renforce
                            votre corps et votre confiance en vous. Ensemble, ces trois piliers créent une synergie puissante qui transforme
                            non seulement votre apparence physique, mais aussi votre état d'esprit et votre qualité de vie globale.
                        </p>
                    </div>
                    <div className="quote-container">
                        <div>
                        <div className="icon-wrapper">
                            <div className="icon-box">
                            <i className="fa-solid fa-quote-right"></i>
                            </div>
                        </div>
                        </div>
                        <p className="quote">
                            Le programme Synergo a complètement transformé ma vie. Grâce à l'approche intégrée du coaching de vie, de la psychologie
                            et du sport, j'ai non seulement atteint mes objectifs physiques, mais j'ai aussi développé une confiance en moi et
                            une meilleure compréhension de mes besoins profonds.
                        </p>
                        <div>
                        <h5>Marie Dubois</h5>
                        <p className="quote-description">Participante Synergo</p>
                        </div>
                    </div>
                    <p>
                        Que vous souhaitiez améliorer votre condition physique, surmonter des défis personnels, ou simplement vivre une vie plus équilibrée,
                        le programme Synergo s'adapte à vos besoins spécifiques. Nos experts en coaching de vie, psychologie et sport travaillent ensemble
                        pour créer un plan personnalisé qui respecte votre rythme et vos objectifs. Rejoignez-nous et découvrez comment transformer votre vie
                        de manière durable et significative.
                    </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default BlogPostSection;