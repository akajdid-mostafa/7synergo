import React from "react";
import HeadTitle from "../../Components/Head/HeadTitle";
import BannerInnerSection from "../../Components/Banner/Inner";
import AboutSection from "../../Components/About/about";
import ChooseUsSection from "../../Components/ChooseUs/choose";
import PartnershipSection from "../../Components/Partnership/Partnership";
import ChooseUsAboutSection from "../../Components/ChooseUs/chooseusabout";
import TeamSection from "../../Components/Team/Team";
import GuideBannerSection from "../../Components/Banner/guide";
import ModalVideoSection from "../../Components/Video/video";
import DigitalProcessSection from "../../Components/DigitalProcess/digitalstep";
import TestimonialSection from "../../Components/Testimonial/testimonial";
import NewsletterSection from "../../Components/Form/Newsletter";

function AboutPage(){
    return(
        <>
            <HeadTitle title="À Propos - 7Synergo - Coaching de Vie, Psychologie & Sport"/>
            <BannerInnerSection title="À Propos de Synergo" currentPage="À Propos" />
            <AboutSection />
            <ChooseUsSection />
            {/* <PartnershipSection /> */}
            {/* <ChooseUsAboutSection /> */}
            {/* <GuideBannerSection /> */}
            <ModalVideoSection />
            {/* <TeamSection /> */}
            <DigitalProcessSection />
            <TestimonialSection />
            <NewsletterSection />
        </>
    );
}

export default AboutPage;