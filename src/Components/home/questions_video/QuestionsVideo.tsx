import React from 'react';
import { Row, Col, Card, Container } from 'react-bootstrap';
import "./QuestionsVideo.css";




// eslint-disable-next-line @typescript-eslint/ban-types
const QuestionsVideoComponent: React.FC<{}> = () => {
    return (
        <div className="d-flex justify-content-center flex-wrap  mt-2">
            <Container>
                <h1 className="questions-attente-title mb-4 mt-3">Questions en attente</h1>
            </Container>

            <div className="styled-card-questions">
                <Row>
                    <Col xs="11">
                        <Row className="questions ml-3">Question 1  Question 2  Question 3  Question 4  Question 5  Question 6  Question 7  Question 8  Question 9 ?</Row>
                    </Col>
                    <Col xs="1" className="likes-container">
                        <p className="number-likes">9</p>
                    </Col>
                </Row>
            </div>
        </div>


    );
};



export default QuestionsVideoComponent;
