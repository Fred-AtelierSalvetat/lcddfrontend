import React, { FC, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Icon1 from '~/assets/home/question/1.svg';
import Icon2 from '~/assets/home/question/2.svg';
import Icon3 from '~/assets/home/question/3.svg';
import Icon4 from '~/assets/home/question/4.svg';
import './VosQuestions.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const VosQuestionsComponent: FC = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);
    return (
        <div data-aos="slide-up" className="container-question">
            <div className="row">
                <div className="col-6"></div>
                <div className="col-6 background-transparency-question">
                    <div className="mb-5">
                        <Row>
                            <Col xs="6" className="display-4 mt-4" style={{ color: '#113F59' }}>
                                Vos questions
                            </Col>
                            <Col xs="3" className="mt-5 ml-5" style={{ textDecoration: 'underline' }}>
                                <a href="/" className="link">
                                    Voir plus
                                </a>
                            </Col>
                        </Row>

                        <h2 className="ml-4" style={{ textAlign: 'left', color: '#333333', opacity: '0.8' }}>
                            {"C'est simple"}
                        </h2>
                    </div>
                    <Container fluid style={{ marginLeft: '130px' }}>
                        <Row className="mb-4">
                            <img className="icon-questions mr-5 mt-3" src={Icon1} alt="icon1" />
                            <div className="display-1 mr-4 enum">1.</div>
                            <h4 className="text-question mt-5">Vous avez une question de droit.</h4>
                        </Row>
                        <Row className="mb-4">
                            <div className="display-1 mr-4 enum">2.</div>
                            <h4 className="text-question mr-3 mt-3">
                                Nous vous proposons des réponses claires en vidéo.
                            </h4>
                            <img className="icon-questions mt-1" src={Icon2} alt="icon2" />
                        </Row>
                        <Row className="mb-4">
                            <img className="icon-questions mr-5 mt-3" src={Icon3} alt="icon3" />
                            <div className="display-1 mr-4 enum">3.</div>
                            <h4 className="text-question mt-3">Vous visionnez la réponse qui vous correspond.</h4>
                        </Row>
                        <Row>
                            <div className="display-1 mr-4 enum">4.</div>
                            <h4 className="text-question mr-3 mt-3">
                                Et vous pouvez aussi nous suggérer une nouvelle question.
                            </h4>
                            <img className="icon-questions mt-1" src={Icon4} alt="icon4" />
                        </Row>
                    </Container>
                </div>
            </div>
        </div>
    );
};

export default VosQuestionsComponent;
