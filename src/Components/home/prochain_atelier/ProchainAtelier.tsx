import React from 'react';
import { Row, Col, Card, Container } from 'react-bootstrap';
import Calendar from './../../../assets/icons/calendar.png';
import "./ProchainAtelier.css";


// eslint-disable-next-line @typescript-eslint/ban-types
const ProchainAtelierComponent: React.FC<{}> = () => {
    return (
        <div id="prochain-atelier-container" className="justify-content-center d-flex flex-column">
            <Container className="container-bb">
                <p className="p-atelier-title">Prochain Atelier</p>
            </Container>

            <div className="styled-card">
                <Row className="info">
                    <Col className="ml-2 mt-2" xs="9">
                        <p className="atelier-title">Atelier titre</p>
                        <p className="date">20 Mai 2020 : 15:30 - 18:30</p>
                    </Col>
                    <Col xs="2" >
                        <div className="mt-3 ml-1">
                            <a href="/"><img className="icon-reserve" src={Calendar} alt="calendar" /></a>
                            <p><a className="link-to-reserve ml-5" href="/">Reserver</a></p>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>

    );
};

export default ProchainAtelierComponent;
