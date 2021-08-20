import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Form } from 'react-bootstrap';
import PropTypes from 'prop-types';
import validator from '~/util/validator';
import { FormFeedback } from '../shared/form/FormFeedBack';
import OverlayModal from '../shared/modals/OverlayModal';

const propTypes = {
    show: PropTypes.bool.isRequired,
    onHandleClose: PropTypes.func.isRequired,
    onHandleSubmit: PropTypes.func.isRequired,
    onSignInClick: PropTypes.func.isRequired,
};
const SignInLostPasswordModal: FC<PropTypes.InferProps<typeof propTypes>> = ({
    show,
    onHandleClose,
    onHandleSubmit,
    onSignInClick,
}) => {
    const { register, handleSubmit, errors } = useForm();

    const header = (
        <div className="login-header">
            <h1>J'ai oublié mon mot de passe</h1>
            <div className="link" onClick={onSignInClick}>
                Retourner à la page de connexion
            </div>
        </div>
    );

    const body = (
        <div className="login-body">
            <h4 style={{ textAlign: 'left', marginBottom: '2rem' }}>
                Remplir votre adresse e-mail pour réinitialiser votre mot de passe.
            </h4>
            <div className="login-form">
                <Form onSubmit={handleSubmit(onHandleSubmit)}>
                    <Form.Group controlId="loginFormEmail">
                        {/* <Form.Label>Adresse e-mail</Form.Label> */}
                        <Form.Control
                            autoFocus
                            type="text"
                            name="email"
                            ref={register(validator.email)}
                            isInvalid={!!errors.email}
                            aria-invalid={!!errors.email}
                            placeholder="Adresse e-mail"
                        />
                        <FormFeedback field={errors.email} />
                    </Form.Group>

                    <Button variant="primary" type="submit" style={{ width: '100%', marginTop: '3rem' }}>
                        Envoyer
                    </Button>
                </Form>
            </div>
        </div>
    );

    return <OverlayModal show={show} onHide={onHandleClose} header={header} body={body} />;
};
SignInLostPasswordModal.propTypes = propTypes;

export default SignInLostPasswordModal;
