import React, { FC } from 'react';
import { Jumbotron, Container, Row, Col } from 'react-bootstrap';
import Concept from './../../assets/home/question.jpg';

const jumbotron = {
    backgroundImage: `url(${Concept})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'top',
    minHeight: '50vw',
    marginBottom: 0,
};

const SignIn: FC<{}> = () => {
    return (
        <Jumbotron fluid style={jumbotron} className="d-flex flex-column justify-content-center">
            <Container fluid>

            </Container>
        </Jumbotron>
    );
};

export default SignIn;
