import React, { FC, useState } from 'react';

import Select from 'react-select';
import { Container, Row, Col, Form, CardDeck } from 'react-bootstrap';
import './Questions.style.css';
import Cards from './Cards';

const YourQuestions: FC = () => {
    const [active, setActive] = useState({
        linkOne: true,
        linkTwo: false,
        linkThree: false,
    });
    const data = [
        { value: 1, label: 'Arbitrage' },
        { value: 2, label: 'Associations et fondations' },
        { value: 3, label: 'Assurances' },
        { value: 4, label: 'Banque et bourse' },
        { value: 5, label: 'affaires et concurence' },
        { value: 6, label: 'Crédit et consommation' },
        { value: 7, label: 'Dommages corporels' },
        { value: 8, label: "Droit international et de l'Union Européenne" },
        { value: 9, label: 'Droit public' },
        { value: 10, label: 'Droit rural' },
        { value: 11, label: 'Envionnement' },
        { value: 12, label: 'Etrangers et nationalité' },
        { value: 13, label: 'Famille, personnes et patrimoine' },
        { value: 14, label: 'Fiducie' },
        { value: 15, label: 'Fiscalité et douane' },
        { value: 16, label: "Garanties, sûretés et mesures d'exécution" },
        { value: 17, label: 'Immobilier' },
        { value: 18, label: 'Pénal' },
        { value: 19, label: "Procédure d'appel" },
        { value: 20, label: 'Propriété intellectuelle' },
        { value: 21, label: 'Santé' },
        { value: 22, label: 'Sécurité sociale et protection sociale' },
        { value: 23, label: 'Sociétés' },
        { value: 24, label: 'Sport' },
        { value: 25, label: 'Technologie et informatique' },
        { value: 26, label: 'Transport' },
        { value: 27, label: 'Travail' },
    ];

    const [selectedValue, setSelectedValue] = useState([]);

    const handleChange = (e) => {
        setSelectedValue(Array.isArray(e) ? e.map((x) => x.value) : []);
    };
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
                            <h3>Questions en </h3>
                            <h3>vidéo</h3>
                            <Form className="search-form">
                                <Form.Group controlId="formGroupEmail">
                                    <Form.Label className="formLabel">
                                        <img src="/search.svg" alt="" />
                                    </Form.Label>
                                    <Form.Control type="search" placeholder="Entrer votre question ici" />
                                </Form.Group>
                            </Form>
                        </div>
                        <div className="select">
                        <Select
                            className="dropdown"
                            placeholder="Selectionner thematique"
                            value={data.filter(obj => selectedValue.includes(obj.value))}
                            options={data}
                            onChange={handleChange}
                            isMulti
                            isClearable/>
                        </div>
                        <CardDeck>
                            <Cards />
                        </CardDeck>
                    </Container>
                </Col>
            </Row>
        </Container>
    );
};

export default YourQuestions;
