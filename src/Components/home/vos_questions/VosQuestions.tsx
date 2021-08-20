import React, { FC } from 'react';
import { Container, Row } from 'react-bootstrap';
import Icon1 from '~/assets/home/question/1.svg';
import Icon2 from '~/assets/home/question/2.svg';
import Icon3 from '~/assets/home/question/3.svg';
import Icon4 from '~/assets/home/question/4.svg';
import './VosQuestions.css';
import 'aos/dist/aos.css';

const VosQuestionsComponent: FC = () => (
    <div data-aos="slide-up" className="container-question">
        <div className="row">
            <div className="col-6" />
            <div className="col-lg-6 col-sm-12 background-transparency-question">
                <div id="vosquestion__header">
                    <div className="header__right">
                        <h1 style={{ color: '#113F59' }}>Vos questions</h1>
                        <h4 style={{ color: '#333333', opacity: '0.8' }}>C'est simple</h4>
                    </div>
                    <div className="header__left" style={{ textDecoration: 'underline' }}>
                        <a href="/" className="link">
                            Voir plus
                        </a>
                    </div>
                </div>
                <Container className="container">
                    <Row className="mb-4">
                        <img className="icon-questions mr-5 mt-3" src={Icon1} alt="icon1" />
                        <div className="display-1 mr-5 mt-3 enum">1.</div>
                        <h4 className="text-question mr-5 mt-3">Vous avez une question de droit.</h4>
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
                    <Row className="mb-4">
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

export default VosQuestionsComponent;
