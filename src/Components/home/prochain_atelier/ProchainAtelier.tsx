import React from 'react';
import { Jumbotron, Container, Row, Col } from 'react-bootstrap';


const jumbotron = {
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'top',
    minHeight: '10vw',
    marginBottom: 0,
    backgroundColor: ""
};

const backgroundTransparency = {
    backgroundColor: 'rgba(17,63,89,0.9)',
}

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
    position: 'left'
};

// eslint-disable-next-line @typescript-eslint/ban-types
const ProchainAtelierComponent: React.FC<{}> = () => {
    return (
        <Jumbotron fluid style={jumbotron} className="d-flex flex-column justify-content-center">
            <Container>
            <Row>
                    <Col  style={backgroundTransparency}>
                <h4 style={textContainer}>Prochain Atelier</h4>
                </Col>
                </Row>
            </Container>
            </Jumbotron>
        

    );
};

export default ProchainAtelierComponent;
