import React, { FC } from 'react';
import { Redirect } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { connect, useDispatch, useSelector } from 'react-redux';
import { userActions } from '~/state/user/user.actions';
import { validator } from '~/util/validator';
import { FranceConnectButton } from '../shared/buttons/FranceConnectButton';
import { FormFeedback } from '../shared/form/FormFeedBack';
import OverlayModal from '../shared/modals/OverlayModal';
import RoundSpinner from '../shared/RoundSpinner';
import { isCurrentUserLoggedIn } from '~/state/reducers';

import PropTypes from 'prop-types';

const franceConnectLoginButtonPropTypes = { text: PropTypes.string.isRequired };
const FranceConnectLoginButton: FC<PropTypes.InferProps<typeof franceConnectLoginButtonPropTypes>> = ({ text }) => {
    return <FranceConnectButton text={text} style={{ width: '100%' }} />;
};
FranceConnectLoginButton.propTypes = franceConnectLoginButtonPropTypes;

const LoginOptions = () => {
    return (
        <div className="login-options">
            <FranceConnectLoginButton text="S'identifier avec"></FranceConnectLoginButton>
            <h4 style={{ backgroundColor: 'white', maxWidth: '100%', margin: '24px 0', textAlign: 'center' }}>
                {"–– Ou s'identifier avec votre compte ––"}
            </h4>
        </div>
    );
};
const signInModalPropTypes = {
    show: PropTypes.bool.isRequired,
    onHandleClose: PropTypes.func.isRequired,
    onSignUpLinkClick: PropTypes.func.isRequired,
    onLostPasswordClick: PropTypes.func.isRequired,
    loggingIn: PropTypes.bool,
};

type SignInFormData = {
    email: string;
    password: string;
};
const SignInModal: FC<PropTypes.InferProps<typeof signInModalPropTypes>> = ({
    show,
    onHandleClose,
    onSignUpLinkClick,
    onLostPasswordClick,
    loggingIn,
}) => {
    const { register, handleSubmit, errors } = useForm<SignInFormData>();

    const dispatch = useDispatch();

    const isLoggedIn = useSelector(isCurrentUserLoggedIn);

    const onHandleSummit: (data: SignInFormData) => void = (data) => {
        dispatch(userActions.login(data.email, data.password));
        return false;
    };

    const header = (
        <div className="login-header">
            <h1>{"S'identifier"}</h1>
            <div className="lead">{"Vous n'êtes pas encore inscrit ?"}</div>
            <div className="lead">
                {'Inscrivez-vous '}
                <a href="/sign-up" className="link" onClick={onSignUpLinkClick}>
                    ici
                </a>
            </div>
        </div>
    );

    const body = (
        <div className="login-body">
            <LoginOptions></LoginOptions>
            <div className="login-form">
                <Form className="login-form" onSubmit={handleSubmit(onHandleSummit)}>
                    <Form.Group controlId="loginFormEmail">
                        <Form.Label>Adresse e-mail</Form.Label>
                        <Form.Control
                            autoFocus
                            type="text"
                            name="email"
                            ref={register(validator.email)}
                            isInvalid={!!errors.email}
                            aria-invalid={!!errors.email}
                        />
                        <FormFeedback field={errors.email}></FormFeedback>
                    </Form.Group>

                    <Form.Group controlId="loginFormPassword">
                        <Form.Label>Mot de passe</Form.Label>
                        <Form.Control
                            type="password"
                            name="password"
                            ref={register(validator.loginPassword)}
                            isInvalid={!!errors.password}
                            aria-invalid={!!errors.password}
                        />
                        <FormFeedback field={errors.password}></FormFeedback>
                    </Form.Group>

                    <div style={{ textAlign: 'right' }} className="link" onClick={onLostPasswordClick}>
                        {"J'ai oublié mon mot de passe"}
                    </div>

                    <Form.Group controlId="loginFormCheckbox">
                        <Form.Check type="checkbox" label="Se souvenir de moi"></Form.Check>
                    </Form.Group>

                    <Button variant="primary" type="submit" style={{ width: '100%', marginTop: '1rem' }}>
                        {"S'identifier"}
                        {loggingIn && (
                            <span style={{ marginLeft: '5px' }}>
                                <RoundSpinner size="sm" />
                            </span>
                        )}
                    </Button>
                </Form>
            </div>
        </div>
    );

    return isLoggedIn ? (
        <Redirect to="/questions" />
    ) : (
        <OverlayModal show={show} onHide={onHandleClose} header={header} body={body} />
    );
};
SignInModal.propTypes = signInModalPropTypes;

const mapState = (state) => {
    const { loggingIn } = state.authentication;
    return { loggingIn };
};

const actionCreators = {
    login: userActions.login,
};

const connectedInterestsPage = connect(mapState, actionCreators)(SignInModal);

export default connectedInterestsPage;
