import React, { FC } from 'react';
import { Row, Container } from 'react-bootstrap';
import './QuestionsVideo.css';
import { AiOutlineLike } from 'react-icons/ai';
import 'aos/dist/aos.css';

const QuestionsVideoComponent: FC = () => (
    <div id="questionvideo" data-aos="slide-up" className="d-flex justify-content-center flex-wrap  mt-2">
        <Container className="container">
            <h1 id="header" className=" mb-4 mt-3" style={{ color: ' #113F59', textAlign: 'left' }}>
                Questions en attente
            </h1>
        </Container>
        <div className="styled-card-questions" style={{ display: 'flex', flexDirection: 'row' }}>
            <div>
                <p className=" ml-4 mt-3">
                    Question 1 Question 2 Question 3 Question 4 Question 5 Question 6 Question 7 Question 8 Question 9 ?
                </p>
            </div>
            <div>
                <div className="like-icon">
                    <Row className="likes-container">
                        <div className="number-likes">9</div>
                        <div className="like-icon">
                            <AiOutlineLike />
                        </div>
                    </Row>
                </div>
            </div>
        </div>
    </div>
);

export default QuestionsVideoComponent;
