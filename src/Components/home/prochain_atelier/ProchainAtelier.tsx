import React from 'react';
import { Jumbotron, Container, Row, Col, Card } from 'react-bootstrap';

const jumbotron = {
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'top',
    marginBottom: 0,
    backgroundColor: '',
};

const backgroundTransparency = {
    backgroundColor: 'rgba(17,63,89,0.9)',
};

const textContainer = {
    color: 'white',
    fontFamily: 'Segoe UI',
    textShadow: '1px 1px 2px black',
};

const title = {
    fontFamily: 'Segoe UI',
    fontStyle: 'normal',
    fontWeight: 300,
    fontSize: '7vw',
    position: 'left',
};

const link = {
    textAlign: 'right' as 'right',
};

// eslint-disable-next-line @typescript-eslint/ban-types
const ProchainAtelierComponent: React.FC<{}> = () => {
    return (
        <div>
            <Col style={backgroundTransparency}>
                <Row>
                    <Col xs="8">
                        <h4 style={textContainer}>Prochain Atelier</h4>
                    </Col>
                </Row>
                <Row>
                    <Col xs="8" style={{ marginBottom: '30px' }}>
                        <Card>
                            <Col xs="6">
                                <Row>
                                    <p>Atelier titre</p>
                                </Row>
                                <Row>20 Mai 2020 : 15:30 - 18:30</Row>
                            </Col>
                        </Card>
                    </Col>
                </Row>
            </Col>
        </div>
    );
};

export default ProchainAtelierComponent;
