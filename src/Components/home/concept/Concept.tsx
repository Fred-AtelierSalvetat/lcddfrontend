import React from 'react';
import { Jumbotron, Container, Row, Col, Form } from 'react-bootstrap';
import Concept from './../../../assets/home/concept.jpg';

const textContainer = {
    color: 'white',
    fontFamily: 'Segoe UI',
    textShadow: '1px 1px 2px black',
};

const jumbotron = {
    backgroundImage: `url(${Concept})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'top',
    minHeight: '50vw',
    marginBottom: 0,
};

const title = {
    fontFamily: 'Segoe UI',
    fontStyle: 'normal',
    fontWeight: 300,
    fontSize: '7vw',
};

// eslint-disable-next-line @typescript-eslint/ban-types
const ConceptComponent: React.FC<{}> = () => {
    return (
        <Jumbotron fluid style={jumbotron} className="d-flex flex-column justify-content-center">
            <Container style={textContainer}>
                <h1 style={title}>Le Droit en Questions</h1>
                <p>Des réponses simples à vos questions de droit les plus compliquées</p>
            </Container>
            <Row style={{ width: '100%' }}>
                <Col md={{ span: 8, offset: 2 }}>
                    <Form.Control type="text" placeholder="Entrer votre question ici" />{' '}
                </Col>
            </Row>
        </Jumbotron>
    );
};

export default ConceptComponent;
