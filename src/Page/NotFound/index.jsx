import React from "react";
import HeadTitle from "../../Components/Head/HeadTitle";
import NotFoundSection from "../../Components/NotFound/notfound";

function NotFoundPage(){
    return(
        <>
            <HeadTitle title="Erreur 404 - 7Synergo - Coaching de Vie, Psychologie & Sport" />
            <NotFoundSection />
        </>
    );
}

export default NotFoundPage;