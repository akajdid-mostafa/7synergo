import React from "react";
import HeadTitle from "../../Components/Head/HeadTitle";
import BannerInnerSection from "../../Components/Banner/Inner";
import InscriptionForm from "../../Components/Form/InscriptionForm";

function InscriptionPage() {
    return (
        <>
            <HeadTitle title="Inscription - Programme de Transformation Physique 7Synergo" />
            <BannerInnerSection title="Inscription au Programme" currentPage="Inscription" />
            <div className="section">
                <div className="hero-container">
                    <InscriptionForm />
                </div>
            </div>
        </>
    );
}

export default InscriptionPage;

