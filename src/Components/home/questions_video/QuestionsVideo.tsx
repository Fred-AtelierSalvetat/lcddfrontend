import React, { FC } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import './QuestionsVideo.css';
import { AiOutlineLike } from 'react-icons/ai';

const QuestionsVideoComponent: FC = () => {
    return (
        <div className="d-flex justify-content-center flex-wrap  mt-2">
            <Container>
                <h1 className=" mb-4 mt-3" style={{ color: ' #113F59', textAlign: 'left' }}>
                    Questions en attente
                </h1>
            </Container>

            <div className="styled-card-questions">
                <Row>
                    <Col xs="11">
                        <p className=" ml-4 mt-3">
                            Question 1 Question 2 Question 3 Question 4 Question 5 Question 6 Question 7 Question 8
                            Question 9 ?
                        </p>
                    </Col>
                    <Col xs="1">
                        <Row className="likes-container">
                            <div className="number-likes">9</div>
                            <div className="like-icon">
                                <AiOutlineLike />
                            </div>
                        </Row>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default QuestionsVideoComponent;
