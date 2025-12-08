import React from "react";
import HeadTitle from "../../Components/Head/HeadTitle";
import BannerInnerSection from "../../Components/Banner/Inner";
import NewsletterSection from "../../Components/Form/Newsletter";
import TestimonialSection from "../../Components/Testimonial/testimonial";
import FaqSection from "../../Components/FAQs/faq";
import SingleServiceSection from "../../Components/Services/singleservice";

function SingleServicePage(){
    return(
        <>
            <HeadTitle title="Détails du Service - 7Synergo - Coaching de Vie, Psychologie & Sport" />
            <BannerInnerSection title="Programme Intégré de Coaching" currentPage="Détails du Service" />
            <SingleServiceSection />
            <TestimonialSection />
            <NewsletterSection />
            <FaqSection />
        </>
    );
}

export default SingleServicePage;