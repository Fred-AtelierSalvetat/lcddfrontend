import React, { useState } from 'react';

import { Container, Row, Col, Form, Card, CardColumns } from 'react-bootstrap';
import './Questions.style.css';

const YourQuestions: React.FC<any> = () => {
    const [active, setActive] = useState({
        linkOne: true,
        linkTwo: false,
        linkThree: false,
    });

    return (
        <Container fluid>
            <Row>
                <Col md={2} sm={0} className="sideBar">
                    <div className="links desktop">
                        <h5
                            className={`${active.linkOne ? 'active' : ''}`}
                            onClick={() =>
                                setActive({
                                    linkOne: true,
                                    linkTwo: false,
                                    linkThree: false,
                                })
                            }
                        >
                            Questions en vidéo
                        </h5>
                        <h5
                            className={`${active.linkTwo ? 'active' : ''}`}
                            onClick={() =>
                                setActive({
                                    linkOne: false,
                                    linkTwo: true,
                                    linkThree: false,
                                })
                            }
                        >
                            Questions en attente
                        </h5>
                        <h5
                            className={`${active.linkThree ? 'active' : ''}`}
                            onClick={() =>
                                setActive({
                                    linkOne: false,
                                    linkTwo: false,
                                    linkThree: true,
                                })
                            }
                        >
                            Suggérer une question
                        </h5>
                    </div>
                </Col>
                <Col md={10} sm={12} className="content">
                    <Container fluid>
                        <h1>Vos questions</h1>
                        <div className="links mobile">
                            <h5
                                className={`${active.linkOne ? 'active' : ''}`}
                                onClick={() =>
                                    setActive({
                                        linkOne: true,
                                        linkTwo: false,
                                        linkThree: false,
                                    })
                                }
                            >
                                Questions en vidéo
                            </h5>
                            <h5
                                className={`${active.linkTwo ? 'active' : ''}`}
                                onClick={() =>
                                    setActive({
                                        linkOne: false,
                                        linkTwo: true,
                                        linkThree: false,
                                    })
                                }
                            >
                                Questions en attente
                            </h5>
                            <h5
                                className={`${active.linkThree ? 'active' : ''}`}
                                onClick={() =>
                                    setActive({
                                        linkOne: false,
                                        linkTwo: false,
                                        linkThree: true,
                                    })
                                }
                            >
                                Suggérer une question
                            </h5>
                        </div>
                        <div className="search">
                            <h3>Questions en vidéo</h3>
                            <Form className="search-form">
                                <Form.Group controlId="formGroupEmail">
                                    <Form.Label className="formLabel">
                                        <img src="/search.svg" alt="" />
                                    </Form.Label>
                                    <Form.Control type="search" placeholder="Entrer votre question ici" />
                                </Form.Group>
                            </Form>
                        </div>
                        <p>Selectioner thematiques</p>
                        <select name="thematiques">
                            <option value="" style={{ fontSize: '16px', lineHeight: '24px' }}>
                                Selectioner 1 - 4 thematiques
                            </option>
                            <option value="dog">Dog</option>
                            <option value="cat">Cat</option>
                            <option value="hamster">Hamster</option>
                            <option value="parrot">Parrot</option>
                            <option value="spider">Spider</option>
                            <option value="goldfish">Goldfish</option>
                        </select>
                        <CardColumns>
                            <Card>
                                <Card.Img variant="top" src="/cardImage.svg" />
                                <Card.Body>
                                    <Card.Title style={{ fontSize: '18px' }}>Card Title</Card.Title>
                                    <Card.Text style={{ fontSize: '16px' }}>
                                        Some quick example text to build on the card title and make up the bulk of the
                                        card's content.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card>
                                <Card.Img variant="top" src="/cardImage.svg" />
                                <Card.Body>
                                    <Card.Title style={{ fontSize: '18px' }}>Card Title</Card.Title>
                                    <Card.Text style={{ fontSize: '16px' }}>
                                        Some quick example text to build on the card title and make up the bulk of the
                                        card's content.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card>
                                <Card.Img variant="top" src="/cardImage.svg" />
                                <Card.Body>
                                    <Card.Title style={{ fontSize: '18px' }}>Card Title</Card.Title>
                                    <Card.Text style={{ fontSize: '16px' }}>
                                        Some quick example text to build on the card title and make up the bulk of the
                                        card's content.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card>
                                <Card.Img variant="top" src="/cardImage.svg" />
                                <Card.Body>
                                    <Card.Title style={{ fontSize: '18px' }}>Card Title</Card.Title>
                                    <Card.Text style={{ fontSize: '16px' }}>
                                        Some quick example text to build on the card title and make up the bulk of the
                                        card's content.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card>
                                <Card.Img variant="top" src="/cardImage.svg" />
                                <Card.Body>
                                    <Card.Title style={{ fontSize: '18px' }}>Card Title</Card.Title>
                                    <Card.Text style={{ fontSize: '16px' }}>
                                        Some quick example text to build on the card title and make up the bulk of the
                                        card's content.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card>
                                <Card.Img variant="top" src="/cardImage.svg" />
                                <Card.Body>
                                    <Card.Title style={{ fontSize: '18px' }}>Card Title</Card.Title>
                                    <Card.Text style={{ fontSize: '16px' }}>
                                        Some quick example text to build on the card title and make up the bulk of the
                                        card's content.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card>
                                <Card.Img variant="top" src="/cardImage.svg" />
                                <Card.Body>
                                    <Card.Title style={{ fontSize: '18px' }}>Card Title</Card.Title>
                                    <Card.Text style={{ fontSize: '16px' }}>
                                        Some quick example text to build on the card title and make up the bulk of the
                                        card's content.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card>
                                <Card.Img variant="top" src="/cardImage.svg" />
                                <Card.Body>
                                    <Card.Title style={{ fontSize: '18px' }}>Card Title</Card.Title>
                                    <Card.Text style={{ fontSize: '16px' }}>
                                        Some quick example text to build on the card title and make up the bulk of the
                                        card's content.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </CardColumns>
                    </Container>
                </Col>
            </Row>
        </Container>
    );
};

export default YourQuestions;
