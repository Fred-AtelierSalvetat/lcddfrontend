import React from 'react';
import { Jumbotron, Container, Row, Col } from 'react-bootstrap';
import Concept from './../../../assets/home/atelier.jpg';
import Icon5 from './../../../assets/home/5.jpg';
import Icon6 from './../../../assets/home/6.jpg';
import Icon7 from './../../../assets/home/7.jpg';
import Icon8 from './../../../assets/home/8.jpg';



const jumbotron = {
    backgroundImage: `url(${Concept})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'top',
    minHeight: '50vw',
    marginBottom: 0,
};

const backgroundTransparency = {
    backgroundColor: 'rgba(17,63,89,0.9)',
}

const title = {
    textAlign: 'left' as 'left',
    marginLeft: 30,
    marginTop: 30,
    fontSize: '3vw',
    color: 'white',
};

const subtitle = {
    textAlign: 'left' as 'left',
    marginBottom: 30,
    marginLeft: 40,
    color: 'white',
};

const link = {
    textAlign: 'right' as 'right',
};

const enumeration = {
    color: '#00BFFF	',
    fontSize: 40
}

const icon = {
    Width: 70,
    height: 40,
    margin: 10
}

const text = {
    color: 'white'
}


// eslint-disable-next-line @typescript-eslint/ban-types
const AteliersComponent: React.FC<{}> = () => {
    return (
        <Jumbotron fluid style={jumbotron} className="d-flex flex-column justify-content-center">
            <Container fluid>
                <Row>
                    <Col xs="6" style={backgroundTransparency}>
                        <Row>
                            <Col xs="8">
                                <p style={title}>Les Ateliers</p>
                            </Col>
                            <Col style={{ margin: '50px' }}>
                                <a href="/" style={link}>voir plus</a>
                            </Col>
                        </Row>
                        <Row><Col><p style={subtitle}>en direct</p></Col></Row>
                        <Row style={{ paddingBottom: '30px' }}>
                            <Col xs="1">
                            </Col>
                            <Col xs="11">
                                <div>  <img style={icon} src={Icon5} alt="icon5" />
                                    <a style={enumeration}> 1. </a>  <a style={text}> Vous avez une question de droit</a>  </div>
                                <div> <a style={enumeration}> 2. </a> <a style={text}>Nous vous proposons des réponses claires en vidéo</a>
                                    <img style={icon} src={Icon6} alt="icon6" />
                                </div>
                                <div> <img style={icon} src={Icon7} alt="icon7" /> <a style={enumeration}> 3. </a> <a style={text}>Vous visionnez la réponse qui vpis convient</a> </div>
                                <div>  <a style={enumeration}> 4. </a> <a style={text}>Et vous pouvez aussi nous suggérer une nouvelle question</a>
                                    <img style={icon} src={Icon8} alt="icon8" />
                                </div>

                            </Col>
                        </Row>
                    </Col>
                    <Col>
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );
};

export default AteliersComponent;
