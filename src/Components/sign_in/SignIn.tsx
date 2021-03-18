import React, { FC } from 'react';
import { Jumbotron, Container, Row, Col, Button } from 'react-bootstrap';
import Concept from './../../assets/home/question.jpg';
import { FranceConnectButton } from '../shared/buttons/FranceConnectButton';
import './SignIn.css';

const jumbotron = {
    backgroundImage: `url(${Concept})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'top',
    minHeight: '50vw',
    marginBottom: 0,
};

const LoginHeader = () => {
    return (
        <div>
            <h1>S'identifier</h1>
            <p>Vous n'êtes pas déjà inscrit ?</p>
            <p>Inscrivez-vous ici</p>

        </div>
    );
}

const FranceConnectLoginButton = ({ text }) => {
    return (
        <FranceConnectButton text={text} style={{ width: "100%" }} />
    )
}
const LoginOptions = () => {
    return (
        <>
            <FranceConnectLoginButton text="S'incrire avec"></FranceConnectLoginButton>
            <div style={{ backgroundColor: "white", maxWidth: "100%", margin: "24px 0" }}>
                ––––––&nbsp;&nbsp;Ou s'identifier avec votre compte&nbsp;&nbsp;––––––
            </div>
        </>
    );
}

const LoginForm = () => {
    return (
        <div></div>
    );
}

const SignIn: FC<{}> = () => {
    return (
        <Jumbotron fluid style={jumbotron} className="d-flex flex-column justify-content-center">
            <Container className="container-login">
                <LoginHeader></LoginHeader>
                <LoginOptions></LoginOptions>
                <LoginForm></LoginForm>
            </Container>
        </Jumbotron>
    );
};

export default SignIn;
