import React from 'react';
import { Button } from 'react-bootstrap';
import { ReactComponent as EmailIcon } from '~/assets/icons/mail_24px.svg';
import OverlayModal from '../shared/modals/OverlayModal';

const SignInLostPasswordEmailSentModal = ({ show, onHandleClose }) => {

    const body =
        <div className="login-body">
            <div style={{ textAlign: "center" }}>
                <EmailIcon style={{ marginBottom: "67px" }} />
            </div>
            <h1 style={{ marginBottom: "24px" }}>Un e-mail vous sera envoyé</h1>
            <h4 style={{ marginBottom: "64px" }}>Vous recevrez sous peu un e-mail contenant un lien de réinitialisation du mot de passe.</h4>
            <p style={{ marginBottom: "24px" }}>Si vous n'avez pas reçu l'e-mail, cliquez sur Renvoyer</p>
            <Button variant="primary" type="submit" style={{ width: "100%" }}>
                Renvoyer
            </Button>
        </div>;


    return (
        <OverlayModal
            show={show}
            onHide={onHandleClose}
            header={body}
        />
    );
};

export default SignInLostPasswordEmailSentModal;
