import React, { FC, useState } from 'react';
import { Button } from 'react-bootstrap';
import SignInLostPasswordEmailSentModal from './SignInLostPasswordEmailSentModal';
import SignInLostPasswordModal from './SignInLostPasswordModal';
import SignInModal from './SignInModal';
import SignInResetPasswordModal from './SignInResetPasswordModal';
import './SignIn.scss';

const SignInContainer: FC = () => {
    const [showSignIn, setShowSignIn] = useState(false);
    const [showSignInLostPassword, setShowSignInLostPassword] = useState(false);
    const [showSignInResetPassword, setShowSignInResetPassword] = useState(false);
    const [showSignInLostPasswordEmailSent, setShowSignInLostPasswordEmailSent] = useState(false);

    const onHandleClick = () => {
        setShowSignIn(true);
    };

    const onHandleClose = () => {
        setShowSignIn(false);
        setShowSignInLostPassword(false);
        setShowSignInResetPassword(false);
        setShowSignInLostPasswordEmailSent(false);
    };

    const onSignUpLinkClick = () => {
        setShowSignIn(false);
    };

    const onLostPasswordClick = () => {
        setShowSignIn(false);
        setShowSignInLostPassword(true);
    };

    const onLostPasswordSubmit = () => {
        setShowSignInLostPassword(false);
        setShowSignInLostPasswordEmailSent(true);
    };

    const onSignInClick = () => {
        setShowSignIn(true);
        setShowSignInLostPassword(false);
    };

    return (
        <div>
            <Button variant="outline-primary" id="connexion-btn" onClick={onHandleClick}>
                Se connecter
            </Button>

            <SignInModal
                show={showSignIn}
                onHandleClose={onHandleClose}
                onSignUpLinkClick={onSignUpLinkClick}
                onLostPasswordClick={onLostPasswordClick}
            />

            <SignInLostPasswordModal
                show={showSignInLostPassword}
                onHandleClose={onHandleClose}
                onHandleSubmit={onLostPasswordSubmit}
                onSignInClick={onSignInClick}
            />

            <SignInResetPasswordModal show={showSignInResetPassword} onHandleClose={onHandleClose} />

            <SignInLostPasswordEmailSentModal show={showSignInLostPasswordEmailSent} onHandleClose={onHandleClose} />
        </div>
    );
};

export default SignInContainer;
