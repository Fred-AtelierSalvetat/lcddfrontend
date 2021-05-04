import React from 'react';
import { ReactComponent as Logo_error } from '~/assets/logos/Logo_error.svg';
import "./ErrorForm.css";

const ErrorForm = (props) => {

    const RedirectionVideo = () => {
        props.history.push('/questions/'); // Redirect to contact
    }

    const RedirectionTV = () => {
        props.history.push('/webTV'); // Redirect to contact
    }

    const RedirectionNousContacter = () => {
        props.history.push('/contact'); // Redirect to contact
    }

    return (
        <div>
            <div className="text_display2">Oups!</div>
            <div className="text_h1_heading">Something went wrong. We are working on it.</div>
            <div className="text_h3_heading">Where to go from here:</div>

            <div onClick={RedirectionVideo} className="link_video">
                Trouvez des reponses en videos a Vos questions
            </div>
            <div onClick={RedirectionTV} className="link_tv">
                Regadrez des ateliers a notre WebTV
                </div>
            <div onClick={RedirectionNousContacter} className="link_contact">
                Nous contacter
            </div>
            <Logo_error
                className="image"
                title="Logo_error"
            />
        </div>
    );
};

export default ErrorForm;
