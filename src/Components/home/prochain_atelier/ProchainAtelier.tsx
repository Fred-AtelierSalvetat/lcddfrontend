import React from 'react';
import { Jumbotron, Container, Row, Col, Card } from 'react-bootstrap';
import Calendar from './../../../assets/icons/calendar.png';



const backgroundTransparency = {
    backgroundColor: 'rgba(17,63,89,0.9)',
    align: 'center',
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

const styledCard = {
    width: '1140px',
    height: '87px',
    align: 'center',
    margin: '30px',
    marginLeft: '170px',
    marginBottom: '100px',

};

// eslint-disable-next-line @typescript-eslint/ban-types
const ProchainAtelierComponent: React.FC<{}> = () => {
    return (
        <div>
            <div style={backgroundTransparency}>
                <div>
                    <h4 style={textContainer}>Prochain Atelier</h4>
                </div>
                <div>
                    <Card style={styledCard}>
                        <Row>
                            <Col xs="11">
                                <p >Atelier titre</p>
                                <p>20 Mai 2020 : 15:30 - 18:30</p>
                            </Col>
                            <Col xs="1" style={{ padding: '15px' }}>
                                <a href="/"><img src={Calendar} alt="calendar" /></a>
                                <a href="/">Reserver</a>
                            </Col></Row>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default ProchainAtelierComponent;
