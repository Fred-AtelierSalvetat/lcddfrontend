import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, Form } from 'react-bootstrap';
import { Validator } from '~/util/validator';
import { FormFeedback } from '../shared/form/FormFeedBack';
import OverlayModal from '../shared/modals/OverlayModal';

const SignInLostPasswordModal = ({ show, onHandleClose, onHandleSubmit, onSignInClick }) => {
    
    const { register, handleSubmit, errors } = useForm();

    const header =
        <div className="login-header">
            <h1>J'ai oublié mon mot de passe</h1>
            <div className="link" onClick={onSignInClick}>
                Retourner à la page de connexion
            </div>
        </div>;

    const body =
        <div className="login-body">
            <h4 style={{ textAlign: "left" }}>Remplir votre adresse e-mail pour réinitialiser votre mot de passe.</h4>
            <div className="login-form">
                <Form className="login-form" onSubmit={handleSubmit(onHandleSubmit)}>
                    <Form.Group controlId="loginFormEmail">
                        <Form.Label>Adresse e-mail</Form.Label>
                        <Form.Control
                            autoFocus
                            type="text"
                            name="email"
                            ref={register(Validator.email)}
                            isInvalid={errors.email}
                        />
                        <FormFeedback field={errors.email}></FormFeedback>
                    </Form.Group>

                    <Button variant="primary" type="submit" style={{ width: "100%", marginTop: "57px" }}>
                        Envoyer
                    </Button>
                </Form>
            </div>
        </div>;

    return (
        <OverlayModal
            show={show}
            onHide={onHandleClose}
            header={header}
            body={body}
        />
    );
};

export default SignInLostPasswordModal;
