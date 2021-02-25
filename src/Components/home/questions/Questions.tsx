import React from 'react';
import { Jumbotron, Container, Row, Col } from 'react-bootstrap';
import Concept from './../../../assets/home/question.jpg';
import Icon1 from './../../../assets/home/1.jpg';
import Icon2 from './../../../assets/home/2.jpg';
import Icon3 from './../../../assets/home/3.jpg';
import Icon4 from './../../../assets/home/4.jpg';




const jumbotron = {
    backgroundImage: `url(${Concept})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'top',
    marginBottom: 0,
};

const backgroundTransparency = {
    backgroundColor: 'rgba(255,255,255,0.9)',
}

const title = {
    textAlign: 'left' as 'left',
    marginLeft: 30,
    marginTop: 30,
    fontSize: '4vw',
};

const subtitle = {
    textAlign: 'left' as 'left',
    marginBottom: 30,
    marginLeft: 40,
    fontSize: 30
};
const link = {
    textAlign: 'right' as 'right',
    fontSize: 20
};

const icon = {
    Width: 90,
    height: 80,
    margin: 10
}

const enumeration = {
    color: '#00BFFF	',
    fontSize: 50
}

const text = {
    fontSize: 19

}




// eslint-disable-next-line @typescript-eslint/ban-types
const QuestionsComponent: React.FC<{}> = () => {
    return (
        <Jumbotron fluid style={jumbotron} className="d-flex flex-column justify-content-center">
            <Container fluid>
                <Row>
                    <Col xs="6" />
                    <Col style={backgroundTransparency}>
                        <Row>
                            <Col xs="8">
                                <p style={title}>Vos questions</p>
                            </Col>
                            <Col style={{ margin: '50px' }} >
                                <a href="/" style={link}>voir plus</a>
                            </Col>
                        </Row>
                        <Row><Col><p style={subtitle}>c'est simple</p></Col></Row>
                        <Row style={{ paddingBottom: '30px' }}>
                            <Col xs="1">
                            </Col>
                            <Col xs="11">
                                <div>  <img style={icon} src={Icon1} alt="icon1" />
                                    <a style={enumeration}> 1. </a>  <a style={text}> Vous avez une question de droit</a>  </div>
                                <div> <a style={enumeration}> 2. </a> <a style={text}>Nous vous proposons des réponses claires en vidéo</a>
                                    <img style={icon} src={Icon2} alt="icon2" />
                                </div>
                                <div> <img style={icon} src={Icon3} alt="icon3" /> <a style={enumeration}> 3. </a> <a style={text}>Vous visionnez la réponse qui vpis convient</a> </div>
                                <div>  <a style={enumeration}> 4. </a> <a style={text}>Et vous pouvez aussi nous suggérer une nouvelle question</a>
                                    <img style={icon} src={Icon4} alt="icon4" />
                                </div>

                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );
};

export default QuestionsComponent;
