import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Icon1 from '~/assets/home/atelier/1.svg';
import Icon2 from '~/assets/home/question/2.svg';
import Icon3 from '~/assets/home/question/3.svg';
import Icon4 from '~/assets/home/question/4.svg';
import "./VosQuestions.css";




// eslint-disable-next-line @typescript-eslint/ban-types
const VosQuestionsComponent: React.FC<{}> = () => {
    return (
        <div className="container-question">
            <div className="row">
                <div className="col-6"></div>
                <div className="col-6 background-transparency-question" >
                    <div style={{ marginBottom: '50px' }}>
                        <Row className="flex">
                            <p className="title-questions">Vos questions</p>
                            <a href="/" className="voir-plus">Voir plus</a>
                        </Row>

                        <p className="subtitle-questions">C'est simple</p>
                    </div>
                    <Container fluid style={{ marginLeft: '150px' }} >
                        <Row className="mb-4">
                            <img className="icon-questions mr-5" src={Icon1} alt="icon1" />
                            <p className="enumeration mr-5">1.</p>
                            <p className="text mt-4">Vous avez une question de droit</p>
                        </Row>
                        <Row className="mb-4">
                            <p className="enumeration mr-5">2.</p>
                            <p className="text mr-5 mt-3">Nous vous proposons des réponses claires en vidéo</p>
                            <img className="icon-questions" src={Icon2} alt="icon2" />

                        </Row>
                        <Row className="mb-4">
                            <img className="icon-questions mr-5" src={Icon3} alt="icon3" />
                            <p className="enumeration mr-5">3.</p>
                            <p className="text mt-3">Vous visionnez la réponse qui vous convient</p>

                        </Row>
                        <Row >
                            <p className="enumeration mr-5" >4.</p>
                            <p className="text mr-5 mt-3">Et vous pouvez aussi nous suggérer une nouvelle question</p>
                            <img className="icon-questions" src={Icon4} alt="icon4" />

                        </Row>
                    </Container>
                </div>
            </div>

        </div>
    );
};

export default VosQuestionsComponent;
