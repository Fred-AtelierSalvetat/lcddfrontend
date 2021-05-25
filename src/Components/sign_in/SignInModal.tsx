import React from 'react';
import { Redirect } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { connect, useDispatch, useSelector } from 'react-redux';
import { userActions } from '~/state/user/user.actions';
import { Validator } from '~/util/validator';
import { FranceConnectButton } from '../shared/buttons/FranceConnectButton';
import { FormFeedback } from '../shared/form/FormFeedBack';
import OverlayModal from '../shared/modals/OverlayModal';
import RoundSpinner from '../shared/RoundSpinner';
import { isCurrentUserLoggedIn } from '~/state/reducers';

const FranceConnectLoginButton = ({ text }) => {
    return <FranceConnectButton text={text} style={{ width: '100%' }} />;
};

const LoginOptions = () => {
    return (
        <div className="login-options">
            <FranceConnectLoginButton text="S'identifier avec"></FranceConnectLoginButton>
            <h4 style={{ backgroundColor: 'white', maxWidth: '100%', margin: '24px 0', textAlign: 'center' }}>
                ––&nbsp;Ou s'identifier avec votre compte&nbsp;––
            </h4>
        </div>
    );
};

const SignInModal = ({ show, onHandleClose, onSignUpLinkClick, onLostPasswordClick, ...props }) => {
    const { register, handleSubmit, errors } = useForm();

    const dispatch = useDispatch();

    const isLoggedIn = useSelector(isCurrentUserLoggedIn);

    const onHandleSummit = (data: any) => {
        dispatch(userActions.login(data.email, data.password));
        return false;
    };

    const header = (
        <div className="login-header">
            <h1>S'identifier</h1>
            <div className="lead">Vous n'êtes pas encore inscrit ?</div>
            <div className="lead">
                Inscrivez-vous{' '}
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
                            ref={register(Validator.email)}
                            isInvalid={errors.email}
                        />
                        <FormFeedback field={errors.email}></FormFeedback>
                    </Form.Group>

                    <Form.Group controlId="loginFormPassword">
                        <Form.Label>Mot de passe</Form.Label>
                        <Form.Control
                            type="password"
                            name="password"
                            ref={register(Validator.loginPassword)}
                            isInvalid={errors.password}
                        />
                        <FormFeedback field={errors.password}></FormFeedback>
                    </Form.Group>

                    <div style={{ textAlign: 'right' }} className="link" onClick={onLostPasswordClick}>
                        J'ai oublié mon mot de passe
                    </div>

                    <Form.Group controlId="loginFormCheckbox">
                        <Form.Check type="checkbox" label="Se souvenir de moi"></Form.Check>
                    </Form.Group>

                    <Button variant="primary" type="submit" style={{ width: '100%', marginTop: '1rem' }}>
                        S'identifier
                        {props.loggingIn && (
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

const mapState = (state) => {
    const { loggingIn } = state.authentication;
    return { loggingIn };
};

const actionCreators = {
    login: userActions.login,
};

const connectedInterestsPage = connect(mapState, actionCreators)(SignInModal);

export default connectedInterestsPage;
