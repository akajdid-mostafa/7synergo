import React from "react";
import BlogCard from "../Card/BlogCard";
import { blogs } from "../../Data/BlogPostData";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";

function BlogSection() {
    return (
        <div className="section">
            <div className="hero-container">
                <div className="d-flex flex-column gspace-5">
                    <div className="row row-cols-lg-2 row-cols-1 grid-spacer-5 m-0">
                        <div className="col col-lg-8 ps-0 pe-0">
                            <AnimateOnScroll animation="fadeInLeft" speed="fast">
                                <div
                                    className="d-flex flex-column gspace-2">
                                    <div className="sub-heading">
                                        <i className="fa-regular fa-circle-dot"></i>
                                        <span>Conseils & Actualités</span>
                                    </div>
                                    <h2 className="title-heading">Derniers Articles sur le Coaching & le Bien-être</h2>
                                </div>
                            </AnimateOnScroll>
                        </div>
                        <div className="col col-lg-4 ps-0 pe-0">
                            <AnimateOnScroll animation="fadeInRight" speed="normal">
                                <div
                                    className="d-flex flex-column gspace-2 justify-content-end h-100">
                                    <p>
                                        Découvrez nos derniers articles sur le coaching de vie, la psychologie,
                                        le sport et le bien-être. Des conseils pratiques et des stratégies
                                        pour améliorer votre qualité de vie.
                                    </p>
                                    <div className="link-wrapper">
                                        <a href="./blog">Voir Tous les Articles</a>
                                        <i className="fa-solid fa-circle-arrow-right"></i>
                                    </div>
                                </div>
                            </AnimateOnScroll>
                        </div>
                    </div>

                    <div className="row row-cols-md-2 row-cols-1 grid-spacer-3">
                        {blogs.map((blog) => (
                            <BlogCard key={blog.id} blog={blog} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogSection;
