import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import "./Concept.css";



// eslint-disable-next-line @typescript-eslint/ban-types
const ConceptComponent: React.FC<{}> = () => {
    return (
        <div id="overlay" className=" d-flex flex-column justify-content-center">
            <Container className="textContainer">
                <h1 className="title">Le Droit en Questions</h1>
                <p className="sub-title">Des réponses simples à vos questions de droit les plus compliquées</p>
            </Container>
            <Row style={{ width: '100%' }}>
                <Col md={{ span: 8, offset: 2 }}>
                    <Form.Control className="form" type="text" placeholder="Entrer votre question ici" />{' '}
                </Col>
            </Row>
        </div>
    );
};

export default ConceptComponent;
