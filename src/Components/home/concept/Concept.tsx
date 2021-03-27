import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import "./Concept.css";



// eslint-disable-next-line @typescript-eslint/ban-types
const ConceptComponent: React.FC<{}> = () => {
    return (
        <div id="overlay" className=" d-flex flex-column justify-content-center">
            <Container className="mb-5">
                <div className="display-1 text-shadow">Le Droit en Questions</div>
                <h3 className="text-shadow" style={{ textAlign: 'center' }}>Des réponses simples à vos questions de droit les plus compliquées</h3>
            </Container>
            <Row style={{ width: '100%' }}>
                <Col md={{ span: 8, offset: 2 }}>
                    <Form className="search-form-concept">
                        <Form.Group controlId="formGroupSearch">
                            <Form.Label className="form-label">
                                <img className="search-icon" src="./search.svg" alt="" />
                            </Form.Label>
                            <Form.Control className="form" type="search" placeholder="Entrer votre question ici" />
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </div>
    );
};

export default ConceptComponent;
