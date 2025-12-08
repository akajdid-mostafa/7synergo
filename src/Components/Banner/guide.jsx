import React from "react";
import VideoButton from "../Video/VideoButton";
import AnimateOnScroll from "../Hooks/AnimateOnScroll";

function GuideBannerSection(){
    return(
        <>
            <div className="section-guide">
                <div className="guide-banner">
                    <div className="hero-container">
                        <AnimateOnScroll animation="fadeInUp" speed="normal">
                            <div className="guide-content">
                                <div className="guide-video-container">
                                    <VideoButton videoUrl="https://www.youtube.com/watch?v=LAteUqIJBLY&pp=ygUPZml0bmVzcyBzZW5lcmd5?autoplay=1" />
                                    <p>Découvrez Comment Nous Transformons des Vies</p>
                                </div>
                                <div className="d-flex flex-column gspace-2">
                                    <h3 className="title-heading">Transformez Votre Vie avec Synergo !</h3>
                                    <p>Découvrez notre programme innovant qui fusionne coaching de vie, psychologie et coaching sportif. Rejoignez-nous pour une transformation complète et durable !</p>
                                </div>
                            </div>
                        </AnimateOnScroll>
                    </div>
                </div>
            </div>
        </>
    );
}

export default GuideBannerSection;