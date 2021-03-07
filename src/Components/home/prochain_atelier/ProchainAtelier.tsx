import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import Calendar from './../../../assets/icons/calendar.png';



const backgroundTransparency = {
    backgroundColor: 'rgba(17,63,89,0.9)',
    align: 'center',
};

const textContainer = {
    color: '#FFFFFF',
    textShadow: '1px 1px 2px black',
    size: '30px',
    marginLeft: '185px',
    marginBottom: '30px',
    marginTop: '20px'
};

const link = {
    width: '82px',
    height: '24px',
    style: 'normal',
    color: '#113F59',
    size: '21px',
    weight: '600',
    innerHeight: '24px',

};

const ateliertitle = {
    size: '21px',
    weight: '350',
    style: 'normal',
    innerHeight: '23px',
    width: '111px',
    height: '23px',
    color: '#113F59',

};

const date = {
    size: '16px',
    weight: '600',
    style: 'normal',
    innerHeight: '23px',
    width: '192px',
    height: '24px',
    color: '#113F59',

};

const styledCard = {
    width: '1140px',
    height: '87px',
    marginLeft: '170px',
    marginBottom: '50px',
};

const seeMore = {
    color: '#20D6C7',
    position: 'absolute'
};


// eslint-disable-next-line @typescript-eslint/ban-types
const ProchainAtelierComponent: React.FC<{}> = () => {
    return (
        <div>
            <Card>
                <div style={backgroundTransparency}>
                    <Row>
                        <h4 style={textContainer}>Prochain Atelier</h4>
                    </Row>
                    <div>
                        <Card style={styledCard}>
                            <div style={{ margin: '15px' }}>
                                <Row>
                                    <Col xs="11">
                                        <p style={ateliertitle}>Atelier titre</p>
                                        <p style={date}>20 Mai 2020 : 15:30 - 18:30</p>
                                    </Col>
                                    <Col xs="1" >
                                        <a href="/"><img src={Calendar} alt="calendar" /></a>
                                        <a style={link} href="/">Reserver</a>
                                    </Col>
                                </Row>
                            </div>
                        </Card>
                    </div>
                </div>
            </Card>
        </div>
    );
};

export default ProchainAtelierComponent;
