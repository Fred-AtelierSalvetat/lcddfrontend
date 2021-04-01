import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Calendar from './../../../assets/icons/calendar.png';
import "./ProchainAtelier.css";


// eslint-disable-next-line @typescript-eslint/ban-types
const ProchainAtelierComponent: React.FC<{}> = () => {
    return (
        <div id="prochain-atelier-container" className="d-flex justify-content-center flex-wrap">
            <Container>
                <h1 className=" mb-4 mt-3" style={{ color: '#FFFFFF', textAlign: 'left' }}>Prochain Atelier</h1>
            </Container>

            <div className="styled-card">
                <Row className="info">
                    <Col className="ml-2 mt-2" xs="9">
                        <h3 style={{ color: '#113F59', textAlign: 'left' }}>Atelier titre</h3>
                        <p className="date">20 Mai 2020 : 15:30 - 18:30</p>
                    </Col>
                    <Col xs="2" >
                        <div className="mt-3 ml-1">
                            <a href="/"><img className="icon-reserve" src={Calendar} alt="calendar" /></a>
                            <div><a className="link-to-reserve ml-3" href="/">Reserver</a></div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>

    );
};

export default ProchainAtelierComponent;
