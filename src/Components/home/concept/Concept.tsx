import React, { FC, Fragment } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import './Concept.css';

const ConceptComponent: FC = () => {
    return (
        <div id="overlay" className=" d-flex flex-column justify-content-center">
            <Container className="mb-5">
                <div id="concept__header" className="display-1 text-shadow">
                    Le Droit en Questions
                </div>
                <h3 className="text-shadow" style={{ textAlign: 'center' }}>
                    Des réponses simples à vos questions de droit les plus compliquées
                </h3>
            </Container>
            <Row className="concept__input">
                <Col>
                    <Form className="search-form-concept">
                        <Form.Group id="concept__form" controlId="formGroupSearch">
                            <Form.Label className="form-label-concept">
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
